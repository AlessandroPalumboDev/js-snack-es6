'use strict';

const biciclette = [
    {
        nome: 'bici 1',
        peso: 18
    },
    {
        nome: 'bici 2',
        peso: 15
    },
    {
        nome: 'bici 3',
        peso: 12
    },
    {
        nome: 'bici 4',
        peso: 10
    },
    {
        nome: 'bici 5',
        peso: 8
    },
    {
        nome: 'bici 6',
        peso: 28
    },
    {
        nome: 'bici 7',
        peso: 8
    }
];

// variabile di peso minore di partenza data al peso del primo oggetto dell'array che verrà ciclato
let pesoMinore = biciclette[0].peso;

// ciclo per confronto del peso
biciclette.forEach(bici => {
    if (bici.peso <= pesoMinore) {
        // il peso minore sarà il .peso della bici più leggera
        pesoMinore = bici.peso
    }

});

const biciLeggere = biciclette.filter((bici) => {
    if (bici.peso === pesoMinore) {
        return true;
    }
});

// stampo
if (biciLeggere.length > 1) {
    const nomiBiciLeggere = [];
    biciLeggere.forEach((bici) => {
        nomiBiciLeggere.push(bici.nome);
    });
    console.log(`Le bici più leggere sono ${nomiBiciLeggere} con il peso di ${pesoMinore} kg.`);
} else {
    console.log(`La bici più leggera è ${bici.nome} con il peso di ${pesoMinore} kg.`)
};