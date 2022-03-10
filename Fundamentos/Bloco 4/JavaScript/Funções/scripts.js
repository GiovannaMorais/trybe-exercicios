//Exercicio 1

function soma (a,b){
return(a + b);

}
console.log(soma(10,6))

function subtraçao(a,b){
    return(a - b);
    
}
console.log(subtraçao(10,6))

    
function multiplicaçao (a,b){
    return( a * b);
        
}
console.log(multiplicaçao(10,6))
    
function divisao (a,b){
    return(a / b);
            
}console.log(divisao(10,6))
        
                
function resto (a,b){
    return(a % b);
                
 }console.log(resto(10,6))
            
//Exercicio 2

function maiorNum (primeiroNum, segundoNum){
    if (primeiroNum > segundoNum){
        return primeiroNum  
    }else{
        return segundoNum
    }
}
console.log (maiorNum(5,10));

//Exercicio 3

function bigNumber (number1,number2,number3){
    if (number1 > number2 && number1 > number3){
        return number1
    }
    else if (number2 > number1 && number2 > number3){
        return number2
    }else{
        return number3
    }
}console.log(bigNumber(3,2,1));

//Exercicio 4

function positiveNegative(number){
    if (number > 0){
        return "positive"
    }else if (number < 0){
        return "negative"
    }else{
        return 0
    }
}console.log(positiveNegative(4));


//Exercicio 5

function triangulo(angulo1,angulo2,angulo3){
    if(angulo1 ==60 && angulo2 == 40 && angulo3==80){
        return true
    }else if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
        return "ERROR!!";
    }else{
        return false;
    }
}
console.log(triangulo(60,40,80));







