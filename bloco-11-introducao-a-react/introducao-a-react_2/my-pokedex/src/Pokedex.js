import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokedex } = this.props;
    return (
    <div className="pokedex">
      {pokedex.map((pokemon) => (
        <Pokemon pokemon={ pokemon } key={ pokemon.name } />
      ))}
    </div>)
  }
}

export default Pokedex;