const express = require('express');

const bodyParser = require('body-parser')

const mongoose = require('mongoose');

const app = express();

//connecting to mongodb
mongoose.connect('mongodb://localhost/schema')
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api',require('./api.js'));


app.listen(process.env.port|| 8080,function(){
console.log('running');

});