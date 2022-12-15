import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        <h1>New Pokemon Form</h1>
        <form action="/pokemon" method="post">
          Name: <input type="text" name="name" /> <br />
          Image: <input type="text" name="img" /> <br />
          <input type="submit" value="Create Pokemon" />
          <a href="/pokemon">Cancel</a>
        </form>
      </div>
    )
  }
}
