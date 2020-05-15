var express=require('express');
var router=express.Router();
var directorclientCOINDESC=require('../models/leadCo_model');

router.get('/',function(req,res,next){
    directorclientCOINDESC.GetDirectorClientCOINDESC(function(err,rows){
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