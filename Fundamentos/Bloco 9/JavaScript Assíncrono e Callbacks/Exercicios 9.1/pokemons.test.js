// EXERCISE 8

const pokemons = [
    {
      name: 'Bulbasaur',
      type: 'Grass',
      ability: 'Razor Leaf',
    },
    {
      name: 'Charmander',
      type: 'Fire',
      ability: 'Ember',
    },
    {
      name: 'Squirtle',
      type: 'Water',
      ability: 'Water Gun',
    },
  ];
  
  function getPokemonDetails(filter, callback) {
    setTimeout(() => {
      if (pokemons.find(filter) === undefined) {
        return callback(new Error('Não temos esse pokémon para você :('), null);
      }
      const pokemon = pokemons.find(filter);
  
      const { name, type, ability } = pokemon;
  
      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
      callback(null, messageFromProfOak);
    }, 2000);
  }
  
  getPokemonDetails((filter) => filter.name === 'Squirtle',(callback) => (erro,acerto) => {
      if(erro){
        console.log(erro)
      }if(acerto){
          console.log(acerto);
      }
  }
  );
 /////////////////////////////////////////////////////////////////////////////////////////// 

// EXERCISE 9

// Verifique se a importação do arquivo correto está sendo feita.
// const { getPokemonDetails } = require('./get-pokemon-details');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const callback = (erro,acerto) => {
        expect(erro).toEqual(new Error('Não temos esse pokémon para você :('));
        done();
    }
    getPokemonDetails((pokemon) =>pokemon.name === 'Venusaur',callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const callback = (erro,acerto) => {
        expect(acerto).toBe('Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun')
    done();
    }
    getPokemonDetails((pokemon)=> pokemon.name === 'Squirtle',callback)
  });
});