const express = require("express")
const router = express.Router()

const putYdeleteController = require("../controllers/putYdeleteController")

router.get("/editPorPut/:id", putYdeleteController.editPut)
router.put("/editPorPut", function (req, res) {
    res.send("fui por put")
})
router.delete("/delete/:id/:nombre", function (req, res) {
    res.send("fuiste por delete y te enviaron esto 👉 ID: " + req.params.id + " nombre: " + req.params.nombre)
})


module.exports = router