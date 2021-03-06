import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: {name, type, averageWeight, image} } = this.props;
    return (
    <div className="poke-card">
      <img src={ image }></img>
      <div className="pokemon-info">
        <h4>{ name }</h4>
        <p>{ type }</p>
        <p>Average weight: { averageWeight.value }{ averageWeight.measurementUnit }</p>
      </div>    
    </div>)
  }
}

export default Pokemon;