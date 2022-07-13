const express = require("express")
const nodemailer = require("nodemailer")
const router = express.Router()

router.post("/send_email", function(req, res){
    const { to, from, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: { user: 'nao-responder-mannaportal@outlook.com', pass: 'qwer@2022' }
    })

    const mailOptions = {
        from: from, // Email da empresa 
        to: to,     // Email para quem vai ser enviado
        subject: subject, // Titulo do email
        text: message,     // Texto do email
        html: "<p>HTML version of the message</p>"
    }

    transporter.sendMail(mailOptions, function(error, info){
        const data = (error) ? {"status": false, "message": "Não enviado!"} : {"status": true, "message": "Enviado!"};
        res.json(data);
    })
})

module.exports = router;