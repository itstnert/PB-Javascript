import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  update,
  get,
  onValue,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// Firebase config
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

// Persistent client ID
const CLIENT_ID_KEY = "smdraft:clientId";
let clientId = localStorage.getItem(CLIENT_ID_KEY);
if (!clientId) {
  clientId = crypto.randomUUID();
  localStorage.setItem(CLIENT_ID_KEY, clientId);
}

// Sync server time offset
let serverOffset = 0;
get(ref(db, ".info/serverTimeOffset")).then(snap => {
  serverOffset = snap.val() || 0;
});

// Lobby code generator
const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const genCode = (len = 5) =>
  Array.from({ length: len }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join("");

// Global state
let currentCode = null;
let unsubscribe = null;

// Realtime API
const RT = {
  isConnected: () => currentCode !== null,
  currentCode: () => currentCode,
  getClientId: () => clientId,

async createLobby() {
  currentCode = genCode();
  await set(ref(db, `lobbies/${currentCode}`), {
    state: {
      names: { blue: "Blue Side", red: "Red Side" },
      owners: { blue: clientId, red: null },  // Creator gets blue
      timer: { duration: 20, startAt: null },
      picks: {},
      bans: { blue: [null, null, null, null, null], red: [null, null, null, null, null] },
      ready: { blue: false, red: false },
      currentTurnIndex: 0,
      updatedAt: serverTimestamp()
    }
  });

  listenToState(currentCode);
  // Creator already owns blue from the initial state
  return currentCode;
},

  async joinLobby(code) {
    currentCode = code;
    listenToState(code);
    await RT.claimSide("red", "Red Side");
  },

  async setPick(slot, god) {
    if (!currentCode || !slot || typeof god !== "string") return;
    if (!/^[BR][1-5]$/.test(slot)) return console.error("Invalid slot:", slot);

    const updates = {
      [`lobbies/${currentCode}/state/picks/${slot}`]: god,
      [`lobbies/${currentCode}/state/currentTurnIndex`]: (window.__draftState?.currentTurnIndex || 0) + 1,
      [`lobbies/${currentCode}/state/updatedAt`]: serverTimestamp()
    };

    await update(ref(db), updates);
  },

  async clearPick(slot) {
    if (!currentCode || !slot) return;
    if (!/^[BR][1-5]$/.test(slot)) return console.error("Invalid slot:", slot);

    const updates = {
      [`lobbies/${currentCode}/state/picks/${slot}`]: null,
      [`lobbies/${currentCode}/state/updatedAt`]: serverTimestamp()
    };

    await update(ref(db), updates);
  },

  async setBan(team, index, god) {
    if (!currentCode) return;
    if (!["blue", "red"].includes(team)) return console.error("Invalid team:", team);
    if (typeof index !== "number" || index < 0 || index > 4) return console.error("Invalid ban index:", index);
    if (typeof god !== "string" || god.includes(".") || god.includes("/")) return console.error("Invalid god name:", god);

    const path = `lobbies/${currentCode}/state/bans/${team}`;

    try {
      const bansSnap = await get(ref(db, path));
      let bans = bansSnap.val() || [null, null, null, null, null];
      while (bans.length < 5) bans.push(null);

      bans[index] = god;

      const updates = {
        [path]: bans,
        [`lobbies/${currentCode}/state/currentTurnIndex`]: (window.__draftState?.currentTurnIndex || 0) + 1,
        [`lobbies/${currentCode}/state/updatedAt`]: serverTimestamp()
      };

      console.log("✅ Updating bans:", updates);
      await update(ref(db), updates);
    } catch (err) {
      console.error("🔥 Firebase setBan failed:", err);
    }
  },

  async clearBan(team, index) {
    if (!currentCode) return;
    if (!["blue", "red"].includes(team)) return;
    if (index < 0 || index > 4) return;

    const updates = {
      [`lobbies/${currentCode}/state/bans/${team}/${index}`]: null,
      [`lobbies/${currentCode}/state/updatedAt`]: serverTimestamp()
    };

    await update(ref(db), updates);
  },

  async updateName(side, name) {
    if (!currentCode || !["blue", "red"].includes(side)) return;
    const updates = {
      [`lobbies/${currentCode}/state/names/${side}`]: name,
      [`lobbies/${currentCode}/state/updatedAt`]: serverTimestamp()
    };
    await update(ref(db), updates);
  },

  async setReady(side, isReady) {
    if (!currentCode || !["blue", "red"].includes(side)) return;
    const updates = {
      [`lobbies/${currentCode}/state/ready/${side}`]: isReady,
      [`lobbies/${currentCode}/state/updatedAt`]: serverTimestamp()
    };
    await update(ref(db), updates);
  },

  async claimSide(side, name) {
    if (!currentCode || !["blue", "red"].includes(side)) return;
    const updates = {
      [`lobbies/${currentCode}/state/owners/${side}`]: clientId,
      [`lobbies/${currentCode}/state/names/${side}`]: name,
      [`lobbies/${currentCode}/state/updatedAt`]: serverTimestamp()
    };
    await update(ref(db), updates);
  },

  async resetTimer(duration = 20) {
    if (!currentCode) return;
    const updates = {
      [`lobbies/${currentCode}/state/timer/duration`]: duration,
      [`lobbies/${currentCode}/state/timer/startAt`]: serverTimestamp(),
      [`lobbies/${currentCode}/state/updatedAt`]: serverTimestamp()
    };
    await update(ref(db), updates);
  },

  async startTimer(duration = 20) {
    return RT.resetTimer(duration);
  }
};

// Firebase listener
function listenToState(code) {
  if (unsubscribe) unsubscribe();
  const stateRef = ref(db, `lobbies/${code}/state`);
  unsubscribe = onValue(stateRef, (snap) => {
    const state = snap.val();
    if (state) {
      state.__serverOffset = serverOffset;
      window.__draftState = state;
      window.dispatchEvent(new CustomEvent("lobby:state", { detail: state }));
    }
  });
}

// Expose globally
window.RT = RT;
