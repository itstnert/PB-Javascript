console.log("RT object on load:", window.RT);

const characters = [
    { name: "Achilles", image: "Smite Icons/Achilles.png", roles: ["Solo", "Jungle", "Smite 2"] },
    { name: "Agni", image: "Smite Icons/Agni.png", roles: ["Mid", "Carry", "Smite 2"] },
    { name: "Ah Muzen Cab", image: "Smite Icons/Ah_Muzen_Cab.png", roles: ["Mid", "Carry"] },
    { name: "Ah Puch", image: "Smite Icons/Ah_Puch.png", roles: ["Mid"]  },
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
    { name: "Artio", image: "Smite Icons/Artio.png", roles: ["Solo", "Support"]  },
    { name: "Athena", image: "Smite Icons/Athena.png", roles: ["Support", "Jungle", "Smite 2"]  },
    { name: "Atlas", image: "Smite Icons/Atlas.png", roles: ["Support"]  },
    { name: "Awilix", image: "Smite Icons/Awilix.png", roles: ["Jungle", "Smite 2"]  },
    { name: "Baba Yaga", image: "Smite Icons/Baba_Yaga.png", roles: ["Mid"]  },
    { name: "Bacchus", image: "Smite Icons/Bacchus.png", roles: ["Support", "Solo", "Jungle", "Smite 2"]  },
    { name: "Bake Kujira", image: "Smite Icons/Bake_Kujira.png", roles: ["Solo"]  },
    { name: "Bakasura", image: "Smite Icons/Bakasura.png", roles: ["Jungle"]  },
    { name: "Baron Samedi", image: "Smite Icons/Baron_Samedi.png", roles: ["Support", "Mid", "Solo", "Smite 2"]  },
    { name: "Bastet", image: "Smite Icons/Bastet.png", roles: ["Jungle"]  },
    { name: "Bellona", image: "Smite Icons/Bellona.png", roles: ["Solo", "Smite 2"]  },
    { name: "Cabrakan", image: "Smite Icons/Cabrakan.png", roles: ["Support", "Jungle", "Solo", "Smite 2"]  },
    { name: "Camazotz", image: "Smite Icons/Camazotz.png", roles: ["Jungle", "Solo"]  },
    { name: "Cerberus", image: "Smite Icons/Cerberus.png", roles: ["Solo", "Support", "Smite 2"]  },
    { name: "Cernunnos", image: "Smite Icons/Cernunnos.png", roles: ["Carry", "Smite 2"]  },
    { name: "Chaac", image: "Smite Icons/Chaac.png", roles: ["Solo", "Smite 2"]  },
    { name: "Chang'e", image: "Smite Icons/Chang'e.png", roles: ["Mid", "Solo"]  },
    { name: "Charon", image: "Smite Icons/Charon.png", roles: ["Support"]  },
    { name: "Charybdis", image: "Smite Icons/Charybdis.png", roles: ["Carry"]  },
    { name: "Chernobog", image: "Smite Icons/Chernobog.png", roles: ["Carry"]  },
    { name: "Chiron", image: "Smite Icons/Chiron.png", roles: ["Carry", "Mid"]  },
    { name: "Chronos", image: "Smite Icons/Chronos.png", roles: ["Carry", "Mid"]  },
    { name: "Cliodhna", image: "Smite Icons/Cliodhna.png", roles: ["Jungle", "Solo"]  },
    { name: "Cthulhu", image: "Smite Icons/Cthulhu.png", roles: ["Solo"]  },
    { name: "Cu Chulainn", image: "Smite Icons/Cu_Chulainn.png", roles: ["Solo"]  },
    { name: "Cupid", image: "Smite Icons/Cupid.png", roles: ["Carry", "Smite 2"]  },
    { name: "Da Ji", image: "Smite Icons/Da_Ji.png", roles: ["Jungle"]  },
    { name: "Danzaburou", image: "Smite Icons/Danzaburou.png", roles: ["Carry", "Smite 2"]  },
    { name: "Discordia", image: "Smite Icons/Discordia.png", roles: ["Mid"]  },
    { name: "Erlang Shen", image: "Smite Icons/Erlang_Shen.png", roles: ["Jungle"]   },
    { name: "Eset", image: "Smite Icons/Eset.png", roles: ["Support", "Mid"]   },
    { name: "Fafnir", image: "Smite Icons/Fafnir.png", roles: ["Support"]   },
    { name: "Fenrir", image: "Smite Icons/Fenrir.png", roles: ["Jungle", "Support", "Smite 2"]   },
    { name: "Freya", image: "Smite Icons/Freya.png", roles: ["Carry"]   },
    { name: "Ganesha", image: "Smite Icons/Ganesha.png", roles: ["Support", "Solo", "Smite 2"]   },
    { name: "Geb", image: "Smite Icons/Geb.png", roles: ["Support", "Smite 2"]   },
    { name: "Gilgamesh", image: "Smite Icons/Gilgamesh.png", roles: ["Jungle", "Solo"]   },
    { name: "Guan Yu", image: "Smite Icons/Guan_Yu.png", roles: ["Solo", "Support", "Smite 2"]   },
    { name: "Hachiman", image: "Smite Icons/Hachiman.png", roles: ["Carry"]   },
    { name: "Hades", image: "Smite Icons/Hades.png", roles: ["Solo", "Smite 2"]   },
    { name: "He Bo", image: "Smite Icons/He_Bo.png", roles: ["Jungle", "Mid"]   },
    { name: "Hecate", image: "Smite Icons/Hecate.png", roles: ["Mid", "Smite 2"]   },
    { name: "Heimdallr", image: "Smite Icons/Heimdallr.png", roles: ["Carry"]   },
    { name: "Hel", image: "Smite Icons/Hel.png", roles: ["Mid", "Support"]   },
    { name: "Hera", image: "Smite Icons/Hera.png", roles: ["Mid"]   },
    { name: "Hercules", image: "Smite Icons/Hercules.png", roles: ["Solo", "Jungle", "Smite 2"]   },
    { name: "Horus", image: "Smite Icons/Horus.png", roles: ["Support", "Solo"]   },
    { name: "Hou Yi", image: "Smite Icons/Hou_Yi.png", roles: ["Carry", "Smite 2"]   },
    { name: "Hun Batz", image: "Smite Icons/Hun_Batz.png", roles: ["Jungle", "Smite 2"]   },
    { name: "Ishtar", image: "Smite Icons/Ishtar.png", roles: ["Carry"]   },
    { name: "Ix Chel", image: "Smite Icons/Ix_Chel.png", roles: ["Mid", "Support"]   },
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
    { name: "Loki", image: "Smite Icons/Loki.png", roles: ["Jungle", "Smite 2"]    },
    { name: "Maman Brigitte", image: "Smite Icons/Maman_Brigitte.png", roles: ["Jungle", "Mid"]    },
    { name: "Martichoras", image: "Smite Icons/Martichoras.png", roles: ["Mid", "Carry"]    },
    { name: "Maui", image: "Smite Icons/Maui.png", roles: ["Support"]    },
    { name: "Medusa", image: "Smite Icons/Medusa.png", roles: ["Carry", "Mid", "Smite 2"]    },
    { name: "Mercury", image: "Smite Icons/Mercury.png", roles: ["Jungle", "Smite 2"]    },
    { name: "Merlin", image: "Smite Icons/Merlin.png", roles: ["Mid", "Smite 2"]    },
    { name: "Morgan Le Fay", image: "Smite Icons/Morgan_Le_Fay.png", roles: ["Mid"]    },
    { name: "Mordred", image: "Smite Icons/mordred.png", roles: ["Solo", "Jungle", "Smite 2"]    },
    { name: "Mulan", image: "Smite Icons/Mulan.png", roles: ["Solo", "Smite 2"]    },
    { name: "Ne Zha", image: "Smite Icons/Ne_Zha.png", roles: ["Jungle"]    },
    { name: "Neith", image: "Smite Icons/Neith.png", roles: ["Mid", "Carry", "Smite 2"]    },
    { name: "Nemesis", image: "Smite Icons/Nemesis.png", roles: ["Jungle", "Smite 2"]    },
    { name: "Nike", image: "Smite Icons/Nike.png", roles: ["Solo"]    },
    { name: "Nox", image: "Smite Icons/Nox.png", roles: ["Support", "Mid"]    },
    { name: "Nut", image: "Smite Icons/Nut.png", roles: ["Carry"]    },
    { name: "Nu Wa", image: "Smite Icons/Nu_Wa.png", roles: ["Mid", "Carry", "Smite 2"]    },
    { name: "Odin", image: "Smite Icons/Odin.png", roles: ["Solo", "Jungle", "Smite 2"]    },
    { name: "Olorun", image: "Smite Icons/Olorun.png", roles: ["Carry"]    },
    { name: "Osiris", image: "Smite Icons/Osiris.png", roles: ["Solo"]    },
    { name: "Pele", image: "Smite Icons/Pele.png", roles: ["Jungle", "Solo", "Smite 2"]    },
    { name: "Persephone", image: "Smite Icons/Persephone.png", roles: ["Mid"]    },
    { name: "Poseidon", image: "Smite Icons/Poseidon.png", roles: ["Mid", "Carry", "Smite 2"]    },
    { name: "Princess Bari", image: "Smite Icons/Princess_Bari.png", roles: ["Mid", "Carry","Smite 2"]    },
    { name: "Ra", image: "Smite Icons/Ra.png", roles: ["Mid", "Solo", "Smite 2"]    },
    { name: "Raijin", image: "Smite Icons/Raijin.png", roles: ["Mid"]    },
    { name: "Rama", image: "Smite Icons/Rama.png", roles: ["Carry", "Smite 2"]    },
    { name: "Ratatoskr", image: "Smite Icons/Ratatoskr.png", roles: ["Jungle", "Solo"]    },
    { name: "Ravana", image: "Smite Icons/Ravana.png", roles: ["Jungle"]    },
    { name: "Scylla", image: "Smite Icons/Scylla.png", roles: ["Mid", "Smite 2"]    },
    { name: "Serqet", image: "Smite Icons/Serqet.png", roles: ["Jungle", "Support"]    },
    { name: "Set", image: "Smite Icons/Set.png", roles: ["Jungle", "Mid", "Solo"]    },
    { name: "Shiva", image: "Smite Icons/Shiva.png", roles: ["Solo"]    },
    { name: "Skadi", image: "Smite Icons/Skadi.png", roles: ["Carry"]    },
    { name: "Sobek", image: "Smite Icons/Sobek.png", roles: ["Solo", "Support", "Smite 2"]    },
    { name: "Sol", image: "Smite Icons/Sol.png", roles: ["Carry", "Mid", "Smite 2"]    },
    { name: "Sun Wukong", image: "Smite Icons/Sun_Wukong.png", roles: ["Solo", "Mid", "Smite 2"]    },
    { name: "Surtr", image: "Smite Icons/Surtr.png", roles: ["Solo", "Jungle"]    },
    { name: "Susano", image: "Smite Icons/Susano.png", roles: ["Jungle", "Smite 2"]    },
    { name: "Sylvanus", image: "Smite Icons/Sylvanus.png", roles: ["Support"]    },
    { name: "Terra", image: "Smite Icons/Terra.png", roles: ["Support", "Solo"]    },
    { name: "Thanatos", image: "Smite Icons/Thanatos.png", roles: ["Jungle", "Solo", "Smite 2"]    },
    { name: "The Morrigan", image: "Smite Icons/The_Morrigan.png", roles: ["Mid", "Smite 2"]    },
    { name: "Thor", image: "Smite Icons/Thor.png", roles: ["Jungle", "Solo", "Smite 2"]    },
    { name: "Thoth", image: "Smite Icons/Thoth.png", roles: ["Mid"]    },
    { name: "Tiamat", image: "Smite Icons/Tiamat.png", roles: ["Mid"]    },
    { name: "Tsukuyomi", image: "Smite Icons/Tsukuyomi.png", roles: ["Mid", "Jungle"]    },
    { name: "Tyr", image: "Smite Icons/Tyr.png", roles: ["Support", "Solo"]    },
    { name: "Ullr", image: "Smite Icons/Ullr.png", roles: ["Mid", "Carry", "Jungle", "Smite 2"]    },
    { name: "Vamana", image: "Smite Icons/Vamana.png", roles: ["Solo"]    },
    { name: "Vulcan", image: "Smite Icons/Vulcan.png", roles: ["Mid", "Support", "Smite 2"]    },
    { name: "Xbalanque", image: "Smite Icons/Xbalanque.png", roles: ["Carry"]    },
    { name: "Xing Tian", image: "Smite Icons/Xing_Tian.png", roles: ["Support"]    },
    { name: "Yemoja", image: "Smite Icons/Yemoja.png", roles: ["Support", "Carry", "Mid", "Jungle", "Solo", "Smite 2"]    },
    { name: "Ymir", image: "Smite Icons/Ymir.png", roles: ["Support", "Solo", "Smite 2"]    },
    { name: "Yu Huang", image: "Smite Icons/Yu_Huang.png", roles: ["Mid"]    },
    { name: "Zeus", image: "Smite Icons/Zeus.png", roles: ["Mid", "Carry", "Smite 2"]    },
    { name: "Zhong Kui", image: "Smite Icons/Zhong_Kui.png", roles: ["Mid", "Solo"]    }
];
// ========== Globals ==========
let currentRoleFilter = null;
let timerInterval = null;
let readyCountdown = null;
let turnInterval = null;

