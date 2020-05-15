var express=require('express');
var router=express.Router();
var candidate_conmByID=require('../models/candidate_model');

router.get('/:candidate_id',function(req,res,next){
    candidate_conmByID.GetAllConmByID(req.params.candidate_id,function(err,rows){
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