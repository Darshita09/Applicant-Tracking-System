var express=require('express');
var router=express.Router();
var BDMCandiResume=require('../models/candi_resume_data_model');

router.get('/',function(req,res,next){
    BDMCandiResume.GetBDMCandiResumeData(function(err,rows){
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