const TURN_DURATION = 20; // seconds per pick/ban turn
let currentTurnIndex = 0;
let readyInProgress = false;
let turnInProgress = false;
let hasStartedDraft = false;

const TURN_ORDER = [
  { type: 'ban', team: 'blue' },
  { type: 'ban', team: 'red' },
  { type: 'ban', team: 'blue' },
  { type: 'ban', team: 'red' },
  { type: 'ban', team: 'blue' },
  { type: 'ban', team: 'red' },
  { type: 'pick', team: 'blue' },
  { type: 'pick', team: 'red' },
  { type: 'pick', team: 'red' },
  { type: 'pick', team: 'blue' },
  { type: 'pick', team: 'blue' },
  { type: 'pick', team: 'red' },
  { type: 'pick', team: 'red' },
  { type: 'pick', team: 'blue' },
  { type: 'pick', team: 'blue' },
  { type: 'pick', team: 'red' }
];

// ========== Utility Functions ==========
function mySide() {
  const state = window.__draftState;
  if (!state || !window.RT?.isConnected()) return null;
  const me = window.RT.getClientId();
  if (state.owners.blue === me) return 'blue';
  if (state.owners.red === me) return 'red';
  return null;
}

function canEditTarget(target) {
  const side = mySide();
  if (!side) return false;
  if (target.closest('.blue-side') || target.closest('.bans.blue')) return side === 'blue';
  if (target.closest('.red-side') || target.closest('.bans.red')) return side === 'red';
  return false;
}

