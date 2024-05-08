const express = require("express")
const path = require("path")

const app = express()

vistas = {
    main:(req,res)=>{
        res.render("index.ejs")
    }
}