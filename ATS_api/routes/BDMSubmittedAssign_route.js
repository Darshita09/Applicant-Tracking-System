var express=require('express');
var router=express.Router();
var BDMSubmittedAssign=require('../models/assignment_model');

router.get('/',function(req,res,next){
    BDMSubmittedAssign.GetBDMSubmittedAssign(function(err,rows){
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