function createCharacterCard(char) {
  const card = document.createElement('div');
  card.className = 'character-card';
  const img = document.createElement('img');
  const norm = char.name.replace(/ /g, '_');
  img.src = `Smite Icons/${norm}S2.png`;
  img.alt = char.name;
  img.id = char.name;
  img.className = 'character-image';
  img.draggable = true;
  img.loading = 'lazy';
  img.decoding = 'async';
  img.addEventListener('dragstart', drag);
  const name = document.createElement('div');
  name.className = 'character-name';
  name.innerText = char.name;
  card.append(img, name);
  return card;
}

function greyOutCharacter(id) {
  const img = document.getElementById(id);
  if (img) img.classList.add('greyed-out');
}

function removeGreyOutCharacter(id) {
  const img = document.getElementById(id);
  if (img) img.classList.remove('greyed-out');
}

function createClonedElement(id) {
  const orig = document.getElementById(id);
  const clone = orig.cloneNode(true);
  clone.id = id + '-clone';
  clone.draggable = false;
  return clone;
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
  if (target.closest('.bans.blue')) {
    const slots = [...document.querySelectorAll('.bans.blue .ban-slot')];
    const idx = slots.indexOf(target);
    return idx >= 0 ? { team: 'blue', index: idx } : null;
  }
  if (target.closest('.bans.red')) {
    const slots = [...document.querySelectorAll('.bans.red .ban-slot')];
    const idx = slots.indexOf(target);
    return idx >= 0 ? { team: 'red', index: idx } : null;
  }
  return null;
}

