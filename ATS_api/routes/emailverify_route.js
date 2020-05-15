var express = require('express');

var router = express.Router();
//var multer=require('multer');
//var path=require('path');
var demo = require("../models/emailverify");

// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//     cb(null, 'public/images/leadco_img')
//     },
//     filename: (req, file, cb) => {
//     x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
//     cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
//     }
//     });
//     var upload = multer({storage: storage});

router.post('/',function(req,res,next){
    console.log(req.body);
    //console.log(req.file.filename);
    demo.sendMail(req.body,function(err,message){
        if(err)
        {
            console.log(err);
            res.json(err);
        }
        else
        {
            return res.json({success: true, msg: 'sent'});//or return count for 1 or 0
        }
    });
});

 

module.exports=router;