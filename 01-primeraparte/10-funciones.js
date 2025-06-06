// Funciones

// Funcion Simple
function miFuncion() {
    console.log("Hola mundo");
}

for (let i = 0; i < 5; i++){
    miFuncion();
}

//Funcion con Parametros
function miFuncion2(name){
    console.log(`Hola como estas, ${name}`)
}
miFuncion2("Arturo");


//Funcion anonima
let nPerro = function (perro){
    console.log(`El perro se llama: ${perro}`);
}
nPerro("Cocky");

//Arrow Functions: se puede realizar de dos maneras
let funcionSaludo = (saludo) => console.log(`Hola como estas ${saludo}`);

funcionSaludo("Arturo");
//////////////////////////////////////////////////////////////
let nombreNovia = (novia) => {
    console.log(`La novia de Arturo se llama: ${novia}`);
}

nombreNovia("Selo");

//Funcion con parametros

function newFuncion(a , b){
    console.log(a * b);
}

newFuncion(2 , 9);

//En caso de no ingresar algun numero se puede poner POR DEFECTO

function newFuncion1(a = 0, b = 0){
    console.log(a * b);
}

newFuncion1(6);

//Retorno de valores 

function multiplicacionValores (a , b){
    return a * b;
}

let resultado = multiplicacionValores(10 , 4);
console.log(resultado);

//Funciones Anidadas

function saludar (nombre){
    function mensaje(){
        console.log("Hola como estas: "+nombre)
    }
    mensaje();

}
saludar("Arturo");

//Funciones de orden superior

function aplicarFuncion(func, param){
    func(param);
}

aplicarFuncion(nPerro , "cocky");


//FOREACH

let arreglo = [1,2,3,4,5,5,8];

arreglo.forEach(function (value){
    console.log(value);
})