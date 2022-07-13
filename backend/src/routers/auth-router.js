const express = require("express")
const router = express.Router()
const AuthController = require("./../controllers/auth-controller")

router.get("/auth", async (req, res) => {
    const auth = new AuthController();
    await auth.authController();
    res.send("ok")
})

module.exports = router;
