const express = require("express")
const path = require("path")
const app = express()
const methodOverride = require("method-override") //para PUT Y DELETE

app.set('views', path.join(__dirname, 'views')) //para ver las vistas
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "../public"))) //para poder usar los archivos public
app.use(methodOverride("_method")) //para PUT Y DELETE

// - - - - - - - - - LO QUE SE ENVIA POR POST, ESTO ES PARA QUE SE CAPTURE COMO UN OBJETO LITERAL - - - - - - - - -
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// - - - - - - - - - MIDDLEWARES - - - - - - - - -
const logMiddleware = require("./middlewares/logMiddleware.js")

// - - - - - - - - - USANDO MIDDLEWARES - - - - - - - - -
app.use(logMiddleware)

// - - - - - - - - - RUTAS - - - - - - - - -
const mainRouter = require("./routes/main.js")
const busquedaRouter = require("./routes/buscar.js")
const postRouter = require("./routes/post.js")
const rutasParametrizadasRouter = require("./routes/rutasParametrizadas.js")
const putYdeleteRouter = require("./routes/putYdelete.js")
const multerRouter = require("./routes/Multer.js")

// - - - - - - - - - ABRIENDO RUTAS - - - - - - - - -
app.use("/main", mainRouter)
app.use("/buscar", busquedaRouter)
app.use("/enviar", postRouter)
app.use("/rutasParametrizadas", rutasParametrizadasRouter)
app.use("/put-y-delete", putYdeleteRouter)
app.use("/multer", multerRouter)

// - - - - - - - - - USANDO MIDDLEWARES QUE VAN AL FINAL - - - - - - - - -
app.use((req, res, next) => {
    res.status(404).render("PaginaDeError") //pagina de error, este middleware siempre tiene que ir al final o sino no habre ninguna ruta
})

// - - - - - - - - - ABRIENDO SERVIDOR - - - - - - - - -
app.listen(3000, () => {
    console.log("Servidor abierto");
})
