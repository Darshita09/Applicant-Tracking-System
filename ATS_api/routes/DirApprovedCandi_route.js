var express=require('express');
var router=express.Router();
var DirApprovedCandi=require('../models/candidate_model');

router.get('/',function(req,res,next){
    DirApprovedCandi.GetDirectorApprovedCandi(function(err,rows){
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