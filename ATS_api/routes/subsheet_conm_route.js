var express=require('express');
var router=express.Router();
var subsheetAllconm=require('../models/submission_model');

router.get('/',function(req,res,next){
    subsheetAllconm.GetAllConmByID(function(err,rows){
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