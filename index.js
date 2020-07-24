const express = require('express');

const app = express();


app.get('/',function(req,res){
    console.log('GET request')
    res.send({name:});
});




app.listen(process.env.port|| 4000,function(){
console.log('running');

});