let primaParola = prompt('inserisci la prima parola')

let secondaParola = prompt('inserisci la seconda parola')

function lengthAnalizer(lunghezzaPrimaParola, lunghezzaSecondaParola){

    if(lunghezzaPrimaParola.length === lunghezzaSecondaParola.length){
        
        console.log('le parole sono di dimensioni identiche', lunghezzaPrimaParola, lunghezzaSecondaParola)

    }else {
        
        console.log('le parole sono di dimensioni differenti mi dispiace')
    }

}

lengthAnalizer(primaParola, secondaParola);