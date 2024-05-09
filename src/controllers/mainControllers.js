const express = require("express")
const path = require("path")

const app = express()

const vista = {
    main: (req, res) => {
        return res.render("../views/products/main.ejs")
    }
}
module.exports = vista