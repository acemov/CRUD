const path = require("path")
const express = require("express")
const router = express.Router()
const multerController = require("../controllers/multerController")
const multer = require("multer")

// - - - - - - - - - - - - - - - -  Configuración de multer  - - - - - - - - - - - - - - - - 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/img/photo"))
    },
    filename: function (req, file, cb) {
        // SE RECOMIENDA HACERLO EN EL CONTROLLER, YA QUE AHÍ DA MÁS DATOS DE LA IMAGEN
        //console.log("- - - - - - - - - - - - Datos de la imagen - - - - - - - - - - - - ");
        //console.log(file) // de aca sale "file.originalname" de la linea ---> let extensionDelArchivo = path.extname(file.originalname)
        //console.log("- - - - - - - - - - - - Datos de la imagen - - - - - - - - - - - - ");
        
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