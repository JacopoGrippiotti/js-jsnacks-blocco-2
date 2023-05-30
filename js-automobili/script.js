const autoList = [
    
    {
        marca: 'mercedes',
        modello: 'classe a',
        alimentazione :'benzina'
    },
    
    {
        marca: 'ferrari',
        modello: 'sf90 spider',
        alimentazione :'benzina'
    },
    
    {
        marca: 'audi',
        modello: 'a6',
        alimentazione :'diesel'
    },
    
    {
        marca: 'chevrolet',
        modello: 'suburban',
        alimentazione :'gpl'
    },
    
    {
        marca: 'bmw',
        modello: 'serie 3',
        alimentazione :'elettrico'
    },
    
    {
        marca: 'suzuki',
        modello: 'swift',
        alimentazione :'metano'
    },
    
    {
        marca: 'renault',
        modello: 'clio',
        alimentazione :'benzina'
    },
    
    {
        marca: 'hummer',
        modello: 'h1',
        alimentazione :'gpl'
    },
    
    {
        marca: 'alfa romeo',
        modello: 'giulia',
        alimentazione :'elettrico'
    },
    
    {
        marca: 'fiat',
        modello: '500',
        alimentazione :'diesel'
    },
    
    {
        marca: 'hyundai',
        modello: 'bayon',
        alimentazione :'benzina'
    },
    
    {
        marca: 'citroen',
        modello: 'c4',
        alimentazione :'metano'
    },
    
    {
        marca: 'dacia',
        modello: 'sandero',
        alimentazione :'elettrico'
    },
    
    {
        marca: 'ford',
        modello: 'fiesta',
        alimentazione :'gpl'
    },
    
    {
        marca: 'jeep',
        modello: 'wrangler',
        alimentazione :'metano'
    },
]



let benzinaArray = []
for(let i = 0; i < autoList.length; i++){

    
    
    if(autoList[i].alimentazione === 'benzina'){

        benzinaArray.push(autoList[i])

    }

}

console.log(benzinaArray)














/**

Crea un array composto da 15 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: 

nel primo array solo le auto a benzina,  // ciclo for 
nel secondo solo le auto a diesel,  // ciclo foreach
nel terzo il resto delle auto.  //array.filter

Infine stampa separatamente i 3 array.

 */