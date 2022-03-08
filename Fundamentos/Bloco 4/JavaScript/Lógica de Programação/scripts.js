//Exercicio 1

let fatorial=1;

for(let index =4; index > 0; index -=1 ){
    fatorial *= index;
}
console.log(fatorial);

//Exercicio 2

let word ='tryber';
let wordReverse= '';

for(let index =0; index < word.length; index +=1 ){
    wordReverse += word[word.length - 1 - index];
}
console.log(wordReverse);

//Exercicio 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

for (let index = 0; index < array.length; index+=1){
    if(array[index].length > maior.length){
        maior =array[index];
    }
}
console.log(maior);

for (let index =0; index < array.length;index+=1){
    if(array[index].length < menor.length){
        menor = array[index];
    }
}

console.log(menor);

//Exercicio 4

let primos = 0;

for (let numeroAtual = 0; numeroAtual <= 50; numeroAtual +=1){
    let isPrime = true;

for (let divisor = 2; divisor< numeroAtual; divisor +=1){
    if(numeroAtual % divisor === 0){
        isPrime= false
    }
}
 if(isPrime){
    primos = numeroAtual
}
}
console.log(primos);

///BONUS///
 
//Exercicio 1

let n = 4;
let astericos ="*";
let espaço ="";

for (let linha =0 ; linha < n ; linha +=1){   
    espaço = astericos + espaço
}
for (let coluna =0 ; coluna < n ; coluna +=1){
    console.log(espaço);
}

//Exercicio 2 
let number = 5;
let simbolo="*";
let space ="";

for (let linha =0 ; linha < number ; linha +=1){   
for (let coluna =0 ; coluna < number ; coluna +=1){   
    if(coluna === linha){
        space+= simbolo
    }
}console.log(space)
}

//Exercicio 3 

let numbero = 5;
let caracter="*";
let espace ="";
let position=numbero

for (let linha =0 ; linha < numbero ; linha +=1){   
for (let coluna =0 ; coluna <= numbero ; coluna +=1){   
    if(coluna < position){
        espace= espace + " ";
    }else{
        espace = espace + caracter;
    }
}
console.log(espace);
espace="";
position -=1;

}

//Exercicio 4

let numero = 5;
let asterico="*";
let espaco  ="";
let meioMatrix = ( numero + 1 ) / 2;
let esquerda = meioMatrix;
let direita = meioMatrix;


for (let linha =0 ; linha <= meioMatrix ; linha +=1){   
for (let coluna =0 ; coluna <= numero ; coluna +=1){   
    if(coluna > esquerda && coluna < direita){
        espaco= espaco + asterico;
    }else{
        espaco = espaco + " ";
    }
}
console.log(espaco);
espaco = " ";
esquerda -= 1;
direita += 1;
}

//Exercicio 5

let num = 7;
let ast="*";
let meiaMatrix = ( num + 1 ) / 2;
let left = meiaMatrix;
let rigth = meiaMatrix;


for (let linha =1 ; linha <= meiaMatrix ; linha +=1){
    let spaço  ="";   
for (let coluna =1 ; coluna <= num ; coluna +=1){   
    if(coluna == left || coluna == rigth || linha == meiaMatrix){
        spaço+= ast;
    }else{
        spaço += " ";
    }
}

left -= 1;
rigth += 1;
console.log(spaço);
}

//Exercicio 6 

let numeroDefinido = 111;
let divisores=1;
 
for (let index = 2; index <= numeroDefinido; index +=1){
    if(numeroDefinido % index === 0) 
    divisores+=1;
}
if (divisores === 2 )console.log(numeroDefinido  + " é primo");
else console.log(numeroDefinido + " não é primo")