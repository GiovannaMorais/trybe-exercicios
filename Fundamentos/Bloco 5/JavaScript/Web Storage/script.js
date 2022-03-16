window.onload = function(){
  function background (color){  
let bcolor = document.querySelector("body");
bcolor.style.backgroundColor=color
localStorage.setItem("backgroundColor", color)
}



function textColor (letraCor){
    let colorText = document.querySelectorAll(".texto");
    for(let index = 0; index < colorText.length; index +=1){
    
    colorText[index].style.color = letraCor
}
localStorage.setItem("TextColor", letraCor)
}


function lengthFont (font){
let lengthFonte = document.querySelectorAll(".texto");
for(let index = 0; index < lengthFonte.length; index +=1){

lengthFonte[index].style.fontSize = font

}localStorage.setItem("lengthFont", font)

}

function space (espace){
    let spaceLine = document.querySelectorAll(".texto");
    for(let index = 0; index < spaceLine.length; index +=1){
    
    spaceLine[index].style.lineHeight = espace
}
localStorage.setItem("spaceLine", espace)

}

function typeFont (type){
    let fontType = document.querySelectorAll(".texto");
    for(let index = 0; index < fontType.length; index +=1){
    
    fontType[index].style.fontFamily = type
}
localStorage.setItem("typeFont", type)
}

let backgroundBotton =document.querySelectorAll("#background-color >button")
for(let index = 0; index < backgroundBotton.length; index +=1){
    
    backgroundBotton[index].addEventListener("click",function(event){
        background(event.target.innerHTML)
    })

}
let textColorBotton =document.querySelectorAll("#textColor>button")
for(let index = 0; index < textColorBotton.length; index +=1){
    
    textColorBotton[index].addEventListener("click",function(event){
        textColor(event.target.innerHTML)
    })

}
let lengthFontBotton =document.querySelectorAll("#lengthFont>button")
for(let index = 0; index < lengthFontBotton.length; index +=1){
    
    lengthFontBotton[index].addEventListener("click",function(event){
        lengthFont(event.target.innerHTML)
    })

}
let spaceLineBotton =document.querySelectorAll("#spaceLine>button")
for(let index = 0; index < spaceLineBotton.length; index +=1){
    
    spaceLineBotton[index].addEventListener("click",function(event){
        space(event.target.innerHTML)
    })

}
let typeFontBotton =document.querySelectorAll("#typeFont>button")
for(let index = 0; index < typeFontBotton.length; index +=1){
    
    typeFontBotton[index].addEventListener("click",function(event){
        typeFont(event.target.innerHTML)
    })

}

function iniciar (){
    let backgroundColor=localStorage.getItem("backgroundColor")
    if (backgroundColor) background(backgroundColor)

    let textcolors=localStorage.getItem("textcolors")
    if (textcolors) background(textcolors)
    
    let lengthFont=localStorage.getItem("lengthFont")
    if (lengthFont) background(lengthFont)
    
    let spaceLine=localStorage.getItem("spaceLine")
    if (spaceLine) background(spaceLine)
    
    let typeFont=localStorage.getItem("typeFont")
    if (typeFont) background(typeFont)

}

iniciar()

}
