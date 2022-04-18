const sum = (...soma) => {
   return soma.reduce((acc,numero) => acc + numero)
}
setTimeout(() =>console.log(sum()),2000);

module.exports = sum;
