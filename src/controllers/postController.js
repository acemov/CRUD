const express = require("express")

const lista =[]

const post = {
    formulario:(req,res)=>{
        res.render("../views/products/formularioPost.ejs")
    },
    enviar:(req,res)=>{
        let post = req.body
        lista.push(JSON.stringify(post))
        res.redirect("/enviar/lista")
    },
    lista:(req,res)=>{
        res.render("../views/products/lista.ejs",
        {
            "lista":lista
        })
    }
}
module.exports = post