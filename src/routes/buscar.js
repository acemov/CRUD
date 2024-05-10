const express = require("express")
const router = express.Router()
const buscarController = require("../controllers/buscarController.js")

router.get("/mostrarLista",buscarController.lista)
router.get("/resultado",buscarController.mostrar)

module.exports = router