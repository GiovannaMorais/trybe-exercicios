const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
 return names.reduce((acc,curr) => 
    acc + curr.split('').reduce((add,letter)=>{
    if(letter === 'a' || letter === 'A') return add + 1;
            return add
        
    },0),0);
  }
console.log(containsA());