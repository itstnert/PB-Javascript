const characters = [
    { name: "Achilles", image: "Smite Icons/Achilles.png", roles: ["Solo", "Jungle", "Smite 2"] },
    { name: "Agni", image: "Smite Icons/Agni.png", roles: ["Mid", "Carry", "Smite 2"] },
    { name: "Ah Muzen Cab", image: "Smite Icons/Ah_Muzen_Cab.png", roles: ["Mid", "Carry"] },
    { name: "Ah Puch", image: "Smite Icons/Ah_Puch.png", roles: ["Mid", "Solo", "Smite 2"]  },
    { name: "Aladdin", image: "Smite Icons/Aladdin.png", roles: ["Jungle", "Mid", "Smite 2"]   },
    { name: "Amaterasu", image: "Smite Icons/Amaterasu.png", roles: ["Solo", "Jungle", "Smite 2"]  },
    { name: "Anhur", image: "Smite Icons/Anhur.png", roles: ["Carry", "Smite 2"]  },
    { name: "Anubis", image: "Smite Icons/Anubis.png", roles: ["Mid", "Smite 2"]  },
    { name: "Ao Kuang", image: "Smite Icons/Ao_Kuang.png", roles: ["Jungle"]  },
    { name: "Aphrodite", image: "Smite Icons/Aphrodite.png", roles: ["Support", "Mid", "Smite 2"]  },
    { name: "Apollo", image: "Smite Icons/Apollo.png", roles: ["Carry", "Solo", "Support", "Smite 2"]  },
    { name: "Arachne", image: "Smite Icons/Arachne.png", roles: ["Jungle"]  },
    { name: "Ares", image: "Smite Icons/Ares.png", roles: ["Support", "Smite 2"]  },
    { name: "Artemis", image: "Smite Icons/Artemis.png", roles: ["Carry", "Smite 2"]  },
    { name: "Artio", image: "Smite Icons/Artio.png", roles: ["Solo", "Support", "Smite 2"]  },
    { name: "Athena", image: "Smite Icons/Athena.png", roles: ["Support", "Jungle", "Smite 2"]  },
    { name: "Atlas", image: "Smite Icons/Atlas.png", roles: ["Support", "Mid", "Smite 2"]  },
    { name: "Awilix", image: "Smite Icons/Awilix.png", roles: ["Jungle", "Smite 2"]  },
    { name: "Baba Yaga", image: "Smite Icons/Baba_Yaga.png", roles: ["Mid"]  },
    { name: "Bacchus", image: "Smite Icons/Bacchus.png", roles: ["Support", "Solo", "Jungle", "Smite 2"]  },
    { name: "Bake Kujira", image: "Smite Icons/Bake_Kujira.png", roles: ["Solo"]  },
    { name: "Bakasura", image: "Smite Icons/Bakasura.png", roles: ["Jungle"]  },
    { name: "Baron Samedi", image: "Smite Icons/Baron_Samedi.png", roles: ["Support", "Mid", "Solo", "Smite 2"]  },
    { name: "Bastet", image: "Smite Icons/Bastet.png", roles: ["Jungle", "Solo", "Smite 2"]  },
    { name: "Bellona", image: "Smite Icons/Bellona.png", roles: ["Solo", "Smite 2"]  },
    { name: "Cabrakan", image: "Smite Icons/Cabrakan.png", roles: ["Support", "Jungle", "Solo", "Smite 2"]  },
    { name: "Camazotz", image: "Smite Icons/Camazotz.png", roles: ["Jungle", "Solo"]  },
    { name: "Cerberus", image: "Smite Icons/Cerberus.png", roles: ["Solo", "Support", "Smite 2"]  },
    { name: "Cernunnos", image: "Smite Icons/Cernunnos.png", roles: ["Carry", "Jungle", "Smite 2"]  },
    { name: "Chaac", image: "Smite Icons/Chaac.png", roles: ["Solo", "Smite 2"]  },
    { name: "Chang'e", image: "Smite Icons/Chang'e.png", roles: ["Mid", "Solo"]  },
    { name: "Charon", image: "Smite Icons/Charon.png", roles: ["Support", "Mid", "Smite 2"]  },
    { name: "Charybdis", image: "Smite Icons/Charybdis.png", roles: ["Carry"]  },
    { name: "Chernobog", image: "Smite Icons/Chernobog.png", roles: ["Carry"]  },
    { name: "Chiron", image: "Smite Icons/Chiron.png", roles: ["Carry", "Mid", "Smite 2"]  },
    { name: "Chronos", image: "Smite Icons/Chronos.png", roles: ["Carry", "Mid", "Smite 2"]  },
    { name: "Cliodhna", image: "Smite Icons/Cliodhna.png", roles: ["Jungle", "Solo"]  },
    { name: "Cthulhu", image: "Smite Icons/Cthulhu.png", roles: ["Solo"]  },
    { name: "Cu Chulainn", image: "Smite Icons/Cu_Chulainn.png", roles: ["Solo", "Smite 2"]  },
    { name: "Cupid", image: "Smite Icons/Cupid.png", roles: ["Carry", "Smite 2"]  },
    { name: "Da Ji", image: "Smite Icons/Da_Ji.png", roles: ["Jungle", "Smite 2"]  },
    { name: "Danzaburou", image: "Smite Icons/Danzaburou.png", roles: ["Carry", "Smite 2"]  },
    { name: "Discordia", image: "Smite Icons/Discordia.png", roles: ["Mid", "Carry", "Smite 2"]  },
    { name: "Erlang Shen", image: "Smite Icons/Erlang_Shen.png", roles: ["Jungle"]   },
    { name: "Eset", image: "Smite Icons/Eset.png", roles: ["Support", "Mid", "Smite 2"]   },
    { name: "Fafnir", image: "Smite Icons/Fafnir.png", roles: ["Support"]   },
    { name: "Fenrir", image: "Smite Icons/Fenrir.png", roles: ["Jungle", "Support", "Smite 2"]   },
    { name: "Freya", image: "Smite Icons/Freya.png", roles: ["Carry"]   },
    { name: "Ganesha", image: "Smite Icons/Ganesha.png", roles: ["Support", "Solo", "Smite 2"]   },
    { name: "Geb", image: "Smite Icons/Geb.png", roles: ["Support", "Smite 2"]   },
    { name: "Gilgamesh", image: "Smite Icons/Gilgamesh.png", roles: ["Jungle", "Solo", "Smite 2"]   },
    { name: "Guan Yu", image: "Smite Icons/Guan_Yu.png", roles: ["Solo", "Support", "Smite 2"]   },
    { name: "Hachiman", image: "Smite Icons/Hachiman.png", roles: ["Carry", "Smite 2"]   },
    { name: "Hades", image: "Smite Icons/Hades.png", roles: ["Solo", "Smite 2"]   },
    { name: "He Bo", image: "Smite Icons/He_Bo.png", roles: ["Jungle", "Mid"]   },
    { name: "Hecate", image: "Smite Icons/Hecate.png", roles: ["Mid", "Support", "Smite 2"]   },
    { name: "Heimdallr", image: "Smite Icons/Heimdallr.png", roles: ["Carry"]   },
    { name: "Hel", image: "Smite Icons/Hel.png", roles: ["Mid", "Support"]   },
    { name: "Hera", image: "Smite Icons/Hera.png", roles: ["Mid"]   },
    { name: "Hercules", image: "Smite Icons/Hercules.png", roles: ["Solo", "Jungle", "Support", "Smite 2"]   },
    { name: "Horus", image: "Smite Icons/Horus.png", roles: ["Support", "Solo", "Jungle", "Smite 2"]   },
    { name: "Hou Yi", image: "Smite Icons/Hou_Yi.png", roles: ["Carry", "Smite 2"]   },
    { name: "Hun Batz", image: "Smite Icons/Hun_Batz.png", roles: ["Jungle", "Smite 2"]   },
    { name: "Ishtar", image: "Smite Icons/Ishtar.png", roles: ["Carry", "Smite 2"]   },
    { name: "Ix Chel", image: "Smite Icons/Ix_Chel.png", roles: ["Mid", "Support", "Smite 2"]   },
    { name: "Izanami", image: "Smite Icons/Izanami.png", roles: ["Carry", "Smite 2"]   },
    { name: "Janus", image: "Smite Icons/Janus.png", roles: ["Mid", "Smite 2"]   },
    { name: "Jing Wei", image: "Smite Icons/Jing_Wei.png", roles: ["Carry", "Smite 2"]   },
    { name: "Jormungandr", image: "Smite Icons/Jormungandr.png", roles: ["Solo", "Support", "Smite 2"]   },
    { name: "Kali", image: "Smite Icons/Kali.png", roles: ["Jungle", "Carry", "Smite 2"]   },
    { name: "Khepri", image: "Smite Icons/Khepri.png", roles: ["Support", "Smite 2"]   },
    { name: "King Arthur", image: "Smite Icons/King_Arthur.png", roles: ["Solo"]   },
    { name: "Kukulkan", image: "Smite Icons/Kukulkan.png", roles: ["Mid", "Smite 2"]   },
    { name: "Kumbhakarna", image: "Smite Icons/Kumbhakarna.png", roles: ["Support"]   },
    { name: "Kuzenbo", image: "Smite Icons/Kuzenbo.png", roles: ["Support", "Solo"]   },
    { name: "Lancelot", image: "Smite Icons/Lancelot.png", roles: ["Jungle"]    },
    { name: "Loki", image: "Smite Icons/Loki.png", roles: ["Jungle", "Solo", "Smite 2"]    },
    { name: "Maman Brigitte", image: "Smite Icons/Maman_Brigitte.png", roles: ["Jungle", "Mid"]    },
    { name: "Martichoras", image: "Smite Icons/Martichoras.png", roles: ["Mid", "Carry"]    },
    { name: "Maui", image: "Smite Icons/Maui.png", roles: ["Support"]    },
    { name: "Medusa", image: "Smite Icons/Medusa.png", roles: ["Carry", "Mid", "Smite 2"]    },
    { name: "Mercury", image: "Smite Icons/Mercury.png", roles: ["Jungle", "Smite 2"]    },
    { name: "Merlin", image: "Smite Icons/Merlin.png", roles: ["Mid", "Smite 2"]    },
    { name: "Morgan Le Fay", image: "Smite Icons/Morgan_Le_Fay.png", roles: ["Mid", "Solo", "Smite 2"]    },
    { name: "Mordred", image: "Smite Icons/mordred.png", roles: ["Solo", "Jungle", "Smite 2"]    },
    { name: "Mulan", image: "Smite Icons/Mulan.png", roles: ["Solo", "Smite 2"]    },
    { name: "Ne Zha", image: "Smite Icons/Ne_Zha.png", roles: ["Jungle", "Support", "Solo", "Smite 2"]    },
    { name: "Neith", image: "Smite Icons/Neith.png", roles: ["Mid", "Carry", "Smite 2"]    },
    { name: "Nemesis", image: "Smite Icons/Nemesis.png", roles: ["Jungle", "Solo", "Smite 2"]    },
    { name: "Nike", image: "Smite Icons/Nike.png", roles: ["Solo"]    },
    { name: "Nox", image: "Smite Icons/Nox.png", roles: ["Support", "Mid"]    },
    { name: "Nut", image: "Smite Icons/Nut.png", roles: ["Carry", "Mid", "Smite 2"]    },
    { name: "Nu Wa", image: "Smite Icons/Nu_Wa.png", roles: ["Mid", "Carry", "Smite 2"]    },
    { name: "Odin", image: "Smite Icons/Odin.png", roles: ["Solo", "Jungle", "Support", "Smite 2"]    },
    { name: "Olorun", image: "Smite Icons/Olorun.png", roles: ["Carry"]    },
    { name: "Osiris", image: "Smite Icons/Osiris.png", roles: ["Solo", "Jungle", "Smite 2"]    },
    { name: "Pele", image: "Smite Icons/Pele.png", roles: ["Jungle", "Solo", "Smite 2"]    },
    { name: "Persephone", image: "Smite Icons/Persephone.png", roles: ["Mid"]    },
    { name: "Poseidon", image: "Smite Icons/Poseidon.png", roles: ["Mid", "Carry", "Smite 2"]    },
    { name: "Princess Bari", image: "Smite Icons/Princess_Bari.png", roles: ["Mid", "Carry","Smite 2"]    },
    { name: "Ra", image: "Smite Icons/Ra.png", roles: ["Mid", "Solo", "Smite 2"]    },
    { name: "Raijin", image: "Smite Icons/Raijin.png", roles: ["Mid"]    },
    { name: "Rama", image: "Smite Icons/Rama.png", roles: ["Carry", "Smite 2"]    },
    { name: "Ratatoskr", image: "Smite Icons/Ratatoskr.png", roles: ["Jungle", "Solo", "Support", "Smite 2"]    },
    { name: "Ravana", image: "Smite Icons/Ravana.png", roles: ["Jungle", "Solo", "Smite 2"]    },
    { name: "Scylla", image: "Smite Icons/Scylla.png", roles: ["Mid", "Support", "Smite 2"]    },
    { name: "Serqet", image: "Smite Icons/Serqet.png", roles: ["Jungle", "Support"]    },
    { name: "Set", image: "Smite Icons/Set.png", roles: ["Jungle", "Mid", "Solo"]    },
    { name: "Shiva", image: "Smite Icons/Shiva.png", roles: ["Solo"]    },
    { name: "Skadi", image: "Smite Icons/Skadi.png", roles: ["Carry"]    },
    { name: "Sobek", image: "Smite Icons/Sobek.png", roles: ["Solo", "Support", "Smite 2"]    },
    { name: "Sol", image: "Smite Icons/Sol.png", roles: ["Carry", "Mid", "Smite 2"]    },
    { name: "Sun Wukong", image: "Smite Icons/Sun_Wukong.png", roles: ["Solo", "Mid", "Smite 2"]    },
    { name: "Surtr", image: "Smite Icons/Surtr.png", roles: ["Solo", "Jungle"]    },
    { name: "Susano", image: "Smite Icons/Susano.png", roles: ["Jungle", "Smite 2"]    },
    { name: "Sylvanus", image: "Smite Icons/Sylvanus.png", roles: ["Support", "Smite 2"]    },
    { name: "Terra", image: "Smite Icons/Terra.png", roles: ["Support", "Solo"]    },
    { name: "Thanatos", image: "Smite Icons/Thanatos.png", roles: ["Jungle", "Solo", "Smite 2"]    },
    { name: "The Morrigan", image: "Smite Icons/The_Morrigan.png", roles: ["Mid", "Smite 2"]    },
    { name: "Thor", image: "Smite Icons/Thor.png", roles: ["Jungle", "Solo", "Smite 2"]    },
    { name: "Thoth", image: "Smite Icons/Thoth.png", roles: ["Mid"]    },
    { name: "Tiamat", image: "Smite Icons/Tiamat.png", roles: ["Mid"]    },
    { name: "Tsukuyomi", image: "Smite Icons/Tsukuyomi.png", roles: ["Mid", "Jungle", "Solo", "Smite 2"]    },
    { name: "Tyr", image: "Smite Icons/Tyr.png", roles: ["Support", "Solo"]    },
    { name: "Ullr", image: "Smite Icons/Ullr.png", roles: ["Mid", "Carry", "Jungle", "Smite 2"]    },
    { name: "Vamana", image: "Smite Icons/Vamana.png", roles: ["Solo"]    },
    { name: "Vulcan", image: "Smite Icons/Vulcan.png", roles: ["Mid", "Support", "Smite 2"]    },
    { name: "Xbalanque", image: "Smite Icons/Xbalanque.png", roles: ["Carry", "Smite 2"]    },
    { name: "Xing Tian", image: "Smite Icons/Xing_Tian.png", roles: ["Support", "Solo", "Smite 2"]    },
    { name: "Yemoja", image: "Smite Icons/Yemoja.png", roles: ["Support", "Mid", "Smite 2"]    },
    { name: "Ymir", image: "Smite Icons/Ymir.png", roles: ["Support", "Solo", "Smite 2"]    },
    { name: "Yu Huang", image: "Smite Icons/Yu_Huang.png", roles: ["Mid"]    },
    { name: "Zeus", image: "Smite Icons/Zeus.png", roles: ["Mid", "Carry", "Smite 2"]    },
    { name: "Zhong Kui", image: "Smite Icons/Zhong_Kui.png", roles: ["Mid", "Solo"]    }
];

