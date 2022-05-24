const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//initialization
const app = express();

//database connection
const db = require('./database/conexion');

//settings
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//routes
app.use('/posts', require('./routes/posts'));

//cron services

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'))
});