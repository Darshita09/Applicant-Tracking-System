var express=require('express');
var router=express.Router();
var candi_resume_data=require('../models/candi_resume_data_model');

router.get('/:candidate_resume_id?',function(req,res,next){
    
    if(req.params.candidate_resume_id){
        candi_resume_data.GetResumeDataById(req.params.candidate_resume_id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
    else
    {
        candi_resume_data.GetAllResumeData(function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            } 
        });
    }
});
// router.get('/',function(req,res,next){
//     ats_user.GetAllUser(function(err,rows){
//         if(err)
//         {
//             res.json(err);
//         }
//         else
//         {
//             res.json(rows);
//         }
//     });
// });

router.post('/',function(req,res,next){
    candi_resume_data.AddResumeData(req.body,function(err,rows){
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

router.put('/:candidate_resume_id',function(req,res,next){
    candi_resume_data.UpdateResumeData(req.params.candidate_resume_id,req.body,function(err,rows){
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

router.delete('/:candidate_resume_id',function(req,res,next){
    candi_resume_data.DeleteResumeData(req.params.candidate_resume_id,function(err,rows){
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