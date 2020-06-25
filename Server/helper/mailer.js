const nodemailer =  require('nodemailer'); // khai báo sử dụng module nodemailer
require('dotenv').config()
const sendMail = (toEmail, code) => {
    const transporter =  nodemailer.createTransport({ // config mail server
        host: 'smtp.gmail.com',
        port: 587,
        secure: true, 
        service: 'Gmail',
        auth: {
            user: 'thaole.tranning.nodejs@gmail.com',
            pass: 'ta210402'
        }
    });
    const mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'Your Lap',
        to: toEmail,
        subject: 'Code Change Password',
        text: 'You recieved message from Your Lap',
        html: '<p>Code :' + code + '</p>'
    }
    return transporter.sendMail(mainOptions);
}
module.exports = sendMail;