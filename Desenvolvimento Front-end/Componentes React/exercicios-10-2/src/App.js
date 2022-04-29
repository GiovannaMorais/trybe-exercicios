import React from 'react';
import './App.css';
// import Pokemon from './Pokemon.js';
import pokemons from './data.js';
import Pokedex from './Pokedex.js';

class App extends React.Component {
render() {
  return (
    <div>
      <h1> Pokedex </h1>
      <p> <Pokedex pokemons={pokemons} /></p>
      
    </div>
  );
}

}

export default App;