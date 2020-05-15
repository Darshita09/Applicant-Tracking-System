var nodemailer = require('nodemailer');

 

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

  text:demo.message

};

 

transporter.sendMail(mailOptions, function(error, info){

  if (error) {

    console.log(error);

  } else {

    console.log('Email sent: ' + info.response);

  }

});

 

}

}

module.exports=demo;