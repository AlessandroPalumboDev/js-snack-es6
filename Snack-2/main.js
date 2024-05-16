'use strict';

const squadre = [
    {
        nome: 'Juentus',
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


function random(min, max){
    const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const result = squadre.map((squadra) =>{
    squadra.puntiFatti = random(1, 99);
    squadra.falliSubiti = random(1, 99);
    // console.log(squadra.nome, squadra.falliSubiti)
    return squadra.nome, squadra.falliSubiti;
    
});

console.table(result);
