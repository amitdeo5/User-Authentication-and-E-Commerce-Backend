const express = require('express');


const app = express();


app.use('/api',require('./api.js'));


app.listen(process.env.port|| 9000,function(){
console.log('running');

});