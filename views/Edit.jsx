import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    return (
      <div>
        <h1>Edit Page</h1>
        <form action={`/fruits/${this.props.pokemon._id}?_method=PUT`} method="POST">
        Name: <input type="text" name='name' value={this.props.pokemon.name} /><br />
        Image: <input type="text" name="img" value={this.props.pokemon.image} /> <br />
        <input type="submit" value="Submit Changes" />
        </form>
      </div>
    )
  }
}

module.exports= Edit;