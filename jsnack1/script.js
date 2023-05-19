let emptyArray = []

let sumMore = false

let sumOfNumbers = 0

let i = 0

while (sumMore == false){

    
    let userNumber = parseInt(prompt("inserisci un numero"))

    emptyArray.push(userNumber)

    sumOfNumbers += userNumber

   
    if(sumOfNumbers >= 50){

        sumMore = true
    } 

    

}

console.log(emptyArray)