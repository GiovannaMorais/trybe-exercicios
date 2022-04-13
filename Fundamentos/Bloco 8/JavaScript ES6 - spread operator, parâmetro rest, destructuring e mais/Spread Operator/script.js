// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'abacaxi', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'aveia', 'granola'];

const fruitSalad = (fruit, additional) => {
  const saladFruitAdd = [... fruit,...additional];
  return saladFruitAdd
};

console.log(fruitSalad(specialFruit, additionalItens));