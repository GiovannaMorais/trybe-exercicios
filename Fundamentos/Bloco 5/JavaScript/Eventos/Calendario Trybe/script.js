function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
   
    function diasDoCalendario (){
        let dayscreate = document.querySelector("#days");

        for(let index =0; index < dezDaysList.length; index+=1){
            let day = dezDaysList[index];
            let dayslist= document.createElement("li");

            if(day === 24 | day === 31){
                dayslist.className="day holiday"
                dayslist.innerHTML = day;
                dayscreate.appendChild(dayslist)
            }
            else if (day === 4 |day=== 11 | day === 18 ){
                dayslist.className= "day friday"
                dayslist.innerHTML = day
                dayscreate.appendChild(dayslist)

            }else if ( day === 25){
                dayslist.className="day holiday friday"
                dayslist.innerHTML = day
                dayscreate.appendChild(dayslist)
            }else{
                dayslist.className="day"
                dayslist.innerHTML = day
                dayscreate.appendChild(dayslist)
            }
        }
    }
    diasDoCalendario()

    function descanso (feriados){
        let container = document.querySelector(".buttons-container");
        let newBotton = document.createElement("button")
        newBotton.innerHTML = feriados
        newBotton.id = 'btn-holiday'

        container.appendChild(newBotton)
    }
    descanso("Feriados")

    function colorirDias (){
        let bottonFeriados = document.querySelector("#btn-holiday")
        let holidays = document.querySelectorAll('.holiday')
        let cor ="white"
        
        bottonFeriados.addEventListener('click', function() {

        for (let index = 0; index < holidays.length; index +=1){
            if(holidays[index].style.backgroundColor === cor){
                holidays[index].style.backgroundColor ="rgb(238,238,238)"
            }else{
                holidays[index].style.backgroundColor = cor
            }
        }
    })
}
colorirDias ()

function sextas (sexta){
    let container2 = document.querySelector(".buttons-container");
    let newBotton2 = document.createElement("button")
    newBotton2.innerHTML ="Sexta-Feira"
    newBotton2.id = 'btn-friday'

    container2.appendChild(newBotton2)
}
sextas()

function sextou (sextei) {
    let bottonSexta = document.querySelector("#btn-friday");
    let sexteis = document.querySelectorAll(".friday");
    let newText = "SEXTOUUUU"
    
    bottonSexta.addEventListener("click" , function(){
        for(let i = 0; i < sexteis.length; i +=1){
            if(sexteis[i].innerHTML !== newText ){
                sexteis[i].innerHTML= newText
            }else{
                sexteis[i].innerHTML=sextei[i]
            }
        }
    })
    
}let sextass =[4,11,18,25] 
sextou(sextass)

function mouseOver (){
    
   let daysmoth=document.querySelector("#days")

    daysmoth.addEventListener("mouseover", function (event){
        event.target.style.fontSize = "50px "
        event.target.style.fontWeight = "600"
            });
        };
    
 function mouseOut (){

    let daysmoth =document.querySelector("#days")
        
    daysmoth.addEventListener("mouseout", function (event){
        event.target.style.fontWeight = "200"
        event.target.style.fontSize = "20px"
        
    });
};
mouseOver();
mouseOut();

function action (açao){
    let span = document.createElement("span")
    let spanContainer = document.querySelector(".my-tasks");     

    span.innerHTML=açao;
    spanContainer.appendChild(span)
}

action("cozinhar");




function Colors (color){
    let div = document.createElement("div")
    let divContainer = document.querySelector(".my-tasks");     
    div.className = "task"
    div.style.background = color
    divContainer.appendChild(div)
}
Colors ("black")

function actionColor (){
    let taskss = document.querySelector(".task");
   let seleciona= document.getElementsByClassName("task selected ")

   taskss.addEventListener("click",function(evento){
           if(seleciona.length === 0){
               evento.target.className="task selected"

           }else{
               evento.target.className="task"
           }
       })
   }
actionColor ()

function diaCor(){
    let selecionado = document.getElementsByClassName("task selected ")
   let dayx=document.querySelector("#days");
   let divc=document.querySelector(".task");
   let background = divc.style.backgroundColor;

   dayx.addEventListener("click",function(events){
       let eventotarge=events.target.style.color
      
       if(selecionado.length >0 && eventotarge !== background){
           let color = selecionado[0].style.backgroundColor;
           events.target.style.color = color;
       }else if (eventotarge === background && selecionado !== 0){
        events.target.style.color = 'rgb(119,119,119)'
       }
   })
}
diaCor();

function compromisso (){
    let comp = document.querySelector("#task-input");
    let compButton = document.querySelector("#btn-add")
    let listComp = document.querySelector(".task-list")
    
    compButton.addEventListener("click",function(){ 
        if(comp.value.length > 0){
            let lista = document.createElement("li");
            lista.innerText=comp.value;

            listComp.appendChild(lista)
            listComp.value=" ";
        }else {
            alert("ERROR : DIGITE ALGUM COMPRIMISSO")
        }

})

    comp.addEventListener("keyup",function(event){
        if(event.key === 'Enter' && comp.value.length > 0){
            let lista = document.createElement("li");
            lista.innerText=comp.value;
             
            listComp.appendChild(lista)
            listComp.value=" ";

        }

    });
}compromisso()










