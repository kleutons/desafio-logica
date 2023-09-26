const aumentarNivelButton = document.getElementById('aumentarNivel');
const diminuirNivelButton = document.getElementById('diminuirNivel');
const sendName = document.getElementById('send');
const inputNomeHeroi = document.getElementById('nomeHeroi');

const nomeSpan = document.getElementById('nome');
const nivelSpan = document.getElementById('nivel');
const xpSpan = document.getElementById('xp');

let nameHeroi = '';
let nivelHeroi = 0;

aumentarNivelButton.addEventListener('click', () => {
    if (nivelHeroi < 10000) {
        nivelHeroi += 1000;
        nivelSpan.textContent = nivelHeroi;
        updateXp();
    }
});

diminuirNivelButton.addEventListener('click', () => {
    if (nivelHeroi > 0) {
        nivelHeroi -= 1000;
        nivelSpan.textContent = nivelHeroi;
        updateXp();
    }
});

sendName.addEventListener('click', () => {
    nameHeroi = inputNomeHeroi.value;
    nomeSpan.textContent = nameHeroi;
    updateXp();
});

function updateXp() {
    if (nivelHeroi <= 1000) {
        xpSpan.textContent = 'Ferro';
    } else if (nivelHeroi <= 2000) {
        xpSpan.textContent = 'Bronze';
    } else if (nivelHeroi <= 5000) {
        xpSpan.textContent = 'Prata';
    } else if (nivelHeroi <= 7000) {
        xpSpan.textContent = 'Ouro';
    } else if (nivelHeroi <= 8000) {
        xpSpan.textContent = 'Platina';
    } else if (nivelHeroi <= 9000) {
        xpSpan.textContent = 'Ascendente';
    } else if (nivelHeroi <= 10000) {
        xpSpan.textContent = 'Imortal';
    } else {
        xpSpan.textContent = 'Radiante';
    }
}