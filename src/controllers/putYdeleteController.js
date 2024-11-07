

const putYdelte = {
    editPut: (req, res) => {
        let CaptandoID = req.params.id

        let SimulacionDeBaseDeDatos = [
            { id: 1, name: "Dario" },
            { id: 2, name: "Felipe" },
            { id: 3, name: "Franco" },
            { id: 4, name: "Maria" },
            { id: 5, name: "Juan" }
        ]
        let UserElegido = SimulacionDeBaseDeDatos[CaptandoID]


        res.render("../views/products/userEditPut.ejs",
            {   
                "ListaNombresYid":SimulacionDeBaseDeDatos,
                "userAeditar": UserElegido
            })
    }
}
module.exports = putYdelte