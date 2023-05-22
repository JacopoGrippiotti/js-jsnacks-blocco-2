let arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

let sum = 0


for ( let i = 0; i < arrayNumbers.length; i++){

    sum += arrayNumbers[i]

}

let media = (sum / arrayNumbers.length)

console.log(sum)
console.log(media)