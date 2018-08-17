var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 587,
  secure: false,
  auth: {
    user: "mason@lakefox.net",
    pass: "minecraft40"
  }
});

module.exports = function (address, text) {
  var mailOptions = {
    from: "'GitTexts' mason@lakefox.net",
    to: address,
    subject: '',
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
