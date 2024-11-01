const express = require("express")
const path = require("path")
const app = express()

app.set('views', path.join(__dirname, 'views')) //para ver las vistas
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "../public"))) //para poder usar los archivos public

// - - - - - - - - - LO QUE SE ENVIA POR POST ES CAPTURADO DE FORMATO LITERAL - - - - - - - - -
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// - - - - - - - - - RUTAS - - - - - - - - -
const mainRouter = require("./routes/main.js")
const busquedaRouter = require("./routes/buscar.js")
const postRouter = require("./routes/post.js")
const rutasParametrizadasRouter = require("./routes/rutasParametrizadas.js")

// - - - - - - - - - ABRIENDO RUTAS - - - - - - - - -
app.use("/main", mainRouter)
app.use("/buscar", busquedaRouter)
app.use("/enviar", postRouter)
app.use("/rutasParametrizadas", rutasParametrizadasRouter)

// - - - - - - - - - ABRIENDO SERVIDOR - - - - - - - - -
app.listen(3000, () => {
    console.log("Servidor abierto");
})