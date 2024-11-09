const ProbandoMulter ={
    vista: (req, res) => {
        res.render("../views/products/multerFormulario")
    },
    MostarArhivo:(req, res) => {
        res.render("../views/products/multerVista")
    }
}
module.exports = ProbandoMulter