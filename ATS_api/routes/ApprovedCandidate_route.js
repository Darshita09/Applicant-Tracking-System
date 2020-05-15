var express=require('express');
var router=express.Router();
var ApprovedCandidate=require('../models/candidate_model');

router.get('/:id',function(req,res,next){
    ApprovedCandidate.GetApprovedCandidate(req.params.id,function(err,rows){
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