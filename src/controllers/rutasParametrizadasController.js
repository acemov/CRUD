
const mostar = {
    numero: (req, res) => {
        let numero = req.params.numer
        res.render("../views/products/rutaParametrizada.ejs", {
            "numeroPuesto1": numero
        })
    },
    numeroYnombre: (req, res) => {
        let numero2 = req.params.numer
        let nombre2 = req.params.nombre
        res.render("../views/products/rutaParametrizada2.ejs", {
            "numeroPuesto2": numero2,
            "nombrePuesto2": nombre2
        })
    },
    numeroYnombreOpcional: (req, res) => {
        let numero3 = req.params.numer
        let nombre3 = req.params.nombre
        res.render("../views/products/rutaParametrizada3.ejs", {
            "numeroPuesto3": numero3,
            "nombrePuesto3": nombre3
        })
    }
}
module.exports = mostar