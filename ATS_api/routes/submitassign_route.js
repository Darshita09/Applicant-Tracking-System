var express=require('express');
var router=express.Router();
var SubmitAssign=require('../models/assignment_model');

router.put('/:id',function(req,res,next){
    SubmitAssign.submitAssignment(req.params.id,function(err,rows){
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