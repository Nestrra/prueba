const express = require('express');

const morgan = require('morgan')
const router = require('./src/routes/user.js');
const app = express();


app.use(morgan('dev'))
app.use(express.json());

app.use('/newUser', router);



module.exports = app;
