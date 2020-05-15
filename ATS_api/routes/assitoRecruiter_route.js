var express=require('express');
var router=express.Router();
var AssiToRecruiter=require('../models/assignment_model');

router.get('/:id',function(req,res,next){
    AssiToRecruiter.GetAssignAssignment(req.params.id,function(err,rows){
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