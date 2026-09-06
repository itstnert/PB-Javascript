import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  signInAnonymously
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  update,
  get,
  onValue,
  runTransaction,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// ---------------------------------------------------------
// Firebase
// ---------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyAXCUfnnCv34TMrfEYipdOQJbTGJxD3tsg",
  authDomain: "smitedraft-f2ff3.firebaseapp.com",
  projectId: "smitedraft-f2ff3",
  storageBucket: "smitedraft-f2ff3.appspot.com",
  messagingSenderId: "418345868435",
  appId: "1:418345868435:web:3fceca3be8698af57e0166",
  measurementId: "G-RNBPEGZYF6"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Anonymous sign-in, deliberately non-blocking. With wide-open database
// rules this changes nothing. Once you enable Anonymous auth in the
// Firebase console and tighten your rules (see README notes), this is what
// lets those rules identify who owns which side. If it fails, the app keeps
// working exactly as before.
signInAnonymously(getAuth(app)).catch(err => {
  console.warn("Anonymous auth unavailable — running unauthenticated.", err?.code || err);
});

// ---------------------------------------------------------
// Client identity and server clock
// ---------------------------------------------------------
const CLIENT_ID_KEY = "smdraft:clientId";
let clientId = localStorage.getItem(CLIENT_ID_KEY);
if (!clientId) {
  clientId = crypto.randomUUID();
  localStorage.setItem(CLIENT_ID_KEY, clientId);
}

let serverOffset = 0;
onValue(ref(db, ".info/serverTimeOffset"), snap => {
  serverOffset = snap.val() || 0;
});
const serverNow = () => Date.now() + serverOffset;

// ---------------------------------------------------------
// Draft rules
// app.js is a classic script and runs before this deferred module, so the
// turn table is already on window by the time anything here is called.
// ---------------------------------------------------------
const TURNS = () => window.DRAFT_TURNS || [];
const TURN_DURATION = () => window.DRAFT_TURN_DURATION || 25;
const BANS_PER_SIDE = 5;

// Ban slots are stored as an object map, not an array. Firebase silently
// converts sparse arrays (which is what an array with nulls becomes) into
// objects, so storing them as objects up front avoids the shape flip-flop.
function usedGods(state) {
  const used = new Set();
  Object.values(state.picks || {}).forEach(g => g && used.add(g));
  ["blue", "red"].forEach(team => {
    Object.values(state.bans?.[team] || {}).forEach(g => g && used.add(g));
  });
  return used;
}

