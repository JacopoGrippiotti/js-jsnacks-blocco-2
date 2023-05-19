let emptyArray = []

let sumMore = false

let sumOfNumbers = 0

let i = 0

while (sumMore == false){

    
    let userNumber = parseInt(prompt("inserisci un numero"))

    emptyArray.push(userNumber)

    sumOfNumbers += emptyArray[i]

   
    if(sumOfNumbers == 50){

        sumMore = true
    } 

    i++

}

console.log(emptyArray)