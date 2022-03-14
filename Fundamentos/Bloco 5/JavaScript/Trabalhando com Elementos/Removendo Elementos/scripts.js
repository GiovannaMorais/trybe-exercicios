document.getElementById("paiDoPai");
for(index =pai.childNodes.length -1; index >= 0;index -=1){
    const children =pai.childNodes[index]
    if(children.id !== 'elementoOndeVoceEsta' ){

children.remove()
}
}
const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();