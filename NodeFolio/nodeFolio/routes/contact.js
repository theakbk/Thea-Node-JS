const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact/sendMail", async (req, res) => {
    
  const subject = req.body.subject
  const message = req.body.message

  console.log("Emnestreng fra post ",subject)
  console.log("textstreng fra post ",message)
  await sendMail(subject,message)

  res.redirect("/")

})


module.exports = {
    router
};

async function sendMail(subjectString, textMessage) 
{
  console.log("Fors'g p[ mail start");

    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "thea2527@stud.kea.dk", 
            pass: process.env.PASSWORD, 
          },
        });

        // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Thea" <thea2527@stud.kea.dk>', // sender address
    to: "thea2527@stud.kea.dk", // list of receivers
    subject: subjectString, // Subject line
    text: textMessage, // plain text body
    html: "<b>" + textMessage + "</b>", // html body
  });

  console.log("Message sent");
  

}

