var express=require('express');
var router=express.Router();
var jobreqjoin=require('../models/jobReq_model');

router.get('/',function(req,res,next){
    jobreqjoin.GetConmByID(function(err,rows){
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