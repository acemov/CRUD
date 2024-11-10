const fs = require('fs');
const path = require('path');

const ProbandoMulter = {
    vista: (req, res) => {
        res.render("../views/products/multerFormulario");
    },
    MostarArhivo: (req, res) => {
        console.log("- - - - - - - - - - - - Datos de la imagen - - - - - - - - - - - - ");
        console.log(req.file);
        console.log("- - - - - - - - - - - - Datos de la imagen - - - - - - - - - - - - ");

        let datos = req.body;
        let imagenNomnbre = req.file.filename;
        let datosImagen = {
            nombre: datos.nombre,
            precio: datos.precio,
            NombreImagen: imagenNomnbre
        };
        console.log(datosImagen);

        // Ruta completa del archivo JSON
        const filePath = path.join(__dirname, "../data/datos.json");

        // Traer el archivo JSON
        let archivoJson = fs.readFileSync(filePath, "utf8");
        // Convertir el archivo JSON a un objeto literal
        let datosJsonAjs = JSON.parse(archivoJson);
        // Agregar los nuevos datos al objeto existente
        datosJsonAjs.push(datosImagen);
        // Convertir el objeto literal a un string JSON
        let datosJsonAjsString = JSON.stringify(datosJsonAjs, null, 4);
        // Escribir el archivo JSON actualizado
        fs.writeFileSync(filePath, datosJsonAjsString);
        // Traer el archivo JSON
        let NuevoArchivoJson = fs.readFileSync(filePath, "utf8");
        // Convertir el archivo JSON a un objeto literal
        let datosJsonAjsActualizado = JSON.parse(NuevoArchivoJson);
        console.log("- - - - - - - - - - - - Datos de la JSON - - - - - - - - - - - - ");
        //console.log(datosJsonAjsActualizado);

        res.render("../views/products/multerVista", { "datos": datosJsonAjsActualizado });
    }
};

module.exports = ProbandoMulter;