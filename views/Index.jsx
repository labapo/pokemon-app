import React, { Component } from 'react'

const headerStyle = {
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
              {pokemon.map((pokemon, id) =>{
                  return (
                      <li><a href={`/pokemon/${id}`}>
                      {pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)} </a></li>
                  )
              })
          }
      </ul>
      </div>
    )
  }
}
