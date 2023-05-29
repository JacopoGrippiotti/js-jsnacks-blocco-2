const ulElement = document.getElementById('ingredients')

let emptyListOfIngredients = []

const button = document.getElementById('button')

const inseredInput = document.getElementById('inseredIngredient')

button.addEventListener('click', function(){
 
    let liElement = document.createElement('li')

    liElement.append(inseredInput.value)

    emptyListOfIngredients.push(liElement)

    for(let i = 0; i < emptyListOfIngredients.length; i++){

        ulElement.append(emptyListOfIngredients[i])

    }

})