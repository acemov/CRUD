const express = require("express")
const router = express.Router()

const rutasParametrizadasController = require("../controllers/rutasParametrizadasController.js")

router.get("/numero/:numer",rutasParametrizadasController.numero)
router.get("/numeroYnombre/:numer/:nombre",rutasParametrizadasController.numeroYnombre)
router.get("/numeroYnombreOpcional/:numer?/:nombre?",rutasParametrizadasController.numeroYnombreOpcional)


module.exports = router