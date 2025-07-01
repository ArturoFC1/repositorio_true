// Clase de objetos, los objetos pueden albergar distintos tipos de datoas demas de arrays funciones y otros objetos

//Sintaxis
let persona = {
    nombre: "Arturo",
    edad: 23,
    sexo: "Masculino"
}

console.log("Yo me llamo: "+persona.nombre+" tengo "+persona.edad+" y soy de sexo "+persona.sexo);

//Modificacion de Propiedades
//Puede cambiar los valores y los tipos de datos
persona.nombre = "Israel";
console.log(persona.nombre);
persona.edad = "Arturo";
console.log(typeof persona.edad);

//Eliminacion de propiedades

delete persona.edad;
console.log(persona);

//Nueva propiedad

persona.email = "arturo@kohmi.net";
console.log(persona);

// Metodos Funciones
let persona2 = {
    nombre: "Alexo",
    edad: 23,
    sexo: "Macho",
    camina: function(){
        return "el esta caminando now";
    }
}
console.log(persona2.nombre + " se sabe que "+ persona2.camina());

// Anidacion de objetos

let persona3 = {
    nombre: "Carlos",
    edad: 34,
    corre: function(){
        return "El corre everyday";
    },
    trabajo: {
        compañia: "kohmi",
        tiempo: 3,
        actividad: function(){
            console.log(`la persona esta trabajando en ${this.compañia}`);
        }
    }
}

console.log(persona3.nombre+" corre "+persona3.corre()+" porque en "+persona3.trabajo.compañia+" "+persona3.trabajo.actividad());

// Igualdad de objetos

let gato1 = {
    nombre: "gatis",
    color: "azul",
    años: 4
}

let gato2 = {
    nombre: "gatis",
    color: "azul",
    años: 4 
}

console.log(gato1.años === gato2.años);

// Iteracion 

for (const element in gato2) {
    console.log(element + ":" + gato2[element])
}

//Funciones como objetos

function Person10 (name, edad) {   //Esto deberia de ser una clase
    this.name = name;
    this.edad = edad;
}

let newPersona = new Person10("arturo", 23);
console.log(newPersona)