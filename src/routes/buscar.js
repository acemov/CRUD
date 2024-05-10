const express = require("express")
const router = express.Router()
const buscarController = require("../controllers/buscarController.js")


router.get("/ingresa",buscarController.buscador)

module.exports = router