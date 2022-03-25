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
const picker = new Pikaday({
    
    field: document.getElementById('date'),
    // format: 'D/M/YYYY',
    toString(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString ){
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});
// function validation(){
//     const name =document.querySelector('#nome').value.length;
//     const mail =document.querySelector('#email').value.length;;
//     const text = document.getElementById('textarea').value.length;
//     const tamanhoNome = name < 10 || name > 40;
//     const tamanhoEmail = mail < 10 || mail > 50;
//     const tamanhoText = text > 500;
    
//     if(tamanhoEmail||tamanhoNome|| tamanhoText){
//         return false;
//     }else{
//         return true;
//     }
// }
const validation = new JustValidate('form');

validation
.addField('#nome',[
      {
        rule: 'required',
        errorMessage: 'O campo de nome é obrigatório.',
      },
      {
        rule: 'maxLength',
        value: 40,
        errorMessage: 'O limite é de 40 caracteres.',
      },
      {
        rule: 'minLength',
        value: 10,
         errorMessage: 'O mínimo é de 10 caracteres.',
    },

      
    ])
    validation
    .addField('#email',[
        {
          rule: 'required',
          errorMessage: 'O campo de nome é obrigatório.',
        },
        {
          rule: 'email',
          errorMessage: 'O email digitado não é válido.',
        },
        {
          rule: 'minLength',
          value: 50,
           errorMessage: 'O mínimo é de 50 caracteres.',
      },
  
        
      ])
      .addField('#textarea',[
        {
          rule: 'required',
          errorMessage: 'O campo de nome é obrigatório.',
        },
        {
          rule: 'maxLength',
          value: 500,
           errorMessage: 'O limite é de 500 caracteres.',
      },
  
        
      ])
     .addField('#date',[
        {
          rule: 'required',
          errorMessage: 'O campo de data é obrigatório.',
        },
        
      ]);


window.onload = function () {
  const clear = document.getElementById("limpar");
  clear.addEventListener("clik", clearButton);
  button.addEventListener("click", reverseButton);
  permisao.addEventListener('change',autorize)
}


