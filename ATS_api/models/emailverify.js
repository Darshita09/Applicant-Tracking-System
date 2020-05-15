var nodemailer = require('nodemailer');
 var path = require('path');
 var ABSPATH = path.dirname(process.mainModule.filename); // Absolute path to our app directory
 

var demo={
sendMail:function(demo,callback){  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'atsty4647@gmail.com',
    pass: 'tyats@674647'
  }
});
var mailOptions = {
  from: 'atsty4647@gmail.com',
  to: demo.to,
  subject:demo.subject,
  text:demo.message,
 
  attachments:[{
    path:"C:/ATS Project/ATS_api/public/images/candidate_resume/"+demo.filename
  }]

};

 

transporter.sendMail(mailOptions, function(error, info){
  console.log(mailOptions.attachments);
  if (error) {

    console.log(error);

  } else {

    console.log('Email sent: ' + info.response);

  }

});

 

}

}

module.exports=demo;