// ========== Rendering ==========
function renderDraftFromState(state) {
  document.querySelectorAll('.pick-slot, .ban-slot').forEach(el => el.innerHTML = '');
  document.querySelectorAll('.character-image.greyed-out').forEach(img => img.classList.remove('greyed-out'));

  const applyPick = (slotId, name) => {
    if (!name) return;
    const isBlue = slotId[0] === 'B';
    const idx = parseInt(slotId.slice(1), 10) - 1;
    const slots = isBlue ? [...document.querySelectorAll('.blue-side .pick-slot')] : [...document.querySelectorAll('.red-side .pick-slot')];
    const target = slots[idx];
    if (target && !target.children.length) {
      target.append(createClonedElement(name));
      greyOutCharacter(name);
    }
  }; 

  const applyBan = (team, index, name) => {
    if (index > 2 || !name) return;
    let slots = [...document.querySelectorAll(`.bans.${team} .ban-slot`)];
    // REMOVED: if (team === 'red') slots = slots.reverse();
    const target = slots[index];
    if (!target || target.children.length) return;
    const container = document.createElement('div');
    container.className = 'banned-container';
    const clone = createClonedElement(name);
    clone.classList.add('resized');
    const diag = document.createElement('div');
    diag.className = 'diagonal-line';
    container.append(clone, diag);
    target.append(container);
    greyOutCharacter(name);
  };

  const bothReady = state.ready?.blue && state.ready?.red;
  document.querySelectorAll('.ban-slot').forEach((slot, idx) => {
    const isFirst = idx === 0;
    slot.classList.toggle('locked-slot', !(bothReady && isFirst));
    slot.classList.toggle('highlight', bothReady && isFirst);
  });

  Object.entries(state.picks || {}).forEach(([slot, name]) => applyPick(slot, name));
  Array.isArray(state.bans?.blue) && state.bans.blue.forEach((name, i) => applyBan('blue', i, name));
  Array.isArray(state.bans?.red) && state.bans.red.forEach((name, i) => applyBan('red', i, name));
}

