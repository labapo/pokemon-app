import React from 'react';
import { render } from 'react-dom';

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

function Index ({pokemon}) {

    return (
    <div><h1>Gotta Catch 'Em All</h1>
        <h2>Pokemon Name: {pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)} </h2>
        <img src={`${pokemon.img}.jpg`} alt={`${pokemon.name}`} />
        <br />
        <a href="/pokemon">Back</a>
    </div>
  )
}

export default Index;

