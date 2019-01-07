var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bedrock.uz.site@gmail.com',
    pass: 'BroProBedRock'
  }
});

var mailOptions = {
  from: 'bedrock.uz.site@gmail.com',
  to: 'l79l@yandex.ru',
  subject: 'Sending Email using Node.js',
  text: 'Hello!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
