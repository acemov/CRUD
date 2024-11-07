const multer = require("multer")
const path = require("path")
const express = require("express")
const router = express.Router()
const multerControllers = require("../controllers/multerControllers")
const uploadFile = multer({stroage})

const stroage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images"))
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "${date.now()}_img_${path.extname(file.originalname)}"))
    }
})

router.get("/subiendo",multerControllers.subirArchivo)

module.exports = router