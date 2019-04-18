// importing the express library to serve the API's
const express = require('express');
// using request library to fetch the information from the pokeapi
const app = express();
// importing data.json file to get the pokemon details
const pokemons = require('./data.json');

// GET /api/pokemon/:id
app.get('/api/pokemon/:id',(req,res)=>{

  // Handling invalid ID
  if(! pokemons[req.params.id]){
    res.status(404).send({error : "Pokemon not found"});
    return;
  }

  // Pokemon data to be returned to the client
  var result = {
    "pokemon" : {
      id : req.params.id,
      name : pokemons[req.params.id].name,
      sprite : pokemons[req.params.id].sprite
    }
  }

  res.send(result);
})

// Handling invalid API call
app.get('/*', (req,res)=>{
  res.status(404).send({error : "Sorry, requested URL not found on this server"});
})

// Server to listen at port 8006
app.listen(8006, () => {console.log('listening on port 8006')});