// ========== Timers ==========
function startTurnTimerSequence() {
  if (!window.RT?.isConnected()) {
    // Solo mode: run local timer
    clearInterval(turnInterval);

    const display = document.getElementById('timerDisplay');
    if (!display) return;

    if (currentTurnIndex >= TURN_ORDER.length) {
      display.innerText = "Draft Complete";
      return;
    }

    let remaining = TURN_DURATION;
    display.style.display = 'block';
    display.innerText = remaining;

    turnInterval = setInterval(() => {
      remaining--;
      display.innerText = remaining;

      if (remaining <= 0) {
        clearInterval(turnInterval);
        currentTurnIndex++;
        startTurnTimerSequence(); // Recurse
      }
    }, 1000);
  }
}

function initiateReadyCountdown() {
  if (hasStartedDraft) return; // Prevent re-triggering

  clearTimeout(readyCountdown);
  readyInProgress = true;
  let secondsLeft = 5;

  const display = document.getElementById('startCountdown');
  if (!display) return;

  display.style.display = 'block';
  display.innerText = `Draft starting in ${secondsLeft}...`;

  function tick() {
    secondsLeft--;

    if (secondsLeft <= 0) {
      display.style.display = 'none';
      readyInProgress = false;
      hasStartedDraft = true;
      currentTurnIndex = 0;

      const isSolo = !window.RT?.isConnected();

      if (isSolo) {
        resetTimerDisplay(TURN_DURATION); // optional: sets timer text
        startTurnTimerSequence();         // runs local JS countdown
      } else {
        window.RT.startTimer(TURN_DURATION); // shared synced timer
      }

    } else {
      display.innerText = `Draft starting in ${secondsLeft}...`;
      readyCountdown = setTimeout(tick, 1000);
    }
  }

  readyCountdown = setTimeout(tick, 1000);
}

function cancelAllCountdowns() {
  clearTimeout(readyCountdown);
  clearInterval(turnInterval);
  readyInProgress = false;
  turnInProgress = false;
  hasStartedDraft = false; // 🔁 allow restart
  const display = document.getElementById('startCountdown');
  if (display) display.style.display = 'none';
}

// ========== Shared Timer for Sync ==========
function renderSharedTimer(state) {
  const display = document.getElementById('timerDisplay');
  if (!display || !state?.timer?.startAt || !state?.timer?.duration) {
    display.style.display = 'none';
    return;
  }

  const startAt = state.timer.startAt;
  const duration = state.timer.duration;
  const offset = state.__serverOffset || 0;

  const endAt = startAt + duration * 1000;
  const getNow = () => Date.now() + offset;

  const update = () => {
    const remaining = Math.max(0, endAt - getNow());
    const seconds = Math.ceil(remaining / 1000);
    display.innerText = seconds;
    display.style.display = 'block';

    if (remaining <= 0) clearInterval(timerInterval);
  };

  update(); // Show first frame
  clearInterval(timerInterval);
  timerInterval = setInterval(update, 200);
}

// ========== Drag & Drop ==========
function drag(event) {
  event.dataTransfer.setData('text', event.target.id);
}

function allowDrop(event) {
  event.preventDefault(); // Required to allow dropping
  event.dataTransfer.dropEffect = 'move'; // Suggest move effect

  // Remove any existing drag-over styles
  clearDragOverClasses();

  // Add drag-over to current slot
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

  if (!target.classList.contains('ban-slot') || target.children.length || !god) return;

  const isSolo = !window.RT?.isConnected();

  if (!isSolo) {
    if (!canEditTarget(target)) return;

    const info = banIndexFromTarget(target);
    if (!info) return;
    
    const mySideTeam = mySide();
    if (info.team !== mySideTeam) return;

    const state = window.__draftState;
    const serverTurnIndex = state?.currentTurnIndex || 0;
    const turn = TURN_ORDER[serverTurnIndex];
    
    const isBanPhase = serverTurnIndex < 6;
    const isCorrectTeam = info.team === mySideTeam;
    const isCorrectTurnType = turn && turn.type === 'ban' && turn.team === mySideTeam;
    
    if (!isBanPhase || !isCorrectTeam || !isCorrectTurnType) return;

    console.log("✅ Ban dropped:", {
      team: info.team,
      index: info.index,
      god: god,
      turn: serverTurnIndex
    });

    window.RT.setBan(info.team, info.index, god);
    
    // ADD THIS LINE to reset timer after ban
    window.RT.resetTimer(20);
    
  } else {
    // Solo mode code remains the same
    const container = document.createElement('div');
    container.className = 'banned-container';
    const clone = createClonedElement(god);
    clone.classList.add('resized');
    const diag = document.createElement('div');
    diag.className = 'diagonal-line';
    container.append(clone, diag);
    target.append(container);
    greyOutCharacter(god);
    resetTimerDisplay();
    
    currentTurnIndex++;
    clearInterval(turnInterval);
    startTurnTimerSequence();
  }
}

