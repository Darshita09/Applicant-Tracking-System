var express=require('express');
var router=express.Router();
var RecCandiNM=require('../models/candidate_model');

router.get('/:id',function(req,res,next){
    RecCandiNM.GetRecCandidateNM(req.params.id,function(err,rows){
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