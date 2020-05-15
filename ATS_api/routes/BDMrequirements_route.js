var express=require('express');
var router=express.Router();
var BDMreq=require('../models/jobReq_model');

router.get('/',function(req,res,next){
    BDMreq.GetBDMREQ(function(err,rows){
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