function dropPick(event, fromTouch = false, id = null) {
  event.preventDefault();
  const target = event.currentTarget;
  target.classList.remove('drag-over');
  const god = fromTouch ? id : event.dataTransfer.getData('text');

  if (!target.classList.contains('pick-slot') || target.children.length || !god) return;

  const isSolo = !window.RT?.isConnected();

  if (!isSolo) {
    if (!canEditTarget(target)) return;

    // FIX: Use server's currentTurnIndex instead of local variable
    const state = window.__draftState;
    const serverTurnIndex = state?.currentTurnIndex || 0;
    const turn = TURN_ORDER[serverTurnIndex];
    
    if (!turn || turn.type !== 'pick' || turn.team !== mySide()) return;

    const slotId = slotIdFromTarget(target);
    if (!slotId) return;

    window.RT.setPick(slotId, god)
      .then(() => console.log("✅ setPick succeeded:", slotId, god))
      .catch(err => console.error("❌ setPick failed:", err));

    window.RT.resetTimer(20);
  } else {
    // Solo mode code remains the same
    target.append(createClonedElement(god));
    greyOutCharacter(god);
    resetTimerDisplay();
    
  //  currentTurnIndex++;
  //  clearInterval(turnInterval);
  //  startTurnTimerSequence();
  }
}

function removePickHandler(eventTarget) {
  const target = eventTarget;
  if (!target.classList.contains('pick-slot') || !target.firstChild) return;
  if (window.RT?.isConnected()) {
    if (!canEditTarget(target)) return;
    const slotId = slotIdFromTarget(target);
    if (!slotId) return;
    window.RT.clearPick(slotId);
  } else {
    const id = target.firstChild.id.replace('-clone', '');
    removeGreyOutCharacter(id);
    target.innerHTML = '';
  }
}

function removeBanClick(event) {
  const target = event.currentTarget;
  if (!target.firstChild) return;
  if (window.RT?.isConnected()) {
    const info = banIndexFromTarget(target);
    if (!info) return;
    window.RT.clearBan(info.team, info.index);
  } else {
    const el = target.firstChild.querySelector('.character-image');
    if (el) {
      const id = el.id.replace('-clone', '');
      removeGreyOutCharacter(id);
    }
    target.innerHTML = '';
  }
}

// ========== Fallback Timer Logic ==========
function startLocalTimer() {
  clearInterval(timerInterval);
  timeLeft = TURN_DURATION;
  const display = document.getElementById('timerDisplay');
  display.innerText = timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    display.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Pick/Ban Dropped");
    }
  }, 1000);
}

function resetTimerDisplay(duration = TURN_DURATION) {
  clearInterval(timerInterval);
  timerInterval = null;
  const display = document.getElementById('timerDisplay');
  if (display) display.innerText = duration;
  console.log("Resetting timer to:", duration, "at:", serverTimestamp());
}

// ========== Search & Filter ==========
function filterGods() {
  const text = document.getElementById('searchBox').value.toLowerCase();
  document.querySelectorAll('.character-card').forEach(card => {
    const name = card.querySelector('.character-name').innerText.toLowerCase();
    const char = characters.find(c => c.name.toLowerCase() === name);
    const roleOk = currentRoleFilter ? char.roles.includes(currentRoleFilter) : true;
    card.style.display = (name.includes(text) && roleOk) ? 'inline-flex' : 'none';
  });
}

function filterByRole(role) {
  currentRoleFilter = currentRoleFilter === role ? null : role;
  filterGods();
}

// ========== Lobby Controls ==========
function renameSide(side, name) {
  if (window.RT?.isConnected()) {
    window.RT.updateName(side, name);
  }
}

