const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// const todos = [...palio,...shelbyCobra,...chiron]
// escreva toObject abaixo

const toObject = ([name,marca,ano]) => ({name,marca,ano})
    
console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));