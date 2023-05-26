
function randomNumber(max, min){

    let randomNumber = Math.floor(Math.random()*(max - min + 1) + min)

    return randomNumber
}


function RandomNumbersArray (max, min, elements){

    let array = []

    

    while(array.length < elements) {
        
        let random = randomNumber(max,min)
        
        if(!array.includes(random)){
            
            array.push(random)
        }
        
    }

    return array
}



