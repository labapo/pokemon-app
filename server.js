/////////////////////////// Set up server ///////////////////////////////
const express = require('express');
const app = express();

///////Other requires
const pokemon = require('./models/pokemon');



////////////////////////// Routes /////////////////////////////////
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon);
})







//Set up port//
app.listen(3000, function () {
    console.log('Listening on port 3000')
})