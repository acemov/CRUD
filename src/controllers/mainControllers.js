

let lista = ["Pedro", "Juan", "Lorenzo", "Miguel", "Lucas", "Roman"]

const vista = {
    main: (req, res) => {
        let primero = req.query.primero
        let segundo = req.query.segundo
        return res.render("../views/products/main.ejs",
            {
                "listaDeNombres": lista,
                "Primera_Busqueda": primero,
                "Segunda_Busqueda": segundo,
            })
    }
}
module.exports = vista