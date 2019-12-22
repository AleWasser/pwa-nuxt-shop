import express from 'express';
import nodemailer from 'nodemailer';
import sendgridTansport from 'nodemailer-sendgrid-transport';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

//app.use(express.url());

app.use(express.json());

//* Testing
/* var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "da345cad880b68",
    pass: "105fde131dda95"
  }
}); */

const transport = nodemailer.createTransport(sendgridTansport({
  auth: {
    api_key: process.env.SENDGRID_KEY
  }
}));


app.post('/', (req, res, next) => {

  let mailOptions = {
    from: 'shop@pwa-nuxt.com',
    to: req.body.email,
    subject: 'Your payment has been accepted',
    html: `<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="initial-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <title>PWA-nuxt-shop invoice</title>
  </head>
  <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="margin:0; padding:0;-webkit-text-size-adjust:none; -ms-text-size-adjust:none;">
    <table bgcolor="white" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" style="max-width: 550px;margin: auto;text-align:center;border-radius: 1%; padding-bottom: 10px">
       <tr>
         <td><h2>Your payment has been accepted!</h2></td>
      </tr>
      <tr>
        <td>
        <table bgcolor="#d4d4d4" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" style="max-width: 450px;margin: auto;border-radius: 1%">
       <tr>
         <td><p>Order number</p></td>
         <td>${req.body.token.id}</td>
      </tr>
    </table>
        </td>
      </tr>
      <tr>
        <td><h4>Thank you for your purchase.</h4></td>
      </tr>
      <tr>
        <td><a href="#">pwa-nuxt-shop</a></td>
      </tr>
    </table>
  </body>
</html>`,
  };


  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json('ERROR');
    }
    console.log('Message sent: %s', info.messageId);
    return res.status(200).json('OK');
  });


});

app.get('/test', (req, res, next) => {
  return res.json('Test route');
});

export default {
  path: '/api/invoice',
  handler: app,
}
