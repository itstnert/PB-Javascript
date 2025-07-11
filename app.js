const characters = [
    { name: "Achilles", image: "Smite Icons/Achilles.png", roles: ["Solo", "Jungle", "Smite 2"] },
    { name: "Agni", image: "Smite Icons/Agni.png", roles: ["Mid", "Smite 2"] },
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
    { name: "Hou Yi", image: "Smite Icons/Hou_Yi.png", roles: ["Carry"]   },
    { name: "Hun Batz", image: "Smite Icons/Hun_Batz.png", roles: ["Jungle", "Smite 2"]   },
    { name: "Ishtar", image: "Smite Icons/Ishtar.png", roles: ["Carry"]   },
    { name: "Ix Chel", image: "Smite Icons/Ix_Chel.png", roles: ["Mid", "Support"]   },
    { name: "Izanami", image: "Smite Icons/Izanami.png", roles: ["Carry", "Smite 2"]   },
    { name: "Janus", image: "Smite Icons/Janus.png", roles: ["Mid"]   },
    { name: "Jing Wei", image: "Smite Icons/Jing_Wei.png", roles: ["Carry", "Smite 2"]   },
    { name: "Jormungandr", image: "Smite Icons/Jormungandr.png", roles: ["Solo"]   },
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
    { name: "Poseidon", image: "Smite Icons/Poseidon.png", roles: ["Mid", "Smite 2"]    },
    { name: "Princess Bari", image: "Smite Icons/Princess_Bari.png", roles: ["Mid", "Carry","Smite 2"]    },
    { name: "Ra", image: "Smite Icons/Ra.png", roles: ["Mid", "Solo", "Smite 2"]    },
    { name: "Raijin", image: "Smite Icons/Raijin.png", roles: ["Mid"]    },
    { name: "Rama", image: "Smite Icons/Rama.png", roles: ["Carry", "Smite 2"]    },
    { name: "Ratatoskr", image: "Smite Icons/Ratatoskr.png", roles: ["Jungle", "Solo"]    },
    { name: "Ravana", image: "Smite Icons/Ravana.png", roles: ["Jungle"]    },
    { name: "Scylla", image: "Smite Icons/Scylla.png", roles: ["Mid"]    },
    { name: "Serqet", image: "Smite Icons/Serqet.png", roles: ["Jungle", "Support"]    },
    { name: "Set", image: "Smite Icons/Set.png", roles: ["Jungle", "Mid", "Solo"]    },
    { name: "Shiva", image: "Smite Icons/Shiva.png", roles: ["Solo"]    },
    { name: "Skadi", image: "Smite Icons/Skadi.png", roles: ["Carry"]    },
    { name: "Sobek", image: "Smite Icons/Sobek.png", roles: ["Solo", "Support", "Smite 2"]    },
    { name: "Sol", image: "Smite Icons/Sol.png", roles: ["Carry", "Mid", "Smite 2"]    },
    { name: "Sun Wukong", image: "Smite Icons/Sun_Wukong.png", roles: ["Solo"]    },
    { name: "Surtr", image: "Smite Icons/Surtr.png", roles: ["Solo", "Jungle"]    },
    { name: "Susano", image: "Smite Icons/Susano.png", roles: ["Jungle", "Smite 2"]    },
    { name: "Sylvanus", image: "Smite Icons/Sylvanus.png", roles: ["Support"]    },
    { name: "Terra", image: "Smite Icons/Terra.png", roles: ["Support", "Solo"]    },
    { name: "Thanatos", image: "Smite Icons/Thanatos.png", roles: ["Jungle", "Smite 2"]    },
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

let timer;
let timeLeft = 30; // Set default timer value to 30 seconds
let currentRoleFilter = null;

document.addEventListener('DOMContentLoaded', () => {
    loadCharacters();
});

function loadCharacters() {
    const characterArea = document.getElementById('character-list');
    characterArea.innerHTML = '';
    characters.sort((a, b) => a.name.localeCompare(b.name));
    
    characters.forEach(char => {
        characterArea.appendChild(createCharacterCard(char));
    });

    // Apply the initial filter to hide gods that are only in "Smite 2"
    filterGods();
}

// Ensure the filterGods function is correctly updated as previously provided.


function createCharacterCard(char) {
    let card = document.createElement('div');
    card.className = 'character-card';

    let img = document.createElement('img');
    img.src = char.image;
    img.alt = char.name;
    img.id = char.name;
    img.className = 'character-image';
    img.draggable = true;
    img.addEventListener('dragstart', drag);

    let name = document.createElement('div');
    name.className = 'character-name';
    name.innerText = char.name;

    card.appendChild(img);
    card.appendChild(name);
    return card;
}

function filterGods() {
    const searchInput = document.getElementById('searchBox').value.toLowerCase();
    const cards = document.querySelectorAll('.character-card');

    cards.forEach(card => {
        const name = card.querySelector('.character-name').innerText.toLowerCase();
        const character = characters.find(char => char.name.toLowerCase() === name);

        // Check if the character only has the "Smite 2" role
        const isSmite2Only = character.roles.length === 1 && character.roles.includes('Smite 2');

        // Determine if the character should be displayed
        const roleMatch = currentRoleFilter 
            ? character.roles.includes(currentRoleFilter) 
            : !isSmite2Only; // Show only if not exclusive to Smite 2 when no filter is selected

        const nameMatch = name.includes(searchInput);

        card.style.display = nameMatch && roleMatch ? 'block' : 'none';
    });
}


function filterByRole(role) {
    currentRoleFilter = role === currentRoleFilter ? null : role; // Toggle role filter
    filterGods(); // Reapply filter
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
    event.target.classList.add('drag-over');
}

function dragLeave(event) {
    event.target.classList.remove('drag-over');
}

function dropPick(event) {
    event.preventDefault();
    event.target.classList.remove('drag-over');
    const id = event.dataTransfer.getData("text");

    if (event.target.className.includes('pick-slot') && event.target.children.length === 0) {
        event.target.appendChild(createClonedElement(id));
        greyOutCharacter(id);
        resetTimer();
    }
}

function dropBan(event) {
    event.preventDefault();
    event.target.classList.remove('drag-over');
    const id = event.dataTransfer.getData("text");

    if (event.target.className.includes('ban-slot') && event.target.children.length === 0) {
        const bannedContainer = document.createElement('div');
        bannedContainer.className = 'banned-container';

        const clonedElement = createClonedElement(id);
        clonedElement.classList.add('resized');

        const diagonalLine = document.createElement('div');
        diagonalLine.className = 'diagonal-line';

        bannedContainer.appendChild(clonedElement);
        bannedContainer.appendChild(diagonalLine);
        
        event.target.appendChild(bannedContainer);
        greyOutCharacter(id);
        resetTimer();
    }
}

function createClonedElement(id) {
    const original = document.getElementById(id);
    const clone = original.cloneNode(true);
    clone.id = id + "-clone";
    clone.draggable = false;
    return clone;
}

function greyOutCharacter(id) {
    const characterImage = document.getElementById(id);
    if (characterImage) {
        characterImage.classList.add('greyed-out');
    }
}

function removeGreyOutCharacter(id) {
    const characterImage = document.getElementById(id);
    if (characterImage) {
        characterImage.classList.remove('greyed-out');
    }
}

function removePick(event) {
    if (event.target.className.includes('pick-slot') && event.target.firstChild) {
        const id = event.target.firstChild.id.replace('-clone', '');
        removeGreyOutCharacter(id);
        event.target.removeChild(event.target.firstChild);
        
        // Append character back to the middle list
        const characterArea = document.getElementById('character-list');
        const existingCard = document.getElementById(id);
        if (!existingCard) {
            characterArea.appendChild(createCharacterCard(characters.find(char => char.name === id)));
        }
    }
}

function clearDraft() {
    const slots = document.querySelectorAll('.pick-slot, .ban-slot');
    slots.forEach(slot => {
        while (slot.firstChild) {
            slot.removeChild(slot.firstChild);
        }
    });
    document.querySelectorAll('.character-image.greyed-out').forEach(image => {
        image.classList.remove('greyed-out');
    });
    resetAndStopTimer();
}

function renameSide(side) {
    if (side === 'blue') {
        const newName = document.getElementById('blueSideInput').value;
        document.getElementById('blueSideLabel').innerText = newName || 'Blue Side';
    } else if (side === 'red') {
        const newName = document.getElementById('redSideInput').value;
        document.getElementById('redSideLabel').innerText = newName || 'Red Side';
    }
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 30; // Start timer at 25 seconds
    document.getElementById('timerDisplay').innerText = timeLeft;
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Pick/Ban Dropped");
        } else {
            timeLeft--;
            document.getElementById('timerDisplay').innerText = timeLeft;
        }
    }, 1000);
}

