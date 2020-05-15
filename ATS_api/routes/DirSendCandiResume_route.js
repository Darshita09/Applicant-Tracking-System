var express=require('express');
var router=express.Router();
var DirsendCandiResume=require('../models/candi_resume_data_model');

router.get('/',function(req,res,next){
    DirsendCandiResume.GetDirSendCandiResumeData(function(err,rows){
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