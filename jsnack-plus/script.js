const list = document.getElementById("unorderedList")

function createListElement(tagname, content){

    let listElement = document.createElement(tagname)

    listElement.append(content)

    return listElement
    
}

for(let i = 0; i < 10; i++){

    list.appendChild(createListElement("li", "ciao"))
}