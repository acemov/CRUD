let variable = "hola"
let nombre = "Franco"
let fraseCompleta = `hola ${nombre}`

// ------------------->

const test = {
    prop: 42,
    func: function () {
        return this.prop;
    },
};
let prueba ={
    nombre: "franco",
    apellido: "perez",
    frase: function() {
        return "Hola me llamo " + this.nombre + " y mi apellido es " + this.apellido
    } 
}
// ------------------->

function saludar (nombre){
    return "hola " + nombre
}

// ------------------->

console.log(__dirname);



