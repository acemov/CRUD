const path = require("path")
const express = require("express")
const router = express.Router()
const multerController = require("../controllers/multerController")
const multer = require("multer")

// - - - - - - - - - - - - - - - -  Configuración de multer  - - - - - - - - - - - - - - - - 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/img"))
    },
    filename: function (req, file, cb) {
        console.log(file) // de aca sale "file.originalname" de la linea ---> let extensionDelArchivo = path.extname(file.originalname)
        let MiliSegundos = Date.now()
        let extensionDelArchivo = path.extname(file.originalname)
        cb(null, "imagen-" + MiliSegundos + extensionDelArchivo)
        //cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage: storage})

// - - - - - - - - - - - - - - - -  Configuración de Rutas  - - - - - - - - - - - - - - - - 
router.get("/formulario", multerController.vista)
router.post("/subiendoArchivo",upload.single("ElNombreTieneQueSerIgual"), multerController.MostarArhivo)


module.exports = router