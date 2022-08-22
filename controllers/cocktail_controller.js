const express = require('express')
const router = express.Router()

// axios library for calling API's
const axios = require('axios');
const { response } = require('../server');

// loads environment variables from a .env file
require('dotenv').config();

router.get('/', function(req, res) {
    axios.get('www.thecocktaildb.com/api/json')
    .then((response) => {
        const context = {drinkData: response.data}
        res.render('index.js', context)
    })
    .catch((err)=> {
        console.log(err)
    })
    
    //res.send('Working');   
});

module.exports = router ;