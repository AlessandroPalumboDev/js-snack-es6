'use strict';

const squadre = [
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Atalanta',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Fiorentina',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Torino',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Sampdoria',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// funzione numeri casuali
function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// modifico punti, falli e creo nuovo array
const result = squadre.map((squadra) => {
    squadra.puntiFatti = random(1, 99);
    squadra.falliSubiti = random(1, 99);
    return {
        nome: squadra.nome,
        falliSubiti: squadra.falliSubiti
    };
});

// stampo
console.table(squadre);
console.table(result);
