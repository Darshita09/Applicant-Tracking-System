var express=require('express');
var router=express.Router();
var ResumeDataforUpdate=require('../models/candi_resume_data_model');

router.get('/:id',function(req,res,next){
    ResumeDataforUpdate.GetCandiResumeDataForUpdate(req.params.id,function(err,rows){
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