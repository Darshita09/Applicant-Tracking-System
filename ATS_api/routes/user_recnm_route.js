var express=require('express');
var router=express.Router();
var userRecnm=require('../models/ats_user_model');

router.get('/',function(req,res,next){
    userRecnm.GetRecnmById(function(err,rows){
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