// ==========================================================
//  Draft order — single source of truth.
//
//  Split ban phases, 5 bans per side:
//    Ban 1   3 each, blue first     -> ban slots 1-3
//    Pick 1  B1 R1 R2 B2 B3 R3
//    Ban 2   2 each, RED first      -> ban slots 4-5
//    Pick 2  R4 B4 B5 R5
//
//  Every turn names the exact slot it fills, so drops are validated
//  against it instead of guessed at. `phase` drives the readouts.
// ==========================================================
const TURN_ORDER = [
  // --- Ban phase 1 — blue first, 3 each ---
  { type: 'ban',  team: 'blue', index: 0, phase: 'First bans'  }, //  0
  { type: 'ban',  team: 'red',  index: 0, phase: 'First bans'  }, //  1
  { type: 'ban',  team: 'blue', index: 1, phase: 'First bans'  }, //  2
  { type: 'ban',  team: 'red',  index: 1, phase: 'First bans'  }, //  3
  { type: 'ban',  team: 'blue', index: 2, phase: 'First bans'  }, //  4
  { type: 'ban',  team: 'red',  index: 2, phase: 'First bans'  }, //  5

  // --- Pick phase 1 ---
  { type: 'pick', team: 'blue', slot: 'B1', phase: 'First picks' }, //  6
  { type: 'pick', team: 'red',  slot: 'R1', phase: 'First picks' }, //  7
  { type: 'pick', team: 'red',  slot: 'R2', phase: 'First picks' }, //  8
  { type: 'pick', team: 'blue', slot: 'B2', phase: 'First picks' }, //  9
  { type: 'pick', team: 'blue', slot: 'B3', phase: 'First picks' }, // 10
  { type: 'pick', team: 'red',  slot: 'R3', phase: 'First picks' }, // 11

  // --- Ban phase 2 — red first, 2 each ---
  { type: 'ban',  team: 'red',  index: 3, phase: 'Second bans'  }, // 12
  { type: 'ban',  team: 'blue', index: 3, phase: 'Second bans'  }, // 13
  { type: 'ban',  team: 'red',  index: 4, phase: 'Second bans'  }, // 14
  { type: 'ban',  team: 'blue', index: 4, phase: 'Second bans'  }, // 15

  // --- Pick phase 2 ---
  { type: 'pick', team: 'red',  slot: 'R4', phase: 'Second picks' }, // 16
  { type: 'pick', team: 'blue', slot: 'B4', phase: 'Second picks' }, // 17
  { type: 'pick', team: 'blue', slot: 'B5', phase: 'Second picks' }, // 18
  { type: 'pick', team: 'red',  slot: 'R5', phase: 'Second picks' }  // 19
];

