// Exercicio 1

let player = {
    name:'Marta',
    lastName:'Silva',
    age: 34,
    medals:{
        golden:2,
        silver:3,
    },
    bestIntheWorld:[2006, 2007, 2008, 2009, 2010, 2018]
}

//Exercicio 2 

player ['fullName']= player['name'] + ' ' + player['lastName']

console.log(player['name'],player['lastName'],player['age'])
console.log('A jogadora '+  player.fullName + ' ' + 'tem' + ' ' + player.age +" "+"anos de idade"   ) ;


//Exercicio 3

console.log(player.bestIntheWorld);


//Exercicio 4

console.log ('A jogadora ' + player['fullName'] + ' ' + 'foi eleita a melhor do mundo por 6 vezes' + '(' + player.bestIntheWorld + ')')

//Exercicio 5

console.log(player['medals']);
console.log('A jogadora possui ' + player.medals.golden + ' ' + 'medalhas de ouro e'+ ' ' + player.medals.silver + ' ' + 'medalhas de prata.' );