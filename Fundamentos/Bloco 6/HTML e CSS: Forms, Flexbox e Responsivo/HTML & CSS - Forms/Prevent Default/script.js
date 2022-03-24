// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function getLink (event){
    event.preventDefault();
}
HREF_LINK.addEventListener('click',getLink);

function getCheckbox(event){
    event.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click',getCheckbox);

function getText(event){
    const caracter =event.key;
    if(caracter !== 'a'){
       event.preventDefault(); 
    }
    
}
INPUT_TEXT.addEventListener('keypress',getText);