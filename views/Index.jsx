import React from 'react';
import { render } from 'react-dom';

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

function Index ({pokemon}) {

    return (
    <div><h1>See All The Pokemons!</h1>
    <ul>
            {pokemon.map((pokemon, i) =>{
                return (
                    <li><a href={`/pokemon/${i}`}>
                    {pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)} </a></li>
                )
            })
        }
    </ul>
    </div>
  )
}

export default Index;

