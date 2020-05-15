var express=require('express');
var router=express.Router();
var candidateStatus=require('../models/candidate_model');

router.get('/:id',function(req,res,next){
    candidateStatus.GetcandidateBystatus(req.params.id,function(err,rows){
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