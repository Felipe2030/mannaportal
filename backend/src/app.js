const routers = require('./routers/index')
const express = require('express')
const http = require("http")

const app = express()
const server = http.Server(app)
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routers)

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})
