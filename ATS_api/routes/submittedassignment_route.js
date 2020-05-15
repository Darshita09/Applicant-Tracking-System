var express=require('express');
var router=express.Router();
var SubmittedAssignment=require('../models/assignment_model');

router.get('/:id',function(req,res,next){
    SubmittedAssignment.GetSubmittedAssignment(req.params.id,function(err,rows){
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