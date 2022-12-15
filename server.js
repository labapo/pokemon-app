/////////////////////////// Set up server ///////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require('express');
const app = express();
const mongoose = require("mongoose");

///////Other requires
//const pokemon = require('./models/pokemon');
const Pokemon = require('./models/pokemon');
///Database connections
const MONGO_URI = process.env.MONGO_URI;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};// get rid of warnings

/// Establish connection with mongo
// Establish Connection
//mongoose.connect(MONGO_URI, CONFIG);

//CONNECT TO MONGOOSE / REMOVE DEPRICATION WARNINGS
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));
///MiddleWare
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



////////////////middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));//makes sure that you can get inside of the object and so that its not undefined


////////////////////////// Routes /////////////////////////////////
// app.get('/', (req, res) => {
//     res.send('Welcome to the Pokemon App!');
// })

//index
app.get('/pokemon', (req, res) => {
    //find all pokemon using the find method.
    //Pokemon is the name of the model
    //empty curly will bring all of the documents
    Pokemon.find({}, (error, allPokemon) =>{
        res.render('Index', {pokemon: allPokemon})
    })
    //res.render('Index', {pokemon: Pokemon});
});

//new
app.get('/pokemon/new', (req, res) =>{// get request because you're getting the form
    res.render('New')
});

//post route = create
app.post('/pokemon', (req, res) => {
    //create new pokemon
    //req body is coming from from 
    Pokemon.create(req.body, (error, createdPokemon)=> {
        res.redirect('/pokemon')
    });
    });

//Show - individual pokemon
app.get('/pokemon/:id', (req, res) => {
    //res.send(req.params.id);
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('Show', {pokemon: foundPokemon});
    });
    });

//Set up port//
app.listen(3000, function () {
    console.log('Listening on port 3000')
})