const characters = [
    { name: "Achilles", image: "Smite Icons/Achilles.png" },
    { name: "Agni", image: "Smite Icons/Agni.png" },
    { name: "Ah Muzen Cab", image: "Smite Icons/Ah_Muzen_Cab.png" },
    { name: "Ah Puch", image: "Smite Icons/Ah_Puch.png" },
    { name: "Amaterasu", image: "Smite Icons/Amaterasu.png" },
    { name: "Anhur", image: "Smite Icons/Anhur.png" },
    { name: "Anubis", image: "Smite Icons/Anubis.png" },
    { name: "Ao Kuang", image: "Smite Icons/Ao_Kuang.png" },
    { name: "Aphrodite", image: "Smite Icons/Aphrodite.png" },
    { name: "Apollo", image: "Smite Icons/Apollo.png" },
    { name: "Arachne", image: "Smite Icons/Arachne.png" },
    { name: "Ares", image: "Smite Icons/Ares.png" },
    { name: "Artemis", image: "Smite Icons/Artemis.png" },
    { name: "Artio", image: "Smite Icons/Artio.png" },
    { name: "Athena", image: "Smite Icons/Athena.png" },
    { name: "Atlas", image: "Smite Icons/Atlas.png" },
    { name: "Awilix", image: "Smite Icons/Awilix.png" },
    { name: "Baba Yaga", image: "Smite Icons/Baba_Yaga.png" },
    { name: "Bacchus", image: "Smite Icons/Bacchus.png" },
    { name: "Bake Kujira", image: "Smite Icons/Bake_Kujira.png" },
    { name: "Bakasura", image: "Smite Icons/Bakasura.png" },
    { name: "Baron Samedi", image: "Smite Icons/Baron_Samedi.png" },
    { name: "Bastet", image: "Smite Icons/Bastet.png" },
    { name: "Bellona", image: "Smite Icons/Bellona.png" },
    { name: "Cabrakan", image: "Smite Icons/Cabrakan.png" },
    { name: "Camazotz", image: "Smite Icons/Camazotz.png" },
    { name: "Cerberus", image: "Smite Icons/Cerberus.png" },
    { name: "Cernunnos", image: "Smite Icons/Cernunnos.png" },
    { name: "Chaac", image: "Smite Icons/Chaac.png" },
    { name: "Chang'e", image: "Smite Icons/Change.png" },
    { name: "Charon", image: "Smite Icons/Charon.png" },
    { name: "Charybdis", image: "Smite Icons/Charybdis.png" },
    { name: "Chernobog", image: "Smite Icons/Chernobog.png" },
    { name: "Chiron", image: "Smite Icons/Chiron.png" },
    { name: "Chronos", image: "Smite Icons/Chronos.png" },
    { name: "Cliodhna", image: "Smite Icons/Cliodhna.png" },
    { name: "Cthulhu", image: "Smite Icons/Cthulhu.png" },
    { name: "Cu Chulainn", image: "Smite Icons/Cu_Chulainn.png" },
    { name: "Cupid", image: "Smite Icons/Cupid.png" },
    { name: "Da Ji", image: "Smite Icons/Da_Ji.png" },
    { name: "Danzaburou", image: "Smite Icons/Danzaburou.png" },
    { name: "Discordia", image: "Smite Icons/Discordia.png" },
    { name: "Erlang Shen", image: "Smite Icons/Erlang_Shen.png" },
    { name: "Eset", image: "Smite Icons/Eset.png" },
    { name: "Fafnir", image: "Smite Icons/Fafnir.png" },
    { name: "Fenrir", image: "Smite Icons/Fenrir.png" },
    { name: "Freya", image: "Smite Icons/Freya.png" },
    { name: "Ganesha", image: "Smite Icons/Ganesha.png" },
    { name: "Geb", image: "Smite Icons/Geb.png" },
    { name: "Gilgamesh", image: "Smite Icons/Gilgamesh.png" },
    { name: "Guan Yu", image: "Smite Icons/Guan_Yu.png" },
    { name: "Hachiman", image: "Smite Icons/Hachiman.png" },
    { name: "Hades", image: "Smite Icons/Hades.png" },
    { name: "He Bo", image: "Smite Icons/He_Bo.png" },
    { name: "Heimdallr", image: "Smite Icons/Heimdallr.png" },
    { name: "Hel", image: "Smite Icons/Hel.png" },
    { name: "Hera", image: "Smite Icons/Hera.png" },
    { name: "Hercules", image: "Smite Icons/Hercules.png" },
    { name: "Horus", image: "Smite Icons/Horus.png" },
    { name: "Hou Yi", image: "Smite Icons/Hou_Yi.png" },
    { name: "Hun Batz", image: "Smite Icons/Hun_Batz.png" },
    { name: "Ishtar", image: "Smite Icons/Ishtar.png" },
    { name: "Ix Chel", image: "Smite Icons/Ix_Chel.png" },
    { name: "Izanami", image: "Smite Icons/Izanami.png" },
    { name: "Janus", image: "Smite Icons/Janus.png" },
    { name: "Jing Wei", image: "Smite Icons/Jing_Wei.png" },
    { name: "Jormungandr", image: "Smite Icons/Jormungandr.png" },
    { name: "Kali", image: "Smite Icons/Kali.png" },
    { name: "Khepri", image: "Smite Icons/Khepri.png" },
    { name: "King Arthur", image: "Smite Icons/King_Arthur.png" },
    { name: "Kukulkan", image: "Smite Icons/Kukulkan.png" },
    { name: "Kumbhakarna", image: "Smite Icons/Kumbhakarna.png" },
    { name: "Kuzenbo", image: "Smite Icons/Kuzenbo.png" },
    { name: "Lancelot", image: "Smite Icons/Lancelot.png" },
    { name: "Loki", image: "Smite Icons/Loki.png" },
    { name: "Maman Brigitte", image: "Smite Icons/Maman_Brigitte.png" },
    { name: "Martichoras", image: "Smite Icons/Martichoras.png" },
    { name: "Maui", image: "Smite Icons/Maui.png" },
    { name: "Medusa", image: "Smite Icons/Medusa.png" },
    { name: "Mercury", image: "Smite Icons/Mercury.png" },
    { name: "Merlin", image: "Smite Icons/Merlin.png" },
    { name: "Morgan Le Fay", image: "Smite Icons/Morgan_Le_Fay.png" },
    { name: "Mulan", image: "Smite Icons/Mulan.png" },
    { name: "Ne Zha", image: "Smite Icons/Ne_Zha.png" },
    { name: "Neith", image: "Smite Icons/Neith.png" },
    { name: "Nemesis", image: "Smite Icons/Nemesis.png" },
    { name: "Nike", image: "Smite Icons/Nike.png" },
    { name: "Nox", image: "Smite Icons/Nox.png" },
    { name: "Nut", image: "Smite Icons/Nut.png" },
    { name: "Nu Wa", image: "Smite Icons/Nu_Wa.png" },
    { name: "Odin", image: "Smite Icons/Odin.png" },
    { name: "Olorun", image: "Smite Icons/Olorun.png" },
    { name: "Osiris", image: "Smite Icons/Osiris.png" },
    { name: "Pele", image: "Smite Icons/Pele.png" },
    { name: "Persephone", image: "Smite Icons/Persephone.png" },
    { name: "Poseidon", image: "Smite Icons/Poseidon.png" },
    { name: "Ra", image: "Smite Icons/Ra.png" },
    { name: "Raijin", image: "Smite Icons/Raijin.png" },
    { name: "Rama", image: "Smite Icons/Rama.png" },
    { name: "Ratatoskr", image: "Smite Icons/Ratatoskr.png" },
    { name: "Ravana", image: "Smite Icons/Ravana.png" },
    { name: "Scylla", image: "Smite Icons/Scylla.png" },
    { name: "Serqet", image: "Smite Icons/Serqet.png" },
    { name: "Set", image: "Smite Icons/Set.png" },
    { name: "Shiva", image: "Smite Icons/Shiva.png" },
    { name: "Skadi", image: "Smite Icons/Skadi.png" },
    { name: "Sobek", image: "Smite Icons/Sobek.png" },
    { name: "Sol", image: "Smite Icons/Sol.png" },
    { name: "Sun Wukong", image: "Smite Icons/Sun_Wukong.png" },
    { name: "Surtr", image: "Smite Icons/Surtr.png" },
    { name: "Susano", image: "Smite Icons/Susano.png" },
    { name: "Sylvanus", image: "Smite Icons/Sylvanus.png" },
    { name: "Terra", image: "Smite Icons/Terra.png" },
    { name: "Thanatos", image: "Smite Icons/Thanatos.png" },
    { name: "The Morrigan", image: "Smite Icons/The_Morrigan.png" },
    { name: "Thor", image: "Smite Icons/Thor.png" },
    { name: "Thoth", image: "Smite Icons/Thoth.png" },
    { name: "Tiamat", image: "Smite Icons/Tiamat.png" },
    { name: "Tsukuyomi", image: "Smite Icons/Tsukuyomi.png" },
    { name: "Tyr", image: "Smite Icons/Tyr.png" },
    { name: "Ullr", image: "Smite Icons/Ullr.png" },
    { name: "Vamana", image: "Smite Icons/Vamana.png" },
    { name: "Vulcan", image: "Smite Icons/Vulcan.png" },
    { name: "Xbalanque", image: "Smite Icons/Xbalanque.png" },
    { name: "Xing Tian", image: "Smite Icons/Xing_Tian.png" },
    { name: "Yemoja", image: "Smite Icons/Yemoja.png" },
    { name: "Ymir", image: "Smite Icons/Ymir.png" },
    { name: "Yu Huang", image: "Smite Icons/Yu_Huang.png" },
    { name: "Zeus", image: "Smite Icons/Zeus.png" },
    { name: "Zhong Kui", image: "Smite Icons/Zhong_Kui.png" }
];

