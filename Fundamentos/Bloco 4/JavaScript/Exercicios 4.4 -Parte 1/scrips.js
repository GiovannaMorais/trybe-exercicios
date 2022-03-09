 //Exercicio 1 //Exercicio 2

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
console.log('Bem-vinda, ' + info.personagem)
console.log(info['recorrente'])

//Exercicio 3 

for(person in info){
    console.log(person)
}

 //Exercicio 4
 
 for(person in info){
    console.log(info[person])
}
 
//Exercicio 5

let info2 = {
    personagem: 'Margarida e Tio Patinhas',
    origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donalde e O último MacPatinhas',
    recorrente: 'Ambos recorrentes',
}
  for(key in info2){
      console.log(key+':'+info2[key]);
  }

  //Exercicio 6 //Exercicio 7

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',},
       { titulo1: 'Harry Potter e o Prisioneiro de Azkaban',
        autor1: 'JK Rowling',
        editora1: 'Rocco',
      },
    ],
  };
  console.log("O livro favorito de "+leitor.nome+" "+leitor.sobrenome+" se chama "+ leitor.livrosFavoritos[0].titulo);

  //Exercicio 8

  console.log(leitor.nome,leitor.livrosFavoritos[1]);
  console.log(leitor['nome'] +" tem "+leitor.livrosFavoritos.length +" livros favoritos" )
 

