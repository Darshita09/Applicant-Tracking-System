var express=require('express');
var router=express.Router();
var candidate=require('../models/candidate_model');
var multer=require('multer');
var path=require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/candidate_resume')
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});

router.get('/:candidate_id?',function(req,res,next){
    
    if(req.params.candidate_id){
        candidate.GetCandidateById(req.params.candidate_id,function(err,rows){
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
        candidate.GetAllCandidate(function(err,rows){
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

router.post('/',upload.single('resume'),function(req,res,next){
    candidate.AddCandidate(req.body,req.file.filename,function(err,rows){
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

router.put('/:candidate_id',function(req,res,next){
    candidate.UpdateCandidate(req.params.candidate_id,req.body,function(err,rows){
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

router.delete('/:candidate_id',function(req,res,next){
    candidate.DeleteCandidate(req.params.candidate_id,function(err,rows){
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