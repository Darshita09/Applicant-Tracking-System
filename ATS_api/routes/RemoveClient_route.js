var express=require('express');
var router=express.Router();
var RemoveFromclient=require('../models/leadCo_model');

router.put('/:id',function(req,res,next){
    RemoveFromclient.RemoveClient(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;