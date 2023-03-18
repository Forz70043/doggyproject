let nodemailer = require('nodemailer')
const { google } = require("googleapis");


export default async function handler(req, res) {
  //Init OAuth from Google lib.
  const OAuth2 = google.auth.OAuth2;
  // Get data submitted in request's body.
  const body = req.body
  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)

  //client_id, client_secret, redirect_uri
  const myOAuth2Client = new OAuth2 (
    process.env.GMAIL_CLIENT_ID, 
    process.env.GMAIL_CLIENT_SECRET, 
    process.env.GMAIL_REDIRECT_URI
  )


  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.message || !body.email || !body.firstname || !body.lastname) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Email or Text or name empty' })
  }

  myOAuth2Client.setCredentials({refresh_token:process.env.GMAIL_REFRESH_TOKEN});
  const myAccessToken = await myOAuth2Client.getAccessToken().token
  //console.log("XX", myOAuth2Client)
  console.log("XX", myOAuth2Client._clientSecret)
  console.log("XX", myAccessToken)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      type: "OAUTH2",
      user: process.env.MAIL_USER,
      clientId: myOAuth2Client._clientId,
      clientSecret: myOAuth2Client._clientSecret,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken: myAccessToken //access token variable we defined earlier
    },
    secure: true,
  })
   
  //transporter.verify().then(console.log).catch(console.error);

  const mailData = {
    from: 'wild.cloud.beer@gmail.com',
    to: 'wild.cloud.beer@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }  
  
  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err)
      res.status(400).json({ data: err })
    }
    else {
      console.log(info)
      smtpTransport.close();
      // Found the name.
      // Sends a HTTP success code
      
    }
  })
  res.status(200).json({ data: "Message Send!"/*`${body.email} ${body.message}`*/ })
  

}