const BANS_PER_SIDE = 5;
const TURN_DURATION = 25;
const BUILD = 'V4.3';

// realtime.js validates against the same table. app.js is a classic script
// and runs before the deferred module, so this is set in time.
window.DRAFT_TURNS = TURN_ORDER;
window.DRAFT_TURN_DURATION = TURN_DURATION;

console.log(
  `%cSmite Draft ${BUILD}%c  ${TURN_ORDER.length} turns \u00b7 ${BANS_PER_SIDE} bans/side \u00b7 split ban phases`,
  'font-weight:bold;color:#F0C060', 'color:#8A8397'
);

// If the active player's browser dies, their opponent takes over the
// timeout after this grace period so the draft can't hang forever.
const OPPONENT_GRACE_MS = 4000;
const TEAM_LABEL = { blue: 'Order', red: 'Chaos' };

// ========== Globals ==========
let activeRoles = new Set();
let timerInterval = null;
let spectatorTimerInterval = null;
let readyCountdown = null;
let readyInProgress = false;
let hasStartedDraft = false;
let draftEnded = false;
let draftResult = null;
let resultShown = false;
let timeoutFiredFor = -1;

// ========== Utility ==========
function isConnected() {
  return !!window.RT?.isConnected();
}

function mySide() {
  if (window.__isSpectator) return null;
  const state = window.__draftState;
  if (!state || !isConnected()) return null;
  const me = window.RT?.getClientId();
  if (state.owners?.blue === me) return 'blue';
  if (state.owners?.red === me) return 'red';
  return null;
}

