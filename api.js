const express = require('express');
const router = express.Router();

//getlist
router.get('/platform',function(req,res){
    res.send({type:'GET'});
});

//newuser
router.post('/platform',function(req,res){
    console.log(req.body);
    res.send({
        type:'POST',
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
        date:req.body.date,
        products:req.body.products,
        budget:req.body.budget

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