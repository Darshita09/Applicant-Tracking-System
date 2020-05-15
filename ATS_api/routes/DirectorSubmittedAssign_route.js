var express=require('express');
var router=express.Router();
var DirectorSubmittedAssign=require('../models/assignment_model');

router.get('/',function(req,res,next){
    DirectorSubmittedAssign.GetDirectorSubmittedAssign(function(err,rows){
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