function loadCharacters() {
    const characterArea = document.getElementById('character-list');
    characterArea.innerHTML = '';
    characters.sort((a, b) => a.name.localeCompare(b.name));
    characters.forEach(char => {
        characterArea.appendChild(createCharacterCard(char));
    });
}

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
        card.style.display = name.includes(searchInput) ? 'block' : 'none';
    });
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
    }
}

function dropBan(event) {
    event.preventDefault();
    event.target.classList.remove('drag-over');
    const id = event.dataTransfer.getData("text");

    if (event.target.className.includes('ban-slot') && event.target.children.length === 0) {
        event.target.appendChild(createClonedElement(id));
        greyOutCharacter(id, true);
    }
}

function createClonedElement(id) {
    const original = document.getElementById(id);
    const clone = original.cloneNode(true);
    clone.id = id + "-clone";
    clone.draggable = false;
    return clone;
}

function greyOutCharacter(id, isBan = false) {
    const characterImage = document.getElementById(id);
    if (characterImage) {
        characterImage.classList.add('greyed-out');
    }
    if (isBan) {
        const clonedElement = document.getElementById(id + "-clone");
        if (clonedElement) {
            clonedElement.classList.add('greyed-out');
        }
    }
}

function removeGreyOutCharacter(id) {
    const characterImage = document.getElementById(id);
    if (characterImage) {
        characterImage.classList.remove('greyed-out');
    }
    const clonedElement = document.getElementById(id + "-clone");
    if (clonedElement) {
        clonedElement.parentNode.removeChild(clonedElement);
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
}

document.addEventListener('DOMContentLoaded', () => {
    loadCharacters();
    const slots = document.querySelectorAll('.pick-slot, .ban-slot');
    slots.forEach(slot => {
        slot.addEventListener('click', function() {
            if (this.firstChild && this.firstChild.className.includes('character-image')) {
                const id = this.firstChild.id.replace('-clone', '');
                removeGreyOutCharacter(id);
                this.removeChild(this.firstChild);
            }
        });
    });
});