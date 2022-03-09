//Exercicio 1

function palindromo (palavra){
    let contrario = palavra.split('').reverse().join('');
    if(contrario === palavra){
        return true;
    }else{
        return false;
    }
}
console.log(palindromo("arara"));
console.log(palindromo("desenvolvimento"));

//Exercicio 2

function indiceMaior (numeros){
    let maior = numeros[0];
    for(let index in numeros){
        if (numeros[maior] < numeros[index]){
            maior = index;
        }
    }
    return maior
}
console.log(indiceMaior( [2, 3, 6, 7, 10, 1] ));

//Exercicio 3

function indiceMenor (numbers){
    let menor = numbers[0];
    for(let index in numbers){
        if (numbers[menor] > numbers[index]){
            menor = index;
        }
    }
    return menor
}
console.log(indiceMenor( [2, 4, 6, 7, 10, 0, -3] ));

//Exercicio 4

function nomes(names){
    let maiorWord = names[0];
    for(let word in names){
        if (names[maiorWord.length] < names[word.length]){
            maiorWord=names[word]
        } 
    }
    return maiorWord;

}console.log(nomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//Exercicio 5

function inteiros (number){
    let contador =number[0];
    for(let key in number){
        if (number[key.length] === number[contador.length]){
            contador=number[key]
        }
    }return contador
}console.log(inteiros([2, 3, 2, 5, 8, 2, 3]));

//Exercicio 6

function numNatural(positivo){
    let soma = 0;
    for(let sum = 1; sum <= positivo; sum += 1){
        soma= soma + sum;
    }
    return soma;
}
console.log(numNatural(5));

//Exercicio 7

function verificarPalavra (palavras,letras){
    let verificaçao;
    palavras = palavras.split('').reverse().join('');
    letras = letras.split('').reverse().join('');
    
    for(let index = 0;index < letras.length; index +=1){
        if (palavras[index] !== letras[index]){
            verificaçao = false;
        }else{
            verificaçao=true;
        }
    }return verificaçao;

}console.log(verificarPalavra('trybe', 'be'));
console.log(verificarPalavra('joaofernando', 'fernan'));

