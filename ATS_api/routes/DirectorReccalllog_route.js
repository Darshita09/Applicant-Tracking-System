var express=require('express');
var router=express.Router();
var directorreccalllog=require('../models/candidate_model');

router.get('/',function(req,res,next){
    directorreccalllog.GetDirectorRecruiterCallLog(function(err,rows){
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