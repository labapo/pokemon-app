import React, { Component } from 'react'

const headerStyle = {
  color: 'rgb(240, 240, 240)'
}

const bodyStyle = {
  borderStyle: "ridge", 
  borderWidth: "10px",
  borderRadius: '10px',
  fontSize: '30px',
  color: "white",
  backgroundColor: '#6F7A90',
  textAlign: "left",
  dropShadow: '16px 16px 10px black',
};

const imgBorder = {
  border: '3px solid black',
}

export default class Index extends Component {
  
  render() {
    console.log(this.props.pokemon)
    const pokemon = this.props.pokemon
    return (
      <div>
        <h1 style={headerStyle}> See all the Pokemon! </h1>
        <body style={bodyStyle}>
          <nav>
            {" "}
            <a href="/pokemon/new"> Create a new Pokemon!</a>
          </nav>
          <ul>
            {pokemon.map((pokemon, i) => {
              return (
                <li key={i}>
                  <a href={`/pokemon/${pokemon.id}`} >
                    {pokemon.name.charAt(0).toUpperCase()}
                    {pokemon.name.slice(1)}</a>
                  <form action = 
                  {`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                    </form>
                  <form action={`/pokemon/${pokemon._id}/edit`}>
                    <input type="submit" value="Edit" />
                  </form>

                  

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
