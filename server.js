const express = require('express');
//const morgan = require('morgan');
const apiRouter = require('./routes/index');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: GET, POST, DELETE");
    next();
})

//middleware
//app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//primera ruta, desde este se despiegan las otras, /api/usuario
//api/about, api/register
app.use('/api', apiRouter);


//Servidor 
app.set('PORT', 3000)

app.listen(app.get('PORT'), () => {
  console.log(`Running on http://localhost:${app.get('PORT')}`);
});

module.exports = app;
