const nodemailer = require('nodemailer');

const sendEmail = (options) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth : {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    })
    
    const mailOptions = {
        from :process.env.EMAIL_FROM,
        to: options.to,
        subject : options.subject,
        html : options.text
    }

    transporter.sendMail(mailOptions,function (err,info) {
        if (err) {
            console.log(err);
            console.log("hey");
        }else{
            console.log(info);
            console.log("success");
        }
    })


}
module.exports =sendEmail


