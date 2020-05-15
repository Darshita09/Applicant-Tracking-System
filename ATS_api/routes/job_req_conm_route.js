var express=require('express');
var router=express.Router();
var jobreqAllconm=require('../models/jobReq_model');

router.get('/:id',function(req,res,next){
    jobreqAllconm.GetAllCoById(req.params.id,function(err,rows){
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