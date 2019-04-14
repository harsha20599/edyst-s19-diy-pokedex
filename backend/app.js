// importing the express library to serve the API's
const express = require('express');
// using request library to fetch the information from the pokeapi
const app = express();
// importing data.json file to get the pokemon details
const pokemons = require('./data.json');

// GET /api/pokemon/:id
app.get('/api/pokemon/:id',(req,res)=>{

  var result = {
    "pokemon" : {
      id : req.params.id,
      name : pokemons[req.params.id].name,
      sprite : pokemons[req.params.id].sprite
    }
  }

  res.send(result);
})


app.listen(8006, () => {console.log('listening on port 8006')});