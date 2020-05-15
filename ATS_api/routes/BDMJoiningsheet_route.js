var express=require('express');
var router=express.Router();
var BDMjoinsheet=require('../models/joiningsheet_model');

router.get('/',function(req,res,next){
    BDMjoinsheet.GetBDMJoiningSheet(function(err,rows){
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