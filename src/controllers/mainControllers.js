const express = require("express")

let lista = ["Pedro","Juan","Lorenzo","Miguel","Lucas","Roman"]

const vista = {
    main: (req, res) => {
        return res.render("../views/products/main.ejs",{"listaDeNombres":lista})
    }
}
module.exports = vista