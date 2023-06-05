const arrayPaperini = ['gino','ginetta','giORgione','PAPeroga','MAlena','RoccO','rIckPEtrick','FAbioLa','GigGGetto','CamIlla']

const arrayModificato = []

for(let i= 0; i < arrayPaperini.length; i++){

    let singoloElemento = arrayPaperini[i].toLowerCase()


    arrayModificato.push(singoloElemento)

}


console.log(arrayModificato)