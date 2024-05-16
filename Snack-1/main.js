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
    }  
];

// variabile di peso minore di partenza data al peso del primo oggetto dell'array che verrà ciclato
let pesoMinore = biciclette[0].peso

// variabile non definita di quella che sarà la bici più leggera
let biciLeggera;

// ciclo per confronto del peso
biciclette.forEach(bici => {
    if(bici.peso <= pesoMinore){
        // la bici più leggera sarà il nome della bici con il peso minore
        biciLeggera = bici.nome;
        // il peso minore sarà il .peso della bici più leggera
        pesoMinore = bici.peso
    }
    
});

// stampa
console.log(`La bici più leggera è la ${biciLeggera} con un peso di: ${pesoMinore} kg`);
