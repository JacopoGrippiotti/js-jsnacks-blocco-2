let primaParola = prompt('inserisci la prima parola')

let secondaParola = prompt('inserisci la seconda parola')

function lengthAnalizer(lunghezzaPrimaParola, lunghezzaSecondaParola){

    if(lunghezzaPrimaParola == lunghezzaSecondaParola){
        console.log('le parole sono di dimensioni identiche', primaParola, secondaParola)

    }else {
        console.log('le parole sono di dimensioni differenti mi dispiace')
    }

}

lengthAnalizer(primaParola.length, secondaParola.length);