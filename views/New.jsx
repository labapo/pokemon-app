import React from 'react'

function New() {
  return (
    <div>
        <h1>Create New Pokemon</h1>
        <form action="/pokemon" method="post">
        Name: <input type="text" name="name" /><br />
        Image URL: <input type="text" name="img" id="" /><br />
        <input type="submit" value="Create Pokemon" />
        <a href="/pokemon">Cancel</a>
        </form>
    </div>
  )
}

export default New;