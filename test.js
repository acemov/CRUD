let variable = "hola"
let nombreA = "Franco"
let fraseCompleta = `hola ${nombreA}`

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

//console.log(undefined === false);

// ------------------->

let personas = {
    nombre: "Franco",
    apellido: "Perez",
    edad: 25,
    nombre: "Juan",
    apellido: "pepe",
    edad: 30
}
let {nombre, apellido, edad: nuevaPersona } = personas
//console.log(personas)
// ------------------->

let array = [1,2,3,4,5,6,7,8,9,10]
let array2 = [11,12,13,14,15,16,17,18,19,20]
let array3 = [...array, ...array2]
console.log(array3);
// ------------------->

let parte = ["estas", "todo", "bien?"]
let parte2 = [ "hola", "como", ...parte ,", me llamo" , "franco"]

console.log(parte2);
