// var nodemailer = require('nodemailer');
// var request=require('request');
// const sgMail = require('@sendgrid/mail');
// const { send } = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);




// var msg = {
//   to: 'rohitsroa06@gmail.com',
//   from: 'rohitsroa3@gmail.com',
//   subject: `New Client-${name}`,
//   text: 'and easy to do anywhere, even with Node.js',
//   html:  `<h2> Client name: ${name} </h2><br><h2> Client Phone-No.: +91 ${phonenumber} </h2><br><h2> Client email-id: ${email} </h2><br><h2> Client's message: ${message} </h2>`,
// };
// sgMail.send(msg);
var nodemailer = require('nodemailer');
var request=require('request');
var dotenv = require("dotenv")
dotenv.config()
var transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 465,
  secure: true,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});
var sendMail = (name,phonenumber,email,message,data) => {
        var mailOptions = {
        from: 'rohitsroa06@gmail.com',
        to: 'rohitsroa3@gmail.com',
        subject: `New Client-${name}`,
        text: data,
        html: `<h2> Client name: ${name} </h2><br><h2> Client Phone-No.: +91 ${phonenumber} </h2><br><h2> Client email-id: ${email} </h2><br><h2> Client's message: ${message} </h2>`
};

transporter.sendMail(mailOptions, function(err, data2){
  if (err) {
    console.log(err);
  } else {
    console.log('Email sent: ');
  }
})};


module.exports = sendMail;