
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

  const estacoes = {winter,spring,summer,autumn} = yearSeasons
const mesesAno = [...winter,...spring,...summer,...autumn];

console.log( estacoes);
console.log( mesesAno);