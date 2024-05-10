const express = require("express")

const metodos = {
    lista: (req,res)=>{
        res.render("../views/products/lista.ejs")
    },
    mostrar: (req,res)=>{
        let CaptarLoQuePusoElUser = req.query.pront
        res.render("../views/products/lista.ejs", {"Se_Busca":CaptarLoQuePusoElUser})
    }
}
module.exports = metodos