function resetTimer() {
    timeLeft = 30;
    document.getElementById('timerDisplay').innerText = timeLeft;
}

function resetAndStopTimer() {
    clearInterval(timer);
    timeLeft = 30;
    document.getElementById('timerDisplay').innerText = timeLeft;
}

function filterByRole(role) {
    currentRoleFilter = role === currentRoleFilter ? null : role; // Toggle role filter

    if (currentRoleFilter === "Smite 2") {
        // Update icons to Smite 2 versions
        characters.forEach(char => {
            const img = document.getElementById(char.name);
            if (img && char.roles.includes("Smite 2")) {
                img.src = `Smite Icons/${char.name.replace(/ /g, '_')}S2.png`;
            }
        });
    } else {
        // Revert icons to the original versions
        characters.forEach(char => {
            const img = document.getElementById(char.name);
            if (img) {
                img.src = `Smite Icons/${char.name.replace(/ /g, '_')}.png`;
            }
        });
    }

    filterGods(); // Reapply filter
}

document.addEventListener('DOMContentLoaded', () => {
    loadCharacters();
    const pickSlots = document.querySelectorAll('.pick-slot');
    pickSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            if (this.firstChild) {
                removePick({target: this});
            }
        });
    });
    
    const banSlots = document.querySelectorAll('.ban-slot');
    banSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            if (this.firstChild) {
                const id = this.firstChild.querySelector('.character-image').id.replace('-clone', '');
                removeGreyOutCharacter(id);
                this.removeChild(this.firstChild);
            }
        });
    });
});

