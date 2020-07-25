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
    schema.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        schema.findOne({_id:req.params.id}).then(function(schema){
           res.send(schema);
        });
    });  
});


//del
router.delete('/platform/:id',function(req,res){
    schema.findByIdAndRemove({_id:req.params.id}).then(function(schema){
         res.send(schema);
    });
    
});

module.exports = router;