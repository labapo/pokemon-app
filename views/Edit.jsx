import React, { Component } from 'react'
const bodyStyle = {
    borderStyle: "ridge", 
    borderWidth: "10px",
    borderRadius: '10px',
    fontSize: '30px',
    color: "white",
    backgroundColor: '#6F7A90',
    textAlign: "center",
    dropShadow: '16px 16px 10px black',
  };

  const imgBorder = {
    border: '3px solid black',
  }

export default class Edit extends Component {
  render() {
    const {pokemon} = this.props;
    return (
      <div>
        <body style={bodyStyle}>
        <h1>Edit Pokemon</h1>
        <form action={`/pokemon/${pokemon._id}?_method=PUT`} method="POST">
        Name: <input type="text" name='name' defaultValue={pokemon.name} /><br />
        Image: <input type="text" name="img" defaultValue={pokemon.img} /> <br />
        <input type="submit" value="Submit Changes" />
        </form>
        </body>
      </div>
    )
  }
}

module.exports= Edit;