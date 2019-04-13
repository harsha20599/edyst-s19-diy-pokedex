// importing the express library to serve the API's
const express = require('express');
// using request library to fetch the information from the pokeapi
const request = require('request');
const app = express();

// GET /api/pokemon/:id
app.get('/api/pokemon/:id',(req,res)=>{

  request.get({ url: `https://pokeapi.co/api/v2/pokemon/${req.params.id}` },      
    function(error, response, body) { 
      if (!error && response.statusCode == 200) { 
        body = JSON.parse(body);
        // creating variable to return to the API call
        const data = {
          "pokemon" : {
            id : req.params.id,
            name : body.name,
            sprite : body.sprites.front_default
          }
        }
        // returning the data
        res.json(data); 
      } 
    }
  ); 

})


app.listen(8006, () => {console.log('listening on port 8006')});