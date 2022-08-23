const express = require('express')
const router = express.Router()

// axios library for calling API's
const axios = require('axios');


// loads environment variables from a .env file
require('dotenv').config();
const API_KEY = process.env.API_KEY;

console.log(API_KEY);

router.get('/', function(req, res) {
    const queryOptions = {
        params: {
            apikey: API_KEY,
        }
    }

    axios.get('http://www.thecocktaildb.com/api/json', queryOptions)
    .then((response) => {
        const context = {drinkData: response.data}
        res.render('index.js', context)
    })
    .catch((err)=> {
        console.log(err.message)
    })
    
    //res.send('Working');   
});

module.exports = router;