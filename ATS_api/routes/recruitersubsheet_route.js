var express=require('express');
var router=express.Router();
var RecruiterSubmissionsheet=require('../models/submission_model');

router.get('/:id',function(req,res,next){
    RecruiterSubmissionsheet.GetRecruiterSubmissionsheet(req.params.id,function(err,rows){
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