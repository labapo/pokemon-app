import React from 'react';
import { render } from 'react-dom';

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

function Show ({pokemon}) {

    return (
      <div>
      <html style={{height:'100%'}} />
        <body style={bodyStyle}>
      <h1>Gotta Catch 'Em All</h1>
        <h2>Gotta Catch: {pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)} </h2>
        <img style = {imgBorder} src={`${pokemon.img}.jpg`} alt={`${pokemon.name}`} />
        <br />
        <a href="/pokemon">Back</a>
        </body>
    </div>
  )
}

export default Show;

