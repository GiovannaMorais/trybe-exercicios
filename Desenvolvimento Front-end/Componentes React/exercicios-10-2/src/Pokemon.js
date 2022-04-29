import React from 'react';
// import pokemons from './data.js';

class Pokemon extends React.Component {
    render() {
        const {pokemons: {name,type,averageWeight,image}} = this.props
    
    return(
        <div className="pokemon">
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    )
    }
}
export default Pokemon;