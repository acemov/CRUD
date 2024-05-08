const express = require("express")
const path = require("path")
const app = express()
const mainRouter = require("./routes/main.js")


app.use(express.static(path.join(__dirname,"/public")))

app.set("view engine", "ejs")

app.use("/main", mainRouter)

app.listen(3000,()=>{"Servidor abierto"})