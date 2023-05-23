const list = document.getElementById("unorderedList")

function createListElement(tagname, content,){

    let listElement = document.createElement(tagname)

    listElement.append(content)
    
    return listElement
    
}

for(let i = 0; i < 10; i++){

   const liElement = createListElement("li", "ciao")

   liElement.addEventListener('click', function(){

    liElement.classList.toggle('underlined')

   });
   
   list.appendChild(liElement)
   

 
}