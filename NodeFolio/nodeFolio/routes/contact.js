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
            user: "thea2527@stud.kea.dk", // generated ethereal user
            pass: "Khxr7x6#", // generated ethereal password
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

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

//main().catch(console.error);