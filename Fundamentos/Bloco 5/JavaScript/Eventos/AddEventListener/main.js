const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

function classeTech (evento){
  const tech = document.querySelectorAll('.tech');
 tech.classList.remove("tech")
 evento.target.classList.add("tech");
 input.value="";
}

firstLi.addEventListener('click',classeTech);
secondLi.addEventListener('click',classeTech);
thirdLi.addEventListener('click',classeTech);
 
input.addEventListener('input',function(evento){
  const tech = document.querySelector(".tech");
  tech.innerText =evento.target.value //value - retorna o valor dado na caixa de texto
})

myWebpage.addEventListener ("click",function (link){
 link= window.location.replace("https://giovannamorais.github.io/")
})

myWebpage.addEventListener("mouseover",function(){
document.getElementById('my-spotrybefy').style.color = "#FF0657"
})

myWebpage.addEventListener("mouseout",function(){
  document.getElementById('my-spotrybefy').style.color = "unset"
  })
  


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.