var express=require('express');
var router=express.Router();
var candidate_co_recnmjoin=require('../models/candidate_model');

router.get('/',function(req,res,next){
    candidate_co_recnmjoin.GetAllConm(function(err,rows){
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