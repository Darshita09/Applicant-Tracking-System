var express=require('express');
var router=express.Router();
var assignmentjobreqjoin=require('../models/assignment_model');

router.get('/',function(req,res,next){
    assignmentjobreqjoin.GetJobReqById(function(err,rows){
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