var express=require('express');
var router=express.Router();
var ats_user=require('../models/ats_user_model');

router.get('/:email_id?',function(req,res,next){
    
    if(req.params.email_id){
        ats_user.GetUserById(req.params.email_id,function(err,rows){
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
        ats_user.GetAllUser(function(err,rows){
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
    ats_user.AddUser(req.body,function(err,rows){
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

router.put('/:email_id',function(req,res,next){
    ats_user.UpdateUser(req.params.email_id,req.body,function(err,rows){
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

router.delete('/:email_id',function(req,res,next){
    ats_user.DeleteUser(req.params.email_id,function(err,rows){
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