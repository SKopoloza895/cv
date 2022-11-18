require('dotenv').config(); 

const nodemailer = require('nodemailer');

// step 1

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// Step 2

let mailOptions ={
    from: 'siyandakopolo2@gmail.com',
    to: 'siyandakopolo2@gmail.com',
    subject: 'test',
    text: 'IT work'
};

// step 3

transporter.sendMail(mailOptions,function(err, data){

    if (err) {
        console.log('error Occurs', err);
    }
    else{
        console.log('Email sent!!!');
    }
});