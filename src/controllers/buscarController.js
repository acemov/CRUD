const express = require("express")

const metodos = {
    buscador: (req, res) => {
        let primero = req.query.primero
        let segundo = req.query.segundo
        res.render("../views/products/EnviandoPorGet.ejs",
            {
                "Primera_Busqueda": primero,
                "Segunda_Busqueda": segundo,
            })
    }
}
module.exports = metodos