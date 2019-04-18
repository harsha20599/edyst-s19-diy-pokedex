# Pokedex
This repository contains pokemon API service. Where, the GET request on `/api/pokemon/:id` on port `8006` returns the pokemon details based on the id.
  
  On running this API call,
  ```url
    localhost:8006/api/pokemon/25
  ```
  returns this data 
  ```javascript
  {
    "pokemon": {
        "id": "25",
        "name": "pikachu",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    }
  }
  ```

- The compete pokemon data is stored in `data.json` file
---

> Prerequisites

Make sure you have these installed in your system
- [NodeJS](https://nodjs.org/download)
- Npm

# How to setup and run

  1. Download or clone the project into your local system
  2. Open `backend/` and run this command to install the dependencies
  ```shell
  $npm install
  ```
  3. Run app.js using node to create a local server.
  ```shell
  // backend
  $node app.js
  ```
  This will create a server on port `8006`
  
  4. Make API calls and enjoy.
  ```
    //URL : localhost:8006/api/pokemon/3
  ```
---

> Error Handling
- There exists 199 valid pokemon ID's. Upon more, it returns 404 status with error object.
- It handles the invalid API calls by sending 404 status response to the client.
- An error object is returned to the client for an invalid API call.

---

## Authors
[harsha20599](https://github.com/harsha20599)
