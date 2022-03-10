//Exercicio 1

let a = 10;
let b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Exercicio 2 

const numberA = 5;
const numberB = 10;

if(numberA > numberB){
    console.log(numberA);
}
else{
    console.log (numberB);
}

//Exercicio 3

const first = 3;
const second = 2;
const third = 1;

if (first > second && first > third){
    console.log (first);
}
else if (second > first && second > third){
    console.log (second);
}
else {
    console.log (third);
}

//Exercicio 4

const another = 4;
if(another > 0){
    console.log ("positive");
}
else if (another < 0){
    console.log ("negative");
}
else{
    console.log("zero");
}

//Exercicio 5

const base = 60;
const anguloFirst= 40;
const anguloSecond = 80;
  
if(base ==60 && anguloFirst ==40 && anguloSecond ==80){
    console.log(true);
}
else if (base < 0 ||anguloFirst < 0 || anguloSecond < 0){
    console.log("error!!");
}
else {
    console.log(false);
}


//Exercicio 6 

let chess = "Queen";

switch(chess.toLowerCase()){
   case "torre":
       console.log("frente e trás,direita e esquerda");
       break;
    case "bispo":
        console.log("diagonal");
        break;
    case "cavalo":
        console.log("movimenta em L");
        break;  
    case "queen":
        console.log("frente e trás,direita e esquerda,diagonal");
        break;
    default:
        console.log("ERRO");
            break;
}

//Exercicio 7

let porcentage = 86;

if(porcentage < 0 || porcentage > 100){
    console.log("Error");
}
else if(porcentage >= 90){
console.log("A");
}
else if(porcentage >= 80){
    console.log("B");
}
else if(porcentage >= 70){
    console.log("C");
}else if(porcentage >= 60){
    console.log("D");
}
else if(porcentage >= 50){
    console.log("E");
}
else if(porcentage < 50){
    console.log("F");
}
else{
    console.log("ERRO");
}

//Exercicio 8

const firstNumber = 1;
const secondNumber = 2;
const thirdNumber = 3;

if(firstNumber %2 ===0 || secondNumber %2 ===0 || thirdNumber %2 ===0){
    console.log(true);
}
else{
    console.log(false);
}
 
//Exercicio 9

const one = 4;
const two = 2;
const three = 8;

if(one %2 !==0 || two %2 !==0 || three %2 !==0){
    console.log(true);
}
else{
    console.log(false);
}

//Exercicio 10

const custoProduto = 2;
const valorProduto = 4;
const custoTotal = custoProduto + 0.2 //0.2 - SÃO OS 20% -IMPOSTO
const produto = custoTotal + valorProduto // se for abaixo de zero acabe o programa
const lucro = valorProduto - custoTotal

if(produto < 0){
    console.log(Error);
}else {
    console.log("Lucro Total: " + (lucro * 1000));
}

//Exercicio 11 

let aliquotaINSS;
let aliquotaIR;

let salarioBruto = 4000.00;

if(salarioBruto <= 1556.94 ){
    aliquotaINSS = salarioBruto * 0.08;
}else if (salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto * 0.09;
}else if (salarioBruto <= 5189.82){
    aliquotaINSS = salarioBruto * 0.11;
}else{
    aliquotaINSS = 570.88;
}

let salarioBase= salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98){
    aliquotaIR = 0
}else if (salarioBase <= 2826.65){
    aliquotaIR = (salarioBase * 0.075) - 142.80;
}else if (salarioBase <= 3751.05){
    aliquotaIR = (salarioBase * 0.15) - 354.80;
}else if(salarioBase <= 4664.68){
    aliquotaIR = (salarioBase * 0.225) - 636.13;
}else {
    aliquotaIR = (salarioBase *0.275) -869.36;
}
 
console.log("Salário Líquido: " + (salarioBase - aliquotaIR));