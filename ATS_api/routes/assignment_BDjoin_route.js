var express=require('express');
var router=express.Router();
var assignmentBDjoin=require('../models/assignment_model');

router.get('/',function(req,res,next){
    assignmentBDjoin.GetBDnmByID(function(err,rows){
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