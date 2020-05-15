var express=require('express');
var router=express.Router();
var submissionsheet=require('../models/submission_model');

router.get('/:submission_id?',function(req,res,next){
    
    if(req.params.submission_id){
        submissionsheet.GetSubSheetById(req.params.submission_id,function(err,rows){
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
        submissionsheet.GetAllSubSheet(function(err,rows){
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
    submissionsheet.AddSubSheet(req.body,function(err,rows){
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

router.put('/:submission_id',function(req,res,next){
    submissionsheet.UpdateSubSheet(req.params.submission_id,req.body,function(err,rows){
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

router.delete('/:submission_id',function(req,res,next){
    submissionsheet.DeleteSubSheet(req.params.submission_id,function(err,rows){
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