async function setupLobbyUI() {
  const createBtn = document.getElementById('createLobbyBtn');
  const joinBtn = document.getElementById('joinLobbyBtn');
  const codeInput = document.getElementById('joinCodeInput');
  const status = document.getElementById('lobbyStatus');
  const copyBtn = document.getElementById('copyLobbyBtn');
  const blueInput = document.getElementById('blueSideInput');
  const redInput = document.getElementById('redSideInput');
  const readyControls = document.getElementById('readyControls');
  const blueReadyBtn = document.getElementById('blueReadyBtn');
  const redReadyBtn = document.getElementById('redReadyBtn');

createBtn.onclick = async () => {
  try {
    const code = await window.RT.createLobby();
    status.textContent = `Lobby ${code}`;
    copyBtn.style.display = 'inline-block';
    
    // Hide join controls after creating
    joinBtn.style.display = 'none';
    codeInput.style.display = 'none';
    createBtn.style.display = 'none';
  } catch (e) {
    alert(e.message || "Failed to create lobby");
  }
};

  joinBtn.onclick = async () => {
    const code = codeInput.value.trim().toUpperCase();
    if (!code) return alert("Enter a lobby code");
    try {
      await window.RT.joinLobby(code);
      status.textContent = `Lobby ${code}`;
      copyBtn.style.display = 'inline-block';
    } catch (e) {
      alert(e.message || "Failed to join lobby");
    }
  };

  copyBtn.onclick = async () => {
    const code = window.RT.currentCode();
    if (!code) return;
    await navigator.clipboard.writeText(code);
    status.textContent = `Lobby ${code} (copied)`;
    setTimeout(() => status.textContent = `Lobby ${code}`, 1200);
  };

  blueInput.oninput = () => renameSide('blue', blueInput.value);
  redInput.oninput = () => renameSide('red', redInput.value);

blueReadyBtn.onclick = () => {
  if (mySide() === 'blue') {
    const curr = window.__draftState?.ready?.blue;
    window.RT.setReady('blue', !curr);
  }
};

redReadyBtn.onclick = () => {
  if (mySide() === 'red') {
    const curr = window.__draftState?.ready?.red;
    window.RT.setReady('red', !curr);
  }
};

  window.addEventListener('lobby:state', (e) => {
    const state = e.detail;
    window.__draftState = state;
    const inLobby = window.RT?.isConnected();
    const blueReady = !!state.ready?.blue;
    const redReady = !!state.ready?.red;
    const bothReady = blueReady && redReady;

    readyControls.style.display = inLobby ? 'flex' : 'none';
    blueReadyBtn.innerText = blueReady ? "Blue: ✅ Ready" : "Blue: ❌ Not Ready";
    redReadyBtn.innerText = redReady ? "Red: ✅ Ready" : "Red: ❌ Not Ready";
    blueReadyBtn.disabled = mySide() !== 'blue';
    redReadyBtn.disabled = mySide() !== 'red';

    if (bothReady && !readyInProgress && !turnInProgress) {
      initiateReadyCountdown();
    } else if (!bothReady) {
      cancelAllCountdowns();
    }
  });
}

// ========== Initialization ==========
document.addEventListener('DOMContentLoaded', () => {
  loadCharacters();
  setupPickBanDragClick();
  setupLobbyUI();

  window.addEventListener('lobby:state', (e) => {
    const state = e.detail;
    window.__draftState = state;
    renderDraftFromState(state);
    renderSharedTimer(state);

  const serverTurnIndex = state.currentTurnIndex || 0;
  highlightActiveSlot(serverTurnIndex);

    if (state.names) {
      document.getElementById('blueSideLabel').innerText = state.names.blue;
      document.getElementById('redSideLabel').innerText = state.names.red;
      document.getElementById('blueSideInput').value = state.names.blue;
      document.getElementById('redSideInput').value = state.names.red;
    }

    const mine = mySide();
    document.querySelectorAll('.blue-side .pick-slot, .bans.blue .ban-slot')
      .forEach(el => el.classList.toggle('slot-locked', !!(mine && mine !== 'blue')));
    document.querySelectorAll('.red-side .pick-slot, .bans.red .ban-slot')
      .forEach(el => el.classList.toggle('slot-locked', !!(mine && mine !== 'red')));
  });
});

// ========== Remaining Helper Functions ==========
function loadCharacters() {
  const container = document.getElementById('character-list');
  container.innerHTML = '';
  characters
    .filter(c => c.roles.includes('Smite 2'))
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(c => container.append(createCharacterCard(c)));
  filterGods();
}

function setupPickBanDragClick() {
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

  document.getElementById('searchBox').addEventListener('keyup', filterGods);

  document.querySelectorAll('.filter-icon').forEach(icon => {
    icon.addEventListener('click', () => filterByRole(icon.dataset.role));
  });

  initTouchDrag();
}

