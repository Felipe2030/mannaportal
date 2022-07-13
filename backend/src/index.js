const routers = require('./routers/index')
const express = require("express")
const http = require("http")

const app = express()
const port = process.env.PORT || 8000
const server = http.Server(app)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routers)

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`))