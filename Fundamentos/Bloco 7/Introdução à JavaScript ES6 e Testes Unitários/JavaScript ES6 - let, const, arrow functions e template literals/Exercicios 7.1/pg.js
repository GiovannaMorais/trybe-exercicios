const aperte= document.getElementById('btn');
const counter= document.getElementById('clicks');
function click (){
   let count = 0 
aperte.addEventListener('click',()=>{
    count+=1
    counter.innerHTML = "Clicks: " + count;
})
}
click ()