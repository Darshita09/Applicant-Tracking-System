var express=require('express');
var router=express.Router();
var joinsheetconm=require('../models/joiningsheet_model');

router.get('/',function(req,res,next){
    joinsheetconm.GetAllName(function(err,rows){
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