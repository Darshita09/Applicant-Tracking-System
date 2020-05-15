var express=require('express');
var router=express.Router();
var UserLogin=require('../models/ats_user_model');

router.post('/',function(req,res,next){
    UserLogin.GetUserByLogin(req.body,function(err,rows){
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