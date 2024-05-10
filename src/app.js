const express = require("express")
const path = require("path")
const app = express()

app.set('views', path.join(__dirname, 'views')) //para ver las vistas
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "../public"))) //para poder usar los archivos public

// - - - - - - - - - RUTAS - - - - - - - - -
const mainRouter = require("./routes/main.js")
const busquedaRouter = require("./routes/buscar.js")

// - - - - - - - - - ABRIENDO RUTAS - - - - - - - - -
app.use("/main", mainRouter)
app.use("/buscandoEnUnaLista", busquedaRouter)

// - - - - - - - - - ABRIENDO SERVIDOR - - - - - - - - -
app.listen(3000, () => { "Servidor abierto" })