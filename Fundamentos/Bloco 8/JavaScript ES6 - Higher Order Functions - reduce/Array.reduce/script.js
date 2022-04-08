const numbers = [50, 85, -30, 3, 15];
// let maior = numbers[0]

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     if(element > maior){
//         maior = element
//     }
   
// } 
// console.log(maior) 

const maior = (maiorNumero, number)=> ((maiorNumero > number)? maiorNumero : number );
const bigger = numbers.reduce(maior,0);
console.log(bigger)

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const par = (number)=> number % 2 === 0;
// const sum = (result,number) => result + number

// const parSum = (array) => array.filter(par).reduce(sum);

// console.log(parSum(numbers2));

const parSum = (result,number) => (
    (number % 2 === 0) ? result + number : result
)
const sum = (array) => array.reduce(parSum,0);
console.log(sum(numbers2));


const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

  const getBestClass =( acc,materia) => {
      if(acc.nota > materia.nota) return acc;
      return materia;
  }
  const better = (students) => students.map((student)=> ({
      name: student.nome,
      materia: student.materias.reduce(getBestClass).name}));

      console.log(better(estudantes));