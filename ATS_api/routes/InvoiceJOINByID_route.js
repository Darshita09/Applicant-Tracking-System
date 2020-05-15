var express=require('express');
var router=express.Router();
var invoiceJOINbyid=require('../models/invoice_model');

router.get('/:id',function(req,res,next){
    invoiceJOINbyid.GetInvoiceJOINByID(req.params.id,function(err,rows){
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