const VALID_SLOT = /^[BR][1-5]$/;
const VALID_GOD = /^[A-Za-z0-9 '\-]{1,32}$/;

// ---------------------------------------------------------
// Lobby codes
// ---------------------------------------------------------
const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const genCode = (len = 5) =>
  Array.from({ length: len }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join("");

// ---------------------------------------------------------
// Connection state
// ---------------------------------------------------------
let currentCode = null;
let unsubscribe = null;

function listenToState(code) {
  if (unsubscribe) unsubscribe();
  unsubscribe = onValue(ref(db, `lobbies/${code}/state`), snap => {
    const state = snap.val();
    if (!state) return;
    state.__serverOffset = serverOffset;
    window.__draftState = state;
    window.dispatchEvent(new CustomEvent("lobby:state", { detail: state }));
  });
}

const stateRef = () => ref(db, `lobbies/${currentCode}/state`);

// Every mutation goes through here. runTransaction re-runs the mutator
// against the freshest server value and retries on conflict, so two clients
// acting at the same instant can't both advance the turn counter off the
// same stale read. Returning undefined aborts the write.
async function mutate(mutator) {
  if (!currentCode) return false;
  const result = await runTransaction(stateRef(), current => {
    if (!current) return undefined;
    return mutator(current);
  });
  return result.committed;
}

function startTurnClock(state) {
  state.timer = state.timer || {};
  state.timer.duration = TURN_DURATION();
  state.timer.startAt = serverNow();
  state.updatedAt = serverNow();
  return state;
}

// ---------------------------------------------------------
// Public API
// ---------------------------------------------------------
const RT = {
  isConnected: () => currentCode !== null,
  currentCode: () => currentCode,
  getClientId: () => clientId,
  getServerNow: serverNow,

  async createLobby() {
    const code = genCode();
    await set(ref(db, `lobbies/${code}`), {
      state: {
        names: { blue: "Blue Side", red: "Red Side" },
        owners: { blue: clientId, red: null },
        spectators: {},
        timer: { duration: TURN_DURATION(), startAt: null },
        picks: {},
        bans: { blue: {}, red: {} },
        ready: { blue: false, red: false },
        currentTurnIndex: 0,
        draftEnded: false,
        draftResult: null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }
    });
    currentCode = code;
    listenToState(code);
    return code;
  },

  async checkLobbyState(code) {
    try {
      const snap = await get(ref(db, `lobbies/${code}/state`));
      return snap.val();
    } catch (error) {
      console.error("Error checking lobby state:", error);
      return null;
    }
  },

  // Claims a free side and returns which one, or null if the lobby filled
  // up first. No setTimeout guesswork — the state is read, not waited for.
  async joinLobby(code, knownState = null) {
    const state = knownState || (await RT.checkLobbyState(code));
    if (!state) throw new Error("Lobby not found");

    currentCode = code;
    listenToState(code);

    if (state.owners?.blue === clientId) return "blue";
    if (state.owners?.red === clientId) return "red";

    for (const side of ["red", "blue"]) {
      const claimed = await RT.claimSide(side);
      if (claimed) return side;
    }
    return null;
  },

  // Atomic. Two people hitting Join at the same moment can't both take red.
  async claimSide(side) {
    if (!currentCode || !["blue", "red"].includes(side)) return false;
    const result = await runTransaction(
      ref(db, `lobbies/${currentCode}/state/owners/${side}`),
      owner => (owner && owner !== clientId ? undefined : clientId)
    );
    return result.committed && result.snapshot.val() === clientId;
  },

  async joinAsSpectator(code, spectatorName = "Spectator") {
    currentCode = code;
    window.__isSpectator = true; // set before listening, or the first
                                 // state event renders the player view
    await update(ref(db), {
      [`lobbies/${code}/state/spectators/${clientId}`]: spectatorName,
      [`lobbies/${code}/state/updatedAt`]: serverTimestamp()
    });
    listenToState(code);
  },

  // -------------------------------------------------------
  // Draft actions. Each one re-validates the turn server-side
  // before it commits, so a stale or malicious client can't
  // pick out of order or fill someone else's slot.
  // -------------------------------------------------------
  async setPick(slot, god, expectedTurn) {
    if (!VALID_SLOT.test(slot) || !VALID_GOD.test(god)) {
      console.error("Rejected pick:", slot, god);
      return false;
    }
    return mutate(state => {
      if (state.draftEnded) return undefined;
      if (state.currentTurnIndex !== expectedTurn) return undefined;

      const turn = TURNS()[expectedTurn];
      if (!turn || turn.type !== "pick" || turn.slot !== slot) return undefined;
      if (state.owners?.[turn.team] !== clientId) return undefined;
      if (state.picks?.[slot]) return undefined;
      if (usedGods(state).has(god)) return undefined;

      state.picks = state.picks || {};
      state.picks[slot] = god;
      state.currentTurnIndex = expectedTurn + 1;
      return startTurnClock(state);
    });
  },

  async setBan(team, index, god, expectedTurn) {
    if (!["blue", "red"].includes(team)) return false;
    if (!Number.isInteger(index) || index < 0 || index >= BANS_PER_SIDE) return false;
    if (!VALID_GOD.test(god)) {
      console.error("Rejected ban:", god);
      return false;
    }
    return mutate(state => {
      if (state.draftEnded) return undefined;
      if (state.currentTurnIndex !== expectedTurn) return undefined;

      const turn = TURNS()[expectedTurn];
      if (!turn || turn.type !== "ban") return undefined;
      if (turn.team !== team || turn.index !== index) return undefined;
      if (state.owners?.[team] !== clientId) return undefined;
      if (usedGods(state).has(god)) return undefined;

      state.bans = state.bans || {};
      state.bans[team] = state.bans[team] || {};
      state.bans[team][index] = god;
      state.currentTurnIndex = expectedTurn + 1;
      return startTurnClock(state);
    });
  },

  // Undo only works on your own most recent action, and it rewinds the
  // turn counter along with the slot. Clearing without the rewind is what
  // used to strand a lobby mid-draft.
  async clearPick(slot) {
    if (!VALID_SLOT.test(slot)) return false;
    return mutate(state => {
      if (state.draftEnded) return undefined;
      const prev = (state.currentTurnIndex || 0) - 1;
      const turn = TURNS()[prev];
      if (!turn || turn.type !== "pick" || turn.slot !== slot) return undefined;
      if (state.owners?.[turn.team] !== clientId) return undefined;
      if (!state.picks?.[slot]) return undefined;

      state.picks[slot] = null;
      state.currentTurnIndex = prev;
      return startTurnClock(state);
    });
  },

  async clearBan(team, index) {
    if (!["blue", "red"].includes(team)) return false;
    return mutate(state => {
      if (state.draftEnded) return undefined;
      const prev = (state.currentTurnIndex || 0) - 1;
      const turn = TURNS()[prev];
      if (!turn || turn.type !== "ban") return undefined;
      if (turn.team !== team || turn.index !== index) return undefined;
      if (state.owners?.[team] !== clientId) return undefined;
      if (!state.bans?.[team]?.[index]) return undefined;

      state.bans[team][index] = null;
      state.currentTurnIndex = prev;
      return startTurnClock(state);
    });
  },

  async skipBan(expectedTurn) {
    return mutate(state => {
      if (state.draftEnded) return undefined;
      if (state.currentTurnIndex !== expectedTurn) return undefined;
      const turn = TURNS()[expectedTurn];
      if (!turn || turn.type !== "ban") return undefined;

      state.currentTurnIndex = expectedTurn + 1;
      return startTurnClock(state);
    });
  },

  async forfeitDraft(team, expectedTurn = null) {
    if (!["blue", "red"].includes(team)) return false;
    return mutate(state => {
      if (state.draftEnded) return undefined;
      if (expectedTurn !== null && state.currentTurnIndex !== expectedTurn) return undefined;

      state.draftEnded = true;
      state.draftResult = `${team}_forfeit`;
      state.timer = state.timer || {};
      state.timer.startAt = null;
      state.updatedAt = serverNow();
      return state;
    });
  },

  // -------------------------------------------------------
  // Lobby housekeeping
  // -------------------------------------------------------
  async updateName(side, name) {
    if (!currentCode || !["blue", "red"].includes(side)) return;
    await update(ref(db), {
      [`lobbies/${currentCode}/state/names/${side}`]: String(name).slice(0, 40),
      [`lobbies/${currentCode}/state/updatedAt`]: serverTimestamp()
    });
  },

  async setReady(side, isReady) {
    if (!currentCode || !["blue", "red"].includes(side)) return;
    await update(ref(db), {
      [`lobbies/${currentCode}/state/ready/${side}`]: !!isReady,
      [`lobbies/${currentCode}/state/updatedAt`]: serverTimestamp()
    });
  },

  async resetTimer(duration = TURN_DURATION()) {
    if (!currentCode) return;
    await update(ref(db), {
      [`lobbies/${currentCode}/state/timer/duration`]: duration,
      [`lobbies/${currentCode}/state/timer/startAt`]: serverTimestamp(),
      [`lobbies/${currentCode}/state/updatedAt`]: serverTimestamp()
    });
  },

  async startTimer(duration = TURN_DURATION()) {
    return RT.resetTimer(duration);
  }
};

window.RT = RT;
