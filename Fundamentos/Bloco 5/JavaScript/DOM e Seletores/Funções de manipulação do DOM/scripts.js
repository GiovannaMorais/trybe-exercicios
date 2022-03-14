function daqui2Anos(){
document.getElementsByTagName("p")[1].innerText = "Eu me vejo trabalhando e realizada,aprendendo mais e mais"
}
daqui2Anos()

function mudaCor(){
    document.getElementsByClassName("main-content")[0].style.background ="rgb(76,164,109)"
}
mudaCor()

function mudaCor2(){
    document.getElementsByClassName("center-content")[0].style.background ="white"
}
mudaCor2()

function correçao(){
    document.getElementsByTagName("h1")[0].innerText="Exercício 5.1 - JavaScript"
}
correçao()

function maiusculo(){
    let uppercase =document.getElementsByTagName("p")[0]
    uppercase.innerText=uppercase.innerText.toUpperCase()
    
}
maiusculo()

function paragrafos (){
    let paragrafo =document.getElementsByTagName ("p")
    for(let index = 0; index < paragrafo.length; index +=1 ){
        console.log(paragrafo[index].innerText)
    }
}
paragrafos()