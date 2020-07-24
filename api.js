const express = require('express');
const router = express.Router();
const schema = require('./schema.js');

//getlist
router.get('/platform',function(req,res){
    res.send({type:'GET'});
});

//newuser
router.post('/platform',function(req,res){
    schema.create(req.body).then(function(schema){

        res.send(schema);

    });
    
});

//update 
router.put('/platform/:id',function(req,res){
    res.send({type:'PUT'});
});

//del
router.delete('/platform/:id',function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;