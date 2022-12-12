/////////////////////////// Set up server ///////////////////////////////
const express = require('express');
const app = express();



////////////////////////// Routes /////////////////////////////////
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})







//Set up port//
app.listen(3000, function () {
    console.log('Listening on port 3000')
})