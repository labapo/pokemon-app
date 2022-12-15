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
        <h1 style={headerStyle}> See all the Pokemon! </h1>
        <body>
          <nav>
            {" "}
            <a href="/pokemon/new"> Create a new Pokemon!</a>
          </nav>
          <ul>
            {pokemon.map((pokemon, i) => {
              return (
                <li key={i}>
                  <a href={`/pokemon/${pokemon.id}`} >
                    {/* {pokemon.name.charAt(0).toUpperCase()}
                    {pokemon.name.slice(1)} */}
                    {pokemon.name}
                  </a>

                </li>
              );
            })}
          </ul>
        </body>
      </div>
    );
  }
}

module.exports = Index; 
