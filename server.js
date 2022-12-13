/////////////////////////// Set up server ///////////////////////////////
const express = require('express');
const app = express();

///////Other requires
const pokemon = require('./models/pokemon');


///MiddleWare
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());




////////////////////////// Routes /////////////////////////////////
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon});
})

//show route
app.get('/pokemon/:id', (req, res) => {
    //res.send(req.params.id);
    res.render('Show', {
        pokemon: pokemon[req.params.id] //1st pokemon is what you're going to call it, 2nd is for a single pokemon
        //use brackets to indicate the index so that it's dynamic
    })
})







//Set up port//
app.listen(3000, function () {
    console.log('Listening on port 3000')
})