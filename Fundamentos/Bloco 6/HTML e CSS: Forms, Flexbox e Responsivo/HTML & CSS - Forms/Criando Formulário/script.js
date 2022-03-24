const button = document.getElementById("submit");
function reverseButton(event) {
  event.preventDefault();
  const caracteres = validation();
  if(caracteres === false){
      alert ('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

function clearButton() {
  const tudoInput = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (let index = 0; index < tudoInput.length; index += 1) {
    const posicao = tudoInput[index];
    posicao.value = "";
    posicao.checked = false;
  }
  textArea = "";
}
const permisao = document.querySelector('#concordo')
function autorize(){
   
    const permisao = document.querySelector('#concordo')
    const button = document.querySelector("#submit");
    button.disabled = !permisao.checked
    
}

function validation(){
    const name =document.querySelector('#nome').value.length;
    const mail =document.querySelector('#email').value.length;;
    const text = document.getElementById('textarea').value.length;
    const tamanhoNome = name < 10 || name > 40;
    const tamanhoEmail = mail < 10 || mail > 50;
    const tamanhoText = text > 500;
    
    if(tamanhoEmail||tamanhoNome|| tamanhoText){
        return false;
    }else{
        return true;
    }
}

window.onload = function () {
  const clear = document.getElementById("limpar");
  clear.addEventListener("clik", clearButton);
  button.addEventListener("click", reverseButton);
  permisao.addEventListener('change',autorize)
}