let smite2FilterActive = false; // Track Smite 2 filter state

function toggleSmite2Filter() {
    smite2FilterActive = !smite2FilterActive;
    const smite2Button = document.getElementById('smite2Button');
    
    if (smite2FilterActive) {
        smite2Button.classList.add('active-smite2'); // Add glow effect
    } else {
        smite2Button.classList.remove('active-smite2'); // Remove glow effect
    }
    
    updateCharacterIcons(); // Update character icons based on Smite 2 filter
    filterGods(); // Reapply filter logic
}

function filterGods() {
    const searchInput = document.getElementById('searchBox').value.toLowerCase();
    const cards = Array.from(document.querySelectorAll('.character-card'));

    const visibleCards = cards.filter(card => {
        const name = card.querySelector('.character-name').innerText.toLowerCase();
        const character = characters.find(char => char.name.toLowerCase() === name);

        const isSmite2Only = character.roles.length === 1 && character.roles.includes('Smite 2');
        const roleMatch = currentRoleFilter ? character.roles.includes(currentRoleFilter) : true;
        const smite2Match = smite2FilterActive ? character.roles.includes('Smite 2') : !isSmite2Only;
        const nameMatch = name.includes(searchInput);

        return nameMatch && roleMatch && smite2Match;
    });

    cards.forEach(card => {
        if (visibleCards.includes(card)) {
            card.style.display = 'inline-flex'; // Ensure proper alignment in grid
        } else {
            card.style.display = 'none';
        }
    });

    updateCharacterIcons(); // Ensure icons are updated when filtering
}

function updateCharacterIcons() {
    characters.forEach(char => {
        const img = document.getElementById(char.name);
        if (img) {
            img.src = smite2FilterActive && char.roles.includes('Smite 2') 
                ? `Smite Icons/${char.name.replace(/ /g, '_')}S2.png`
                : `Smite Icons/${char.name.replace(/ /g, '_')}.png`;
        }
    });
}

/* Ensure only one Smite 2 button exists */
document.addEventListener('DOMContentLoaded', () => {
    let smite2Button = document.getElementById('smite2Button');
    if (!smite2Button) {
        const filterContainer = document.querySelector('.filter-icons');
        if (filterContainer) {
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'smite2-button-container';
            
            smite2Button = document.createElement('button');
            smite2Button.id = 'smite2Button';
            smite2Button.innerText = 'Smite 2 Gods';
            smite2Button.className = 'smite2-toggle-button';
            smite2Button.onclick = toggleSmite2Filter;
            
            buttonContainer.appendChild(smite2Button);
            filterContainer.parentNode.insertBefore(buttonContainer, filterContainer);
        }
    }
});