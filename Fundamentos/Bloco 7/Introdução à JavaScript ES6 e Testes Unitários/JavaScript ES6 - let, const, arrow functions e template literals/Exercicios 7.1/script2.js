// const numero = number => {
//     if(number > 1){
//     return number * numero(number-1)
//    } 
//    return number

// }
// console.log(numero(4));

const numero2 = number =>  number > 1 ? number * numero2(number-1) : number
console.log(numero2(4));

const string = frase => {
    let separa = frase.split(' ');
    let word = 0;
    let result ='';


for(const index of separa){
    if(index.length > word){
        word = index.length
        result =  index
    }
}
return result

}
console.log(string('Antônio foi no banheiro e não sabemos o que aconteceu'))


// const longestWord = frase => frase.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));