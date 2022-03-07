//Exercicio 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index +=1){
    console.log(numbers[index]);
}

//Exercicio 2
let resultado =0;

for(let index = 0; index < numbers.length; index +=1){
    resultado += numbers[index];
  
} 
console.log("Resultado da soma: " + resultado); 

//Exercicio 3

let mediaAritmetica = 0;

for(let index = 0; index < numbers.length; index +=1){
    mediaAritmetica = resultado / numbers.length
}
console.log (mediaAritmetica);

//Exercicio 4

for(let index = 0; index < numbers.length; index +=1){
    mediaAritmetica = resultado / numbers.length
}
if(mediaAritmetica > 20){
    console.log ("valor maior que 20");
}else{
    console.log ("valor menor ou igual a 20");
}

// Exercicio 5 

let maiorNumber = numbers[0]

for(let index = 0; index < numbers.length; index +=1){
    if (numbers[index] > maiorNumber ){
        maiorNumber=numbers[index];
    }
}
console.log("Maior valor encontrado: " + maiorNumber);

//Exercicio 6
 
let impar = 0;

for(let index = 0; index < numbers.length; index +=1){
    
    if(numbers[index] %2 !== 0){
        impar += 1
     }
} 
     if(impar ===0){
     console.log("nenhum valor ímpar encontrado")
     }else {
         console.log("Números ímpares encontrados: " + impar);
     }

//Exercicio 7

let menorValor = numbers[0]

for(let index = 0; index < numbers.length; index +=1){
    if(numbers[index] < menorValor)
    menorValor= numbers[index];
}
console.log("Menor valor encontrado: " + menorValor);


//Exercicio 8

let numerais = [];
for(let index =1 ; index <= 25; index +=1){
    numerais.push(index);
}
console.log(numerais);

//Exercicios 9


for(let index =0 ; index < numerais.length; index +=1){
   console.log(numerais[index] /2 );
}

///BONUS///

//Exercicio 1

let numberss = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
for (let index = 1; index <numberss.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numberss[index] < numberss[secondIndex]) {
        let position = numberss[index];
        numberss[index] = numberss[secondIndex];
        numberss[secondIndex] = position;
      }
    }
  }
  console.log("Ordem Crescente: " + numberss);

  //Exercicios 2 

  for (let index = 1; index <numberss.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numberss[index] > numberss[secondIndex]) {
          let position = numberss[index];
          numberss[index] = numberss[secondIndex];
          numberss[secondIndex] = position;
        }
      }
    }
    console.log("Ordem Descrescente: " + numberss);

    //Exercicio 3

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let index = 0; index < numbers.length; index += 1) {
   if(index + 1 < numeros.length){
       novoArray.push (numeros[index] * numeros[index +1])
   } else{
       novoArray.push(numeros[index] * 2 );
   }
}
console.log(novoArray);