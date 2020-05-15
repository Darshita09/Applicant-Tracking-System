var express=require('express');
var router=express.Router();
var leadCo=require('../models/leadCo_model');
var multer=require('multer');
var path=require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/leadco_img')
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});

router.get('/:company_id?',function(req,res,next){
    
    if(req.params.company_id){
        leadCo.GetLeadCoById(req.params.company_id,function(err,rows){
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
        leadCo.GetAllLeadCo(function(err,rows){
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

router.post('/',upload.single('image'),function(req,res,next){
    leadCo.AddLeadCo(req.body,req.file.filename,function(err,rows){
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

router.put('/:company_id',function(req,res,next){
    console.log(req.params.company_id);
    leadCo.UpdateLeadCo(req.params.company_id,req.body,function(err,rows){
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

router.delete('/:company_id',function(req,res,next){
    leadCo.DeleteLeadCo(req.params.company_id,function(err,rows){
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