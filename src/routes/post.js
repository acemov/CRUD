const express = require("express")
const router = express.Router()

const postController = require("../controllers/postController")

router.get("/",postController.formulario)
router.post("/",postController.enviar)
router.get("/lista",postController.lista)

module.exports = router