const express = require('express')
const router = express.Router()

// axios library for calling API's
const axios = require('axios');

// loads environment variables from a .env file
require('dotenv').config();

router.get('/', function(req, res) {
    res.send('Working');   
});

module.exports = router ;