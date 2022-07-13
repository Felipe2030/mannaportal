const express = require("express")
const router = express.Router()
const UsuariosController = require("./../controllers/usuarios-controller")

router.get("/usuarios", async (req, res) => {
    const usuarios = new UsuariosController()
    res.json(await usuarios.usuariosController())
})

module.exports = router;
