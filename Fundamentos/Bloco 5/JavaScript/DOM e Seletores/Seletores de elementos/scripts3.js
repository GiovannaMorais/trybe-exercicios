document.getElementById("header-container").style.color="#2fc18c"
let emergency=document.querySelectorAll(".emergency-tasks h3")
for(let index =0; index < emergency.length; index +=1){
    emergency[index].style.color="black"
}
document.getElementsByClassName("emergency-tasks")[0].style.background = "#2fc18c"
document.getElementsByClassName("no-emergency-tasks")[0].style.background = "#2fc18c"
let noEmergency=document.querySelectorAll(".no-emergency-tasks h3")
for(let index =0; index < noEmergency.length; index +=1){
    noEmergency[index].style.color="black"
}
document.getElementById("footer-container").style.color = "#2fc18c"