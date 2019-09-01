var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'User',
    pass: 'Pass'
  }
});

var mailOptions = {
  from: 'bedrock.uz.site@gmail.com',
  to: 'l79l@yandex.ru',
  subject: 'Sending Email using Node.js',
  text: 'Welcome to Bedrock.uz!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
