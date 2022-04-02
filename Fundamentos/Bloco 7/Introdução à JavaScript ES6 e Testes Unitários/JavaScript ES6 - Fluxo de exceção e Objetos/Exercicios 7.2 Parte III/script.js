const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//   const newTurno = 'turno';
//   const turno = 'noite';
//   lesson2[newTurno] = turno;

//   console.log(lesson2);

const newTurno = (obj, key, value) => {
  obj[key] = value;
};

newTurno(lesson2, "turno", "noite");
console.log(lesson2);
//////////////////////////////////////////////////////////

const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson3));

//////////////////////////////////////////////////////////

const lengthObject = (object) => Object.keys(object).length;
console.log(lengthObject(lesson3));

//////////////////////////////////////////////////////////

const valueList = (object) => Object.values(object);
console.log(valueList(lesson3));

//////////////////////////////////////////////////////////

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

//////////////////////////////////////////////////////////

const totalEstudantes = (object) => {
  let total = 0;
  const keys = Object.keys(object);
  for (let index in keys) {
    total += object[keys[index]].numeroEstudantes;
  }
  return total;
};
console.log(totalEstudantes(allLessons));

//////////////////////////////////////////////////////////

const valueKeys = (object, posiçao) => Object.values(object)[posiçao];
console.log(valueKeys(lesson1, 0));
// Output: 'Matématica'

//////////////////////////////////////////////////////////

const verifyPair = (object, keys, value) => {
  const entries = Object.entries(object);
  let result = false;
  for (let index in entries) {
    if (entries[index][0] === keys && entries[index][1] === value) return true;
  }
  return false;
};
console.log(verifyPair(lesson3, "turno", "noite"));
// Output: true,
console.log(verifyPair(lesson3, "materia", "Maria Clara"));
// Output: false


//////////////////////////////////////////////////////////

const watchClassMath = (object) =>{
    let total = 0;
    const array = Object.keys(object);
    for(let index in array){
        if(object[array[index]].materia ===  'Matemática'){
            total += object[array[index]].numeroEstudantes
        }
    }
    return total
}
console.log(watchClassMath(allLessons));


//////////////////////////////////////////////////////////

const returnObject =(object,name)=>{
const allLessons = [];
let allStudent = 0;

const array = Object.values(object);
for (let index in array){
    if(array[index].professor === name){
        allLessons.push(array[index].materia)
        allStudent += array[index].numeroEstudantes;
    }
}
return {lessons: allLessons, estudantes: allStudent}
}
const relatorio = (allLessons,name)=> {
    const relatorios = {};
    relatorios.professor = name;
    Object.assign(relatorios, returnObject(allLessons,name));
    return relatorios;
}
console.log(relatorio(allLessons, 'Maria Clara'));