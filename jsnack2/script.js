let max = 100

let min = 1

let numGenerator = Math.floor(Math.random()*(max - min + 1)) + min

let guessed = false

let higherNumberToGuess = false

let lowerNumberToGuess = false


while(guessed == false){

    let userNumber = prompt('inserisci il tuo numero')

    if ( userNumber < numGenerator  ){

        higherNumberToGuess = true
    }
    else if (userNumber > numGenerator){

        lowerNumberToGuess = true
    }
    else if (userNumber == numGenerator){
        guessed = true
    }

    
}



console.log(numGenerator)

