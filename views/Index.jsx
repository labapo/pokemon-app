import React, { Component } from 'react'

const headerStyle = {
  color: 'rgb(240, 240, 240)',
  backgroundColor: 'black'
}

export default class Index extends Component {
  
  render() {
    console.log(this.props.pokemon)
    const pokemon = this.props.pokemon
    return (
      <div>
        <h1 style={headerStyle}>See All The Pokemons!</h1>
      <ul>
        <nav>
          <a href="pokemon/new">
            <button>Add Pokemon</button>
            </a>
        </nav>
              {pokemon.map((pokemon, id) =>{
                  return (
                      <li key={id}><a href={`/pokemon/${id}`}>
                      {pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)} </a></li>
                  )
              })
          }
      </ul>
      </div>
    )
  }
}

module.exports = Index;
