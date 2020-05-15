var express=require('express');
var router=express.Router();
var ConmByAssignID=require('../models/assignment_model');

router.get('/:id',function(req,res,next){
    ConmByAssignID.GetCONMbyAssignID(req.params.id,function(err,rows){
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