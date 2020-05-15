var express=require('express');
var router=express.Router();
var BDMclientCO=require('../models/leadCo_model');

router.get('/:id',function(req,res,next){
    BDMclientCO.GetBDMClientCO(req.params.id,function(err,rows){
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