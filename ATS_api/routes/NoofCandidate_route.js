var express=require('express');
var router=express.Router();
var noofcandidate=require('../models/candidate_model');

router.get('/:id/:job_type',function(req,res,next){
    noofcandidate.NoOFCandidate(req.params.id,req.params.job_type,function(err,rows){
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