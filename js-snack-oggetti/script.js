let basketPlayer = {

    playerCode: makeid(3,3),
    name: 'Marcello',
    surname: 'DellaChiesa',
    age:25,
    pointsForMarch: randomNumber(50,0),
    '3-points-shot-probability': randomNumber(100, 0),
    'blocked-shots':randomNumber(30, 0),
    'shots':randomNumber(100,20)
}



function makeid(charactersLength, numbersLength) {
    let charactersResult = '';
    let numbersResult = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const charactersLength = characters.length;
    const numbersLength = numbers.length
    let counter = 0;
    while (counter < charactersLength) {
      charactersResult += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }

    while (counter < numbersLength){
        numbersResult += numbers.charAt(Math.floor(Math.random() * numbersLength));
        counter += 1
    }

    let result = charactersResult + numbersResult
    
    return result;
}

function randomNumber (max, min){

    let randomNumber = Math.floor(Math.random()*(max - min +1) + min);

    return randomNumber
}