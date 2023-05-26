const ulElement = document.getElementById('ingredients')

let emptyListOfIngredients = []

function addIngredient (ingredient){

    let liElement = document.createElement('li')

    liElement.append(ingredient)

    ulElement.append(liElement)
}

const button = document.getElementById('button')

const inseredInput = document.getElementById('inseredIngredient')

button.addEventListener('click', function(){

    emptyListOfIngredients.push(inseredInput.value)

    for(let i = 0; i < emptyListOfIngredients.length; i++){

        ulElement.append(emptyListOfIngredients[i])

    }

})