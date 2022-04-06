// const newEmployees = () => {
//     const employees = {
//       id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

const cadastro = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (person) => {
  const employees = {
      id1: person ('Pedro Guerra'),
      id2: person ('Luiza Drumond'),
      id3: person ('Carla Paiva'),

  };
  return employees
};

console.log(newEmployees(cadastro));

const number = (myNumber,sort)=> myNumber === sort;

const loteria  = (myNumber,callback) => {
    const sort = Math.floor((Math.random() * 5) + 1);
    return callback(myNumber,sort) ? 'Lucky day, you won!' : 'Try Again!';
};
console.log(loteria(4, number));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const correct = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return 0.5;
};

const points = (rightAnswer,studentAnswer,func) => {
    let total = 0;
    for (let index = 0; index < rightAnswer.length; index+=1) {
        const element = func(rightAnswer[index],studentAnswer[index]);
        total += element;
        
    }
    return `Resultado final: ${total} pontos`
}
console.log(points(RIGHT_ANSWERS, STUDENT_ANSWERS, correct));