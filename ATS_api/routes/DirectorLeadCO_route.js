var express=require('express');
var router=express.Router();
var DirectorLeadCO=require('../models/leadCo_model');

router.get('/',function(req,res,next){
    DirectorLeadCO.GetDirectorLeadCO(function(err,rows){
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