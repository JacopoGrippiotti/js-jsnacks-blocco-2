let listOfPepperoni = [
    {
        peperoneType: 'rosso',
        weight: 10,
        length:40
    },
    
    {
        peperoneType: 'verde',
        weight: 10,
        length: 70
    },
    
    {
        peperoneType: 'giallo',
        weight: 30,
        length: 50
    },
    
    {
        peperoneType: 'nero',
        weight: 20,
        length: 70
    },
    
    {
        peperoneType: 'magico',
        weight: 20,
        length: 60
    },
    
    {
        peperoneType: 'gamberus',
        weight: 10,
        length: 5
    },
    
    {
        peperoneType: 'muschius',
        weight: 80,
        length: 10
    },
    
    {
        peperoneType: 'francese',
        weight: 20,
        length: 90
    },
    
    {
        peperoneType: 'matto',
        weight: 20,
        length: 70
    },
    
    {
        peperoneType: 'pompelmoso',
        weight: 40,
        length: 30
    },


]

function weightOfPepperoni (pepperoniList){

    for(let i = 0; i < pepperoniList.length; i++){

        let pepperoniWeight = 0

        pepperoniWeight += pepperoniList[i].weight
    }

    return pepperoniWeight
}