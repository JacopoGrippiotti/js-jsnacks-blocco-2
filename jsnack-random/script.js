
function randomNumber(max, min){

    let randomNumber = Math.floor(Math.random()*(max - min + 1) + min)

    return randomNumber
}





function fiveRandomNumbersArray (){

    let array = []

    randomNumber (5,1)
    
    

    console.log(randomNumber)

    for(let i = 5; i >= 1; i--){

        if(randomNumber(5,1) != array[i+1])
        array.push(randomNumber)

        else
        randomNumber(5,1) 


    }
}

