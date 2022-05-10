import React from 'react';
import './App.css';
import Pokemon from './Pokemon.js';
import pokemons from './data.js';
import './index.css';
// import Pokedex from './Pokedex.js';

class App extends React.Component {
render() {
  return (
    <div >
      <h1> Pokedex </h1>
      <p className ='pokedex' >{pokemons.map(poke => <Pokemon key={poke.id} pokemons={poke} />)}
      {/* <p> <Pokedex pokemons={pokemons} /></p> */}
    </p>
    </div>
  );
}

}

export default App;