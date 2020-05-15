var express=require('express');
var router=express.Router();
var getBDjoinsheet=require('../models/joiningsheet_model');

router.get('/:id',function(req,res,next){
    getBDjoinsheet.GetBDJoiningSheet(req.params.id,function(err,rows){
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