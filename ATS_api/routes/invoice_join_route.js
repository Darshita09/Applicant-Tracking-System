var express=require('express');
var router=express.Router();
var invoice=require('../models/invoice_model');

router.get('/',function(req,res,next){
    invoice.GetCoNmByID(function(err,rows){
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