var express=require('express');
var router=express.Router();
var jobReq=require('../models/jobReq_model');

router.get('/:client_job_id?',function(req,res,next){
    
    if(req.params.client_job_id){
        jobReq.GetJobReqById(req.params.client_job_id,function(err,rows){
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
        jobReq.GetAllJobReq(function(err,rows){
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
    jobReq.AddJobReq(req.body,function(err,rows){
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

router.put('/:client_job_id',function(req,res,next){
    console.log(req.params.client_job_id);
    jobReq.UpdateJobReq(req.params.client_job_id,req.body,function(err,rows){
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

router.delete('/:client_job_id',function(req,res,next){
    jobReq.DeleteJobReq(req.params.client_job_id,function(err,rows){
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