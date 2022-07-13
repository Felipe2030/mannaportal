const routerAuth = require("./auth-router")
const routerUsuarios = require("./usuarios-router")
const routerEmail = require("./email-router")

module.exports = [
    routerAuth,
    routerUsuarios,
    routerEmail
]