function canEditTarget(target) {
  if (window.__isSpectator) return false;
  const side = mySide();
  if (!side) return false;
  if (target.closest('.blue-side') || target.closest('.bans.blue')) return side === 'blue';
  if (target.closest('.red-side') || target.closest('.bans.red')) return side === 'red';
  return false;
}

// Firebase turns sparse arrays into objects, so bans come back either way.
function banList(state, team) {
  const raw = state?.bans?.[team];
  const out = new Array(BANS_PER_SIDE).fill(null);
  if (!raw) return out;
  if (Array.isArray(raw)) {
    raw.forEach((v, i) => { if (i < BANS_PER_SIDE) out[i] = v || null; });
  } else {
    Object.entries(raw).forEach(([k, v]) => {
      const i = parseInt(k, 10);
      if (Number.isInteger(i) && i >= 0 && i < BANS_PER_SIDE) out[i] = v || null;
    });
  }
  return out;
}

function iconPath(godName) {
  return `Smite Icons/${godName.replace(/ /g, '_')}S2.png`;
}

// ========== God bank ==========
function createCharacterCard(char) {
  const card = document.createElement('div');
  card.className = 'character-card';

  const img = document.createElement('img');
  img.src = iconPath(char.name);
  img.alt = char.name;
  img.id = char.name;
  img.className = 'character-image';
  img.draggable = true;
  img.loading = 'lazy';
  img.decoding = 'async';
  // Some icon files are lower-cased on disk. Case-sensitive hosts 404 on
  // those, so fall back once before giving up.
  img.addEventListener('error', function onErr() {
    img.removeEventListener('error', onErr);
    img.src = iconPath(char.name).toLowerCase();
  });
  img.addEventListener('dragstart', drag);

  const name = document.createElement('div');
  name.className = 'character-name';
  name.innerText = char.name;

  card.append(img, name);
  return card;
}

function greyOutCharacter(id) {
  document.getElementById(id)?.classList.add('greyed-out');
}
function removeGreyOutCharacter(id) {
  document.getElementById(id)?.classList.remove('greyed-out');
}

function loadCharacters() {
  const container = document.getElementById('character-list');
  if (!container) return;
  container.innerHTML = '';
  characters
    .filter(c => c.roles.includes('Smite 2'))
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(c => container.append(createCharacterCard(c)));
  filterGods();
}

// Prefix matching, not substring. Typing "x" should offer Xbalanque and
// Xing Tian, not Ix Chel. Any word in the name can be the one that matches,
// so "chel" still finds Ix Chel and "wukong" still finds Sun Wukong.
function matchesQuery(name, query) {
  if (!query) return true;
  const lower = name.toLowerCase();
  if (lower.startsWith(query)) return true;                 // "sun w" -> Sun Wukong
  return lower.split(/[\s'\-]+/).some(word => word.startsWith(query));
}

function filterGods() {
  const text = (document.getElementById('searchBox')?.value || '').trim().toLowerCase();
  const byName = new Map(characters.map(c => [c.name.toLowerCase(), c]));
  const roles = [...activeRoles];
  let shown = 0;

  document.querySelectorAll('.character-card').forEach(card => {
    const name = card.querySelector('.character-name').innerText;
    const char = byName.get(name.toLowerCase());
    // No roles selected means no role constraint. Several selected is an OR:
    // a god shows if it plays any of them.
    const roleOk = roles.length === 0 || roles.some(r => !!char?.roles.includes(r));
    const visible = matchesQuery(name, text) && roleOk;
    card.style.display = visible ? '' : 'none';
    if (visible) shown++;
  });

  const gone = document.querySelectorAll('.character-image.greyed-out').length;
  const count = document.getElementById('poolCount');
  if (count) {
    const filtered = (text || roles.length) ? ` \u00b7 ${shown} shown` : '';
    count.textContent = `${gone} off the board${filtered}`;
  }
}

function filterByRole(role) {
  if (activeRoles.has(role)) activeRoles.delete(role);
  else activeRoles.add(role);
  document.querySelectorAll('.filter-icon').forEach(icon => {
    icon.classList.toggle('filter-active', activeRoles.has(icon.dataset.role));
  });
  filterGods();
}

// ========== Slot painting ==========
// One place builds slot contents, so the connected path, the solo path and
// the initial empty render can't drift apart.
function paintPickSlot(el, slotId, god) {
  el.classList.toggle('filled', !!god);
  if (!god) {
    el.innerHTML =
      `<div class="rim"></div><div class="tag">${slotId}</div>` +
      `<div class="plate"><span class="who">Open</span></div>`;
    return;
  }
  el.innerHTML =
    `<div class="art" style="background-image:url('${iconPath(god)}')"></div>` +
    `<div class="veil"></div><div class="rim"></div><div class="tag">${slotId}</div>` +
    `<div class="plate"><span class="who">${god}</span></div>`;
}

function paintBanSlot(el, god) {
  el.classList.toggle('filled', !!god);
  el.innerHTML = god
    ? `<div class="art" style="background-image:url('${iconPath(god)}')"></div><div class="slash"></div>`
    : '';
}

function pickSlotEl(slotId) {
  const isBlue = slotId[0] === 'B';
  const idx = parseInt(slotId.slice(1), 10) - 1;
  return document.querySelectorAll(
    isBlue ? '.blue-side .pick-slot' : '.red-side .pick-slot'
  )[idx] || null;
}

function renderEmptyBoard() {
  ['B', 'R'].forEach(p => {
    for (let i = 1; i <= 5; i++) {
      const el = pickSlotEl(`${p}${i}`);
      if (el) paintPickSlot(el, `${p}${i}`, null);
    }
  });
  document.querySelectorAll('.ban-slot').forEach(el => paintBanSlot(el, null));
}

function slotIdFromTarget(target) {
  if (target.closest('.blue-side')) {
    const slots = [...document.querySelectorAll('.blue-side .pick-slot')];
    const idx = slots.indexOf(target);
    return idx >= 0 ? `B${idx + 1}` : null;
  }
  if (target.closest('.red-side')) {
    const slots = [...document.querySelectorAll('.red-side .pick-slot')];
    const idx = slots.indexOf(target);
    return idx >= 0 ? `R${idx + 1}` : null;
  }
  return null;
}

function banIndexFromTarget(target) {
  for (const team of ['blue', 'red']) {
    if (target.closest(`.bans.${team}`)) {
      // DOM order is 0..4 even though red renders mirrored in CSS.
      const slots = [...document.querySelectorAll(`.bans.${team} .ban-slot`)];
      const idx = slots.indexOf(target);
      return idx >= 0 ? { team, index: idx } : null;
    }
  }
  return null;
}

// ========== Board rendering ==========
function renderDraftFromState(state) {
  document.querySelectorAll('.character-image.greyed-out')
    .forEach(img => img.classList.remove('greyed-out'));

  ['B', 'R'].forEach(p => {
    for (let i = 1; i <= 5; i++) {
      const slotId = `${p}${i}`;
      const god = state.picks?.[slotId] || null;
      const el = pickSlotEl(slotId);
      if (el) paintPickSlot(el, slotId, god);
      if (god) greyOutCharacter(god);
    }
  });

  ['blue', 'red'].forEach(team => {
    const slots = document.querySelectorAll(`.bans.${team} .ban-slot`);
    banList(state, team).forEach((god, i) => {
      if (slots[i]) paintBanSlot(slots[i], god);
      if (god) greyOutCharacter(god);
    });
  });

  // Nothing is droppable until both sides have readied up.
  const bothReady = !!(state.ready?.blue && state.ready?.red);
  document.querySelectorAll('.ban-slot, .pick-slot')
    .forEach(slot => slot.classList.toggle('locked-slot', !bothReady));

  filterGods();
}

function highlightActiveSlot(turnIndex) {
  document.querySelectorAll('.pick-slot, .ban-slot')
    .forEach(slot => slot.classList.remove('active-turn', 'inactive-turn'));

  const turn = TURN_ORDER[turnIndex];
  if (!turn || draftEnded) return;

  const target = turn.type === 'ban'
    ? document.querySelectorAll(`.bans.${turn.team} .ban-slot`)[turn.index]
    : pickSlotEl(turn.slot);

  if (target) target.classList.add('active-turn');
}

function updateSideOwnershipIndicators() {
  const mine = mySide();
  document.querySelectorAll('.side-container').forEach(c => c.classList.remove('my-side'));
  if (window.__isSpectator || !mine) return;
  document.querySelector(mine === 'blue' ? '.blue-side' : '.red-side')
    ?.classList.add('my-side');
}

// ========== The keep: phase readout + clock ==========
function renderPhaseBanner(state) {
  const phaseEl = document.getElementById('keepPhase');
  const turnEl = document.getElementById('keepTurn');
  if (!phaseEl || !turnEl) return;

  if (draftEnded) {
    phaseEl.textContent = 'Draft over';
    turnEl.textContent = draftResult
      ? `${TEAM_LABEL[draftResult.startsWith('blue') ? 'red' : 'blue']} wins by forfeit`
      : 'Complete';
    return;
  }

  const turn = TURN_ORDER[state.currentTurnIndex || 0];
  if (!turn) {
    phaseEl.textContent = 'Draft complete';
    turnEl.textContent = 'All picks locked';
    return;
  }

  const bothReady = !!(state.ready?.blue && state.ready?.red);
  phaseEl.textContent = bothReady ? turn.phase : 'Ready up';
  turnEl.textContent = !bothReady
    ? 'Both sides must ready'
    : turn.team === mySide()
      ? `Your ${turn.type}`
      : `${TEAM_LABEL[turn.team]} to ${turn.type}`;
}

function renderSharedTimer(state) {
  const display = document.getElementById('timerDisplay');
  const wrap = document.getElementById('timerDrainWrap');
  const bar = document.getElementById('timerDrain');
  if (!display) return;

  if (!state?.timer?.startAt || !state?.timer?.duration || draftEnded) {
    display.style.display = 'none';
    if (wrap) wrap.style.display = 'none';
    clearInterval(timerInterval);
    timerInterval = null;
    return;
  }

  const total = state.timer.duration * 1000;
  const endAt = state.timer.startAt + total;
  const offset = state.__serverOffset || 0;
  const getNow = () => Date.now() + offset;

  const update = () => {
    const remaining = Math.max(0, endAt - getNow());
    const secs = Math.ceil(remaining / 1000);
    const urgent = secs <= 5;

    display.textContent = secs;
    display.style.display = 'block';
    display.classList.toggle('urgent', urgent);
    if (wrap) wrap.style.display = 'block';
    if (bar) {
      bar.style.width = `${Math.max(0, (remaining / total) * 100)}%`;
      bar.classList.toggle('urgent', urgent);
    }
    if (remaining > 0 || draftEnded) return;

    const turnIndex = state.currentTurnIndex || 0;
    const turn = TURN_ORDER[turnIndex];
    const me = mySide();
    if (!turn || !me || timeoutFiredFor === turnIndex) return;

    // The team on the clock fires immediately. The opponent takes over
    // after a grace period, which covers a dropped connection.
    if (turn.team !== me && getNow() - endAt < OPPONENT_GRACE_MS) return;

    timeoutFiredFor = turnIndex;
    clearInterval(timerInterval);
    timerInterval = null;
    handleTimeout(state);
  };

  clearInterval(timerInterval);
  update();
  timerInterval = setInterval(update, 200);
}

function handleTimeout(state) {
  if (draftEnded) return;
  const turnIndex = state.currentTurnIndex || 0;
  const turn = TURN_ORDER[turnIndex];
  if (!turn) return;

  if (turn.type === 'ban') {
    window.RT?.skipBan(turnIndex).catch(err => console.error('skipBan failed:', err));
  } else {
    draftEnded = true;
    draftResult = `${turn.team}_forfeit`;
    window.RT?.forfeitDraft(turn.team, turnIndex)
      .catch(err => console.error('forfeitDraft failed:', err));
    showDraftResult();
  }
}

function renderSpectatorTimer(state) {
  const display = document.getElementById('specTimer');
  if (!display) return;

  if (!state?.timer?.startAt || !state?.timer?.duration || state.draftEnded) {
    display.textContent = '--';
    clearInterval(spectatorTimerInterval);
    spectatorTimerInterval = null;
    return;
  }

  const endAt = state.timer.startAt + state.timer.duration * 1000;
  const offset = state.__serverOffset || 0;

  const update = () => {
    const remaining = Math.max(0, endAt - (Date.now() + offset));
    display.textContent = Math.ceil(remaining / 1000);
    if (remaining <= 0) {
      clearInterval(spectatorTimerInterval);
      spectatorTimerInterval = null;
    }
  };

  clearInterval(spectatorTimerInterval);
  update();
  spectatorTimerInterval = setInterval(update, 200);
}

function stopAllTimers() {
  clearInterval(timerInterval);
  clearInterval(spectatorTimerInterval);
  clearTimeout(readyCountdown);
  timerInterval = null;
  spectatorTimerInterval = null;
  readyCountdown = null;
}

// ========== Ready-up ==========
function initiateReadyCountdown() {
  if (hasStartedDraft || readyInProgress) return;
  const display = document.getElementById('startCountdown');
  if (!display) return;

  clearTimeout(readyCountdown);
  readyInProgress = true;
  let secondsLeft = 5;

  display.style.display = 'block';
  display.textContent = `Draft starts in ${secondsLeft}`;

  const tick = () => {
    secondsLeft--;
    if (secondsLeft > 0) {
      display.textContent = `Draft starts in ${secondsLeft}`;
      readyCountdown = setTimeout(tick, 1000);
      return;
    }
    display.style.display = 'none';
    readyInProgress = false;
    hasStartedDraft = true;
    const controls = document.getElementById('readyControls');
    if (controls) controls.style.display = 'none';
    // Only blue starts the clock, so two clients don't both write a start
    // time and shave a few hundred ms off the turn.
    if (mySide() === 'blue') window.RT?.startTimer(TURN_DURATION);
  };

  readyCountdown = setTimeout(tick, 1000);
}

function cancelAllCountdowns() {
  clearTimeout(readyCountdown);
  readyCountdown = null;
  readyInProgress = false;
  hasStartedDraft = false;
  const display = document.getElementById('startCountdown');
  if (display) display.style.display = 'none';
}

function updateReadyButtons(state) {
  const blueBtn = document.getElementById('blueReadyBtn');
  const redBtn = document.getElementById('redReadyBtn');
  if (!state || !blueBtn || !redBtn) return;

  const myId = window.RT?.getClientId();
  const blueReady = !!state.ready?.blue;
  const redReady = !!state.ready?.red;

  blueBtn.textContent = blueReady ? 'Order ready' : 'Order not ready';
  blueBtn.classList.toggle('is-ready', blueReady);
  blueBtn.disabled = state.owners?.blue !== myId || hasStartedDraft;

  redBtn.textContent = redReady ? 'Chaos ready' : 'Chaos not ready';
  redBtn.classList.toggle('is-ready', redReady);
  redBtn.disabled = state.owners?.red !== myId || hasStartedDraft;

  const bothReady = blueReady && redReady;
  if (bothReady && !readyInProgress && !hasStartedDraft) initiateReadyCountdown();
  else if (!bothReady && readyInProgress) cancelAllCountdowns();
}

// ========== Forfeit modal ==========
function showDraftResult() {
  if (!draftResult || resultShown) return;
  resultShown = true;
  stopAllTimers();

  const loserKey = draftResult === 'blue_forfeit' ? 'blue' : 'red';
  const winnerKey = loserKey === 'blue' ? 'red' : 'blue';

  const overlay = document.createElement('div');
  overlay.className = 'result-overlay';
  overlay.id = 'draftResultOverlay';

  const modal = document.createElement('div');
  modal.className = 'result-modal';
  modal.innerHTML = `
    <div class="result-icon">&#9888;</div>
    <h2 class="result-title">Draft forfeited</h2>
    <p class="result-detail ${loserKey}">
      ${TEAM_LABEL[loserKey]} did not pick within the ${TURN_DURATION} second limit.
    </p>
    <div class="result-rule"></div>
    <p class="result-winner ${winnerKey}">${TEAM_LABEL[winnerKey]} wins by forfeit</p>
    <button type="button" class="result-close">Close</button>
  `;

  overlay.append(modal);
  document.body.append(overlay);
  modal.querySelector('.result-close').addEventListener('click', () => overlay.remove());
}

// ========== Drag & drop ==========
function drag(event) {
  event.dataTransfer.setData('text', event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  clearDragOverClasses();
  event.currentTarget.classList.add('drag-over');
}

function clearDragOverClasses() {
  document.querySelectorAll('.pick-slot.drag-over, .ban-slot.drag-over')
    .forEach(el => el.classList.remove('drag-over'));
}

function dropBan(event, fromTouch = false, id = null) {
  event.preventDefault();
  const target = event.currentTarget;
  target.classList.remove('drag-over');

  const god = fromTouch ? id : event.dataTransfer.getData('text');
  if (!god || draftEnded) return;
  if (!target.classList.contains('ban-slot') || target.classList.contains('filled')) return;

  const info = banIndexFromTarget(target);
  if (!info) return;

  if (!isConnected()) {
    // Solo mode is freeform mock drafting — no turn enforcement.
    paintBanSlot(target, god);
    greyOutCharacter(god);
    filterGods();
    return;
  }

  const state = window.__draftState;
  if (!(state?.ready?.blue && state?.ready?.red)) return;
  if (!canEditTarget(target)) return;

  const turnIndex = state.currentTurnIndex || 0;
  const turn = TURN_ORDER[turnIndex];
  if (!turn || turn.type !== 'ban') return;
  if (turn.team !== mySide() || turn.team !== info.team || turn.index !== info.index) return;

  window.RT?.setBan(info.team, info.index, god, turnIndex)
    .catch(err => console.error('setBan failed:', err));
}

function dropPick(event, fromTouch = false, id = null) {
  event.preventDefault();
  const target = event.currentTarget;
  target.classList.remove('drag-over');

  const god = fromTouch ? id : event.dataTransfer.getData('text');
  if (!god || draftEnded) return;
  if (!target.classList.contains('pick-slot') || target.classList.contains('filled')) return;

  const slotId = slotIdFromTarget(target);
  if (!slotId) return;

  if (!isConnected()) {
    paintPickSlot(target, slotId, god);
    greyOutCharacter(god);
    filterGods();
    return;
  }

  const state = window.__draftState;
  if (!(state?.ready?.blue && state?.ready?.red)) return;
  if (!canEditTarget(target)) return;

  const turnIndex = state.currentTurnIndex || 0;
  const turn = TURN_ORDER[turnIndex];
  if (!turn || turn.type !== 'pick') return;
  if (turn.team !== mySide() || turn.slot !== slotId) return;

  window.RT?.setPick(slotId, god, turnIndex)
    .catch(err => console.error('setPick failed:', err));
}

// Clicking a filled slot undoes it. Online this only works on your own most
// recent action, and it rewinds the turn counter with it — otherwise the
// slot empties while the draft has moved on and the lobby soft-locks.
function removePickHandler(target) {
  if (draftEnded || !target.classList.contains('filled')) return;

  if (!isConnected()) {
    const god = target.querySelector('.who')?.textContent;
    if (god) removeGreyOutCharacter(god);
    paintPickSlot(target, slotIdFromTarget(target), null);
    filterGods();
    return;
  }

  if (!canEditTarget(target)) return;
  const slotId = slotIdFromTarget(target);
  if (!slotId) return;
  window.RT?.clearPick(slotId).catch(err => console.error('clearPick failed:', err));
}

function removeBanClick(event) {
  const target = event.currentTarget;
  if (draftEnded || !target.classList.contains('filled')) return;

  if (!isConnected()) {
    const url = target.querySelector('.art')?.style.backgroundImage || '';
    const file = url.match(/([^/"']+)S2\.png/i);
    if (file) removeGreyOutCharacter(file[1].replace(/_/g, ' '));
    paintBanSlot(target, null);
    filterGods();
    return;
  }

  if (!canEditTarget(target)) return;
  const info = banIndexFromTarget(target);
  if (!info) return;
  window.RT?.clearBan(info.team, info.index).catch(err => console.error('clearBan failed:', err));
}

function initTouchDrag() {
  let draggingId = null;
  let dragGhost = null;

  const positionGhost = (e) => {
    dragGhost.style.left = e.clientX + 'px';
    dragGhost.style.top = e.clientY + 'px';
  };
  const clearTouchDrag = () => {
    clearDragOverClasses();
    if (dragGhost) dragGhost.remove();
    dragGhost = null;
    draggingId = null;
  };

  document.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse') return; // native HTML5 drag handles mouse
    const img = e.target.closest('.character-image');
    if (!img || img.classList.contains('greyed-out')) return;
    draggingId = img.id;
    dragGhost = img.cloneNode(true);
    Object.assign(dragGhost.style, {
      position: 'fixed', pointerEvents: 'none', zIndex: '9999', opacity: '0.85',
      width: '84px', height: '84px',
      transform: 'translate(-50%, -50%) scale(1.05)',
      boxShadow: '0 12px 22px rgba(0,0,0,.55)'
    });
    dragGhost.id = draggingId + '-ghost';
    document.body.append(dragGhost);
    positionGhost(e);
  }, { passive: true });

  document.addEventListener('pointermove', (e) => {
    if (!dragGhost) return;
    e.preventDefault();
    positionGhost(e);
    clearDragOverClasses();
    document.elementFromPoint(e.clientX, e.clientY)
      ?.closest('.pick-slot, .ban-slot')?.classList.add('drag-over');
  }, { passive: false });

  const finish = (e) => {
    if (!dragGhost) return;
    dragGhost.style.display = 'none';
    const target = document.elementFromPoint(e.clientX, e.clientY)
      ?.closest('.pick-slot, .ban-slot');
    if (target && draggingId) {
      const synthetic = { currentTarget: target, preventDefault: () => {} };
      if (target.classList.contains('pick-slot')) dropPick(synthetic, true, draggingId);
      else dropBan(synthetic, true, draggingId);
    }
    clearTouchDrag();
  };

  document.addEventListener('pointerup', finish, { passive: true });
  document.addEventListener('pointercancel', clearTouchDrag, { passive: true });
}

// ========== Broadcast overlay ==========
function showSpectatorMode() {
  const overlay = document.getElementById('spectatorOverlay');
  if (!overlay) return;
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  const status = document.getElementById('lobbyStatus');
  if (status) status.textContent = `Watching ${window.RT?.currentCode() || ''}`;

  const title = prompt('Match title:', 'Smite Draft') || 'Smite Draft';
  document.getElementById('tournamentTitle').textContent = title;
  document.getElementById('blueScore').textContent = parseInt(prompt('Order score:', '0'), 10) || 0;
  document.getElementById('redScore').textContent = parseInt(prompt('Chaos score:', '0'), 10) || 0;

  const escapeHandler = (e) => {
    if (e.key !== 'Escape') return;
    hideSpectatorMode();
    document.removeEventListener('keydown', escapeHandler);
  };
  document.addEventListener('keydown', escapeHandler);

  if (window.__draftState) updateSpectatorView(window.__draftState);
}

function hideSpectatorMode() {
  const overlay = document.getElementById('spectatorOverlay');
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
  window.__isSpectator = false;
  clearInterval(spectatorTimerInterval);
  spectatorTimerInterval = null;
  ['joinLobbyBtn', 'joinCodeInput', 'createLobbyBtn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = '';
  });
}

function updateSpectatorView(state) {
  document.getElementById('specBlueTeam').textContent = state.names?.blue || 'Blue Side';
  document.getElementById('specRedTeam').textContent = state.names?.red || 'Red Side';

  const turnIndex = state.currentTurnIndex || 0;
  const turn = TURN_ORDER[turnIndex];
  const phaseEl = document.getElementById('specPhase');
  const turnEl = document.getElementById('specTurn');

  if (state.draftEnded) {
    phaseEl.textContent = 'Draft over';
    turnEl.textContent = state.draftResult
      ? `${TEAM_LABEL[state.draftResult.startsWith('blue') ? 'red' : 'blue']} wins by forfeit`
      : 'Complete';
  } else if (turn) {
    phaseEl.textContent = turn.phase;
    turnEl.textContent = `${TEAM_LABEL[turn.team]} to ${turn.type}`;
  } else {
    phaseEl.textContent = 'Draft complete';
    turnEl.textContent = 'All picks locked';
  }

  renderSpectatorTimer(state);
  updateSpectatorPicks(state);
  updateSpectatorBans(state);

  document.querySelectorAll('.bar.active').forEach(b => b.classList.remove('active'));
  if (turn && turn.type === 'pick' && !state.draftEnded) {
    const isBlue = turn.slot[0] === 'B';
    const idx = parseInt(turn.slot.slice(1), 10) - 1;
    document.querySelectorAll(
      `${isBlue ? '#specBluePicks' : '#specRedPicks'} .bar`
    )[idx]?.classList.add('active');
  }
}

function updateSpectatorPicks(state) {
  ['B', 'R'].forEach(prefix => {
    const wrap = prefix === 'B' ? '#specBluePicks' : '#specRedPicks';
    const bars = document.querySelectorAll(`${wrap} .bar`);
    for (let i = 0; i < 5; i++) {
      const bar = bars[i];
      if (!bar) continue;
      const god = state.picks?.[`${prefix}${i + 1}`] || null;
      const por = bar.querySelector('.por');
      const nm = bar.querySelector('.nm');

      bar.classList.toggle('wait', !god);
      if (por) por.style.backgroundImage = god ? `url('${iconPath(god)}')` : '';
      if (nm) nm.textContent = god || 'Open';
    }
  });
}

function updateSpectatorBans(state) {
  ['blue', 'red'].forEach(team => {
    const wrap = team === 'blue' ? '#specBlueBans' : '#specRedBans';
    const slots = document.querySelectorAll(`${wrap} .ban-slot-spec`);
    banList(state, team).forEach((god, i) => {
      const slot = slots[i];
      if (!slot) return;
      slot.innerHTML = '';
      slot.classList.toggle('filled', !!god);
      if (!god) return;
      const art = document.createElement('div');
      art.className = 'ban-slot-art';
      art.style.backgroundImage = `url('${iconPath(god)}')`;
      const diag = document.createElement('div');
      diag.className = 'ban-diagonal';
      slot.append(art, diag);
    });
  });
}

// ========== Lobby controls ==========
function renameSide(side, name) {
  if (isConnected()) window.RT?.updateName(side, name);
}

function setupLobbyUI() {
  const createBtn = document.getElementById('createLobbyBtn');
  const joinBtn = document.getElementById('joinLobbyBtn');
  const codeInput = document.getElementById('joinCodeInput');
  const status = document.getElementById('lobbyStatus');
  const copyBtn = document.getElementById('copyLobbyBtn');
  const blueInput = document.getElementById('blueSideInput');
  const redInput = document.getElementById('redSideInput');
  const readyControls = document.getElementById('readyControls');

  const enterLobby = (code) => {
    status.textContent = `Lobby ${code}`;
    copyBtn.style.display = 'inline-block';
    readyControls.style.display = 'flex';
    joinBtn.style.display = 'none';
    codeInput.style.display = 'none';
    createBtn.style.display = 'none';
  };

  createBtn.onclick = async () => {
    createBtn.disabled = true;
    try {
      enterLobby(await window.RT.createLobby());
    } catch (e) {
      alert(e.message || 'Failed to create lobby');
    } finally {
      createBtn.disabled = false;
    }
  };

  joinBtn.onclick = async () => {
    const code = codeInput.value.trim().toUpperCase();
    if (!code) return alert('Enter a lobby code');

    joinBtn.disabled = true;
    try {
      const state = await window.RT.checkLobbyState(code);
      if (!state) return alert('Lobby not found');

      const me = window.RT.getClientId();
      if (state.owners?.blue && state.owners?.red &&
          state.owners.blue !== me && state.owners.red !== me) {
        if (!confirm('This lobby is full. Watch as a spectator?')) return;
        await window.RT.joinAsSpectator(code);
        showSpectatorMode();
        return;
      }

      const side = await window.RT.joinLobby(code, state);
      if (!side) return alert('Could not claim a side — the lobby just filled up.');
      enterLobby(code);
    } catch (e) {
      alert(e.message || 'Failed to join lobby');
    } finally {
      joinBtn.disabled = false;
    }
  };

  copyBtn.onclick = async () => {
    const code = window.RT?.currentCode();
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      status.textContent = `Lobby ${code} (copied)`;
      setTimeout(() => (status.textContent = `Lobby ${code}`), 1200);
    } catch {
      status.textContent = `Lobby ${code} — copy failed`;
    }
  };

  blueInput.oninput = () => renameSide('blue', blueInput.value);
  redInput.oninput = () => renameSide('red', redInput.value);

  document.getElementById('blueReadyBtn').onclick = () => {
    if (mySide() !== 'blue') return;
    window.RT?.setReady('blue', !window.__draftState?.ready?.blue);
  };
  document.getElementById('redReadyBtn').onclick = () => {
    if (mySide() !== 'red') return;
    window.RT?.setReady('red', !window.__draftState?.ready?.red);
  };
}

// ==========================================================
//  The one and only lobby:state handler. Registering this more
//  than once makes every Firebase update render the board N times.
// ==========================================================
window.addEventListener('lobby:state', (e) => {
  const state = e.detail;
  window.__draftState = state;

  if (state.draftEnded && state.draftResult) {
    draftEnded = true;
    draftResult = state.draftResult;
    stopAllTimers();
    if (window.__isSpectator) { updateSpectatorView(state); return; }
    renderDraftFromState(state);
    renderPhaseBanner(state);
    highlightActiveSlot(-1);
    showDraftResult();
    return;
  }

  if (!draftEnded && (state.currentTurnIndex || 0) >= TURN_ORDER.length) {
    draftEnded = true;
    stopAllTimers();
  }

  if (window.__isSpectator) { updateSpectatorView(state); return; }

  renderDraftFromState(state);
  renderSharedTimer(state);
  renderPhaseBanner(state);
  updateSideOwnershipIndicators();
  updateReadyButtons(state);
  highlightActiveSlot(state.currentTurnIndex || 0);

  if (state.names) {
    const blueLabel = document.getElementById('blueSideLabel');
    const redLabel = document.getElementById('redSideLabel');
    const blueInput = document.getElementById('blueSideInput');
    const redInput = document.getElementById('redSideInput');
    if (blueLabel) blueLabel.innerText = state.names.blue;
    if (redLabel) redLabel.innerText = state.names.red;
    // Don't stomp on what the owner is currently typing.
    if (blueInput && document.activeElement !== blueInput) blueInput.value = state.names.blue;
    if (redInput && document.activeElement !== redInput) redInput.value = state.names.red;
  }

  const mine = mySide();
  document.querySelectorAll('.blue-side .pick-slot, .bans.blue .ban-slot')
    .forEach(el => el.classList.toggle('slot-locked', !!(mine && mine !== 'blue')));
  document.querySelectorAll('.red-side .pick-slot, .bans.red .ban-slot')
    .forEach(el => el.classList.toggle('slot-locked', !!(mine && mine !== 'red')));
});

// ========== Init ==========
document.addEventListener('DOMContentLoaded', () => {
  loadCharacters();
  renderEmptyBoard();

  document.querySelectorAll('.pick-slot').forEach(slot => {
    slot.addEventListener('dragover', allowDrop);
    slot.addEventListener('dragleave', clearDragOverClasses);
    slot.addEventListener('drop', dropPick);
    slot.addEventListener('click', () => removePickHandler(slot));
  });

  document.querySelectorAll('.ban-slot').forEach(slot => {
    slot.addEventListener('dragover', allowDrop);
    slot.addEventListener('dragleave', clearDragOverClasses);
    slot.addEventListener('drop', dropBan);
    slot.addEventListener('click', removeBanClick);
  });

  document.getElementById('searchBox')?.addEventListener('input', filterGods);
  document.querySelectorAll('.filter-icon').forEach(icon => {
    icon.addEventListener('click', () => filterByRole(icon.dataset.role));
  });

  initTouchDrag();
  setupLobbyUI();
});
