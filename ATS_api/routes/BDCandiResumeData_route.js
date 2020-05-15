var express=require('express');
var router=express.Router();
var BDCandiResumeData=require('../models/candi_resume_data_model');

router.get('/:id',function(req,res,next){
    BDCandiResumeData.GetBDCandiResumeData(req.params.id,function(err,rows){
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