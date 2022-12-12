import React from 'react';
import { render } from 'react-dom';

function Index ({pokemon}) {

    return (
    <div><h1>See All The Pokemons!</h1>
    <ul>
            {pokemon.map((pokemon, i) =>{
                return (
                    <li>{pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)}</li>
                )
            })
        }
    </ul>
    </div>
  )
}

export default Index;

