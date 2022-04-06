// 1 - Crie uma função que retorne a string 'Acordando!!' ;
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.

// function wakeUp(){
//     return console.log('Acordando!!'); 
// }
// wakeUp();


// function breakFast(){
//     return console.log('Bora tomar café!!')
// }
// breakFast();


// function sleep(){
//     return  console.log('Partiu dormir!!');
// }
// sleep();

const wakeUp = () => console.log('Acordando!!'); 
const breakFast = () => console.log('Bora tomar café!!');
const sleep = () => console.log('Partiu dormir!!');

// wakeUp();
// breakFast();
// sleep();

const doingThings = (string) => {
    const horaDoDia = string ();
    return horaDoDia
}
doingThings(wakeUp);
doingThings(breakFast);
doingThings(sleep)