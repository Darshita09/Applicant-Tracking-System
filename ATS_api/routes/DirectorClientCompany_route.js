var express=require('express');
var router=express.Router();
var directorclientCO=require('../models/leadCo_model');

router.get('/',function(req,res,next){
    directorclientCO.GetDirectorClientCompany(function(err,rows){
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