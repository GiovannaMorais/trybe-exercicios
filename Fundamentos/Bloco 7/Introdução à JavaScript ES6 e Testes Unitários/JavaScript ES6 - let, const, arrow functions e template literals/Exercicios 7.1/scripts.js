const array = ['JavaScript', 'CSS' ,'HTML','ES6','React'];
function substituirString(string){
    const palavra = word => (
        `Tryber ${word} aqui!`
    )
    let newFrase= `${palavra(string)}`
newFrase = `${newFrase} Minhas cinco principais habilidades são:`;

array.forEach((skill) => 
newFrase = `${newFrase} 
- ${skill}`);

newFrase = `${newFrase} 

#goTrybe`
  return newFrase
}
console.log(substituirString('Giovanna'))