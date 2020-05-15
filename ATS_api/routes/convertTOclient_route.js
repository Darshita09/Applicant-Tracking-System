var express=require('express');
var router=express.Router();
var ConvertTOClient=require('../models/leadCo_model');

router.put('/:id',function(req,res,next){
    ConvertTOClient.ConvertLeadTOClient(req.params.id,function(err,rows){
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