const express = require('express');
const nodemailer = require("nodemailer");
const http = require("http");
const path = require("path");

const app = express();
const server = http.Server(app)
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "static")))

app.get('/', (req, res) => {
    response.sendFile(path.join(__dirname, "static/index.html"))
});

app.post("/send_email", function(req, response){
    var from = req.body.from
    var to = req.body.to
    var subject = req.body.subject
    var message = req.body.message

    var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
          user: 'win2016_br@outlook.com',
          pass: '257119aa'
        }
    })

    var mailOptions = {
        from: from,
        to:to,
        subject:subject,
        text:message
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
        } else {
            console.log("Email Sent: " + info.response)
        }
        response.redirect("/")
    })
})

server.listen(port, () => console.log(`Servidor rodando na porta ${port}!`))
console.clear()