function initTouchDrag() {
  let draggingId = null;
  let dragGhost = null;

  function onPointerDown(e) {
    const img = e.target.closest('.character-image');
    if (!img || img.classList.contains('greyed-out')) return;
    draggingId = img.id;
    dragGhost = img.cloneNode(true);
    Object.assign(dragGhost.style, {
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: '9999',
      opacity: '0.85',
      transform: 'translate(-50%, -50%) scale(1.05)',
      boxShadow: '0 12px 22px rgba(0,0,0,.45)'
    });
    dragGhost.id = draggingId + '-ghost';
    document.body.append(dragGhost);
    positionGhost(e);
  }

  function onPointerMove(e) {
    if (!dragGhost) return;
    e.preventDefault();
    positionGhost(e);
    updateDragOverUI(e.clientX, e.clientY);
  }

  function onPointerUp(e) {
    if (!dragGhost) return;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const target = el?.closest('.pick-slot, .ban-slot');
    if (target && draggingId) {
      if (target.classList.contains('pick-slot')) {
        dropPick({ currentTarget: target, preventDefault: () => {}, dataTransfer: { getData: () => draggingId } }, true, draggingId);
      } else {
        dropBan({ currentTarget: target, preventDefault: () => {}, dataTransfer: { getData: () => draggingId } }, true, draggingId);
      }
    }
    clearTouchDrag();
  }

  function positionGhost(e) {
    dragGhost.style.left = e.clientX + 'px';
    dragGhost.style.top = e.clientY + 'px';
  }

  function updateDragOverUI(x, y) {
    document.querySelectorAll('.pick-slot.drag-over, .ban-slot.drag-over').forEach(n => n.classList.remove('drag-over'));
    const slot = document.elementFromPoint(x, y)?.closest('.pick-slot, .ban-slot');
    if (slot) slot.classList.add('drag-over');
  }

  function clearTouchDrag() {
    document.querySelectorAll('.pick-slot.drag-over, .ban-slot.drag-over').forEach(n => n.classList.remove('drag-over'));
    if (dragGhost) dragGhost.remove();
    dragGhost = null;
    draggingId = null;
  }

  document.addEventListener('pointerdown', onPointerDown, { passive: true });
  document.addEventListener('pointermove', onPointerMove, { passive: false });
  document.addEventListener('pointerup', onPointerUp, { passive: true });
  document.addEventListener('pointercancel', onPointerUp, { passive: true });
}

function highlightActiveSlot(turnIndex) {
  // Clear all existing highlights
  document.querySelectorAll('.pick-slot, .ban-slot').forEach(slot => {
    slot.classList.remove('active-turn', 'inactive-turn');
  });

  if (turnIndex >= TURN_ORDER.length) return;

  const turn = TURN_ORDER[turnIndex];
  
  if (turn.type === 'ban') {
    // For bans, highlight the next empty slot for the correct team
    const banSlots = [...document.querySelectorAll(`.bans.${turn.team} .ban-slot`)];
    const emptySlot = banSlots.find(slot => !slot.children.length);
    
    if (emptySlot) {
      emptySlot.classList.add('active-turn');
      // Dim other ban slots
      document.querySelectorAll('.ban-slot').forEach(slot => {
        if (slot !== emptySlot) {
          slot.classList.add('inactive-turn');
        }
      });
    }
  } else if (turn.type === 'pick') {
    // For picks, determine which pick slot based on the order
    const pickNumber = getPickNumber(turnIndex, turn.team);
    const selector = turn.team === 'blue' ? '.blue-side .pick-slot' : '.red-side .pick-slot';
    const pickSlots = [...document.querySelectorAll(selector)];
    const targetSlot = pickSlots[pickNumber - 1];
    
    if (targetSlot && !targetSlot.children.length) {
      targetSlot.classList.add('active-turn');
      // Dim other pick slots
      document.querySelectorAll('.pick-slot').forEach(slot => {
        if (slot !== targetSlot) {
          slot.classList.add('inactive-turn');
        }
      });
    }
  }
}

function getPickNumber(turnIndex, team) {
  // Map turn index to pick slot number
  const pickMap = {
    6: { blue: 1, red: 1 },   // B1, R1
    7: { blue: 1, red: 1 },
    8: { blue: 1, red: 2 },   // R2
    9: { blue: 2, red: 2 },   // B2
    10: { blue: 3, red: 2 },  // B3
    11: { blue: 3, red: 3 },  // R3
    12: { blue: 3, red: 4 },  // R4
    13: { blue: 4, red: 4 },  // B4
    14: { blue: 5, red: 4 },  // B5
    15: { blue: 5, red: 5 },  // R5
  };
  
  return pickMap[turnIndex]?.[team] || 1;
}