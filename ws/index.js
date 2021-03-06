const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./src/services/database');
const app = express();

const routes = require('./src/routes/filmes.routes');


app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);


app.listen(3000, () => {
    console.log('SERVER ONzera');
});
