var express=require('express');
var router=express.Router();
var candiRejectFinalstatus=require('../models/candidate_model');

router.put('/:id',function(req,res,next){
    candiRejectFinalstatus.SendCandiRejectFinalStatus(req.params.id,function(err,rows){
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