var express=require('express');
var router=express.Router();
var Joiningsheet=require('../models/joiningsheet_model');

router.get('/:joiningsheet_id?',function(req,res,next){
    
    if(req.params.joiningsheet_id){
        Joiningsheet.GetJoinSheetById(req.params.joiningsheet_id,function(err,rows){
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
        Joiningsheet.GetAllJoinSheet(function(err,rows){
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
    Joiningsheet.AddJoinSheet(req.body,function(err,rows){
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

router.put('/:joiningsheet_id',function(req,res,next){
    Joiningsheet.UpdateJoinSheet(req.params.joiningsheet_id,req.body,function(err,rows){
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

router.delete('/:joiningsheet_id',function(req,res,next){
    Joiningsheet.DeleteJoinSheet(req.params.joiningsheet_id,function(err,rows){
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