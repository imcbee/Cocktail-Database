// Server Config
const express = require('express');
const app = express();
const PORT = 8080;
const methodOverride = require(`method-override`);

// Middleware
app.set(`view engine`, `ejs`);
app.use('/public', express.static(__dirname + '/public'));
app.use(methodOverride(`_method`));


const cocktailController = require(`./controllers/cocktail_controller.js`);

// Controllers
app.use(`/cocktails`, cocktailController);

// Views
app.get(`/`, (req, res) => {
    res.redirect(`/cocktails`);
})


app.listen(PORT, () => console.log(`Server listening at port: ${PORT}`));

module.exports = app;