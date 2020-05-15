var express=require('express');
var router=express.Router();
var submissionconmjoin=require('../models/submission_model');

router.get('/',function(req,res,next){
    submissionconmjoin.GetAllJoin(function(err,rows){
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