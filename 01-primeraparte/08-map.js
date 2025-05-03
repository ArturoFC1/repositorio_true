//Para la declaracion del map, este no acepta repetidos en claves ademas de que se identifica por 
//ser un tipo de clave valor

let mapa = new Map();
console.log(mapa);

//Para la inicializacion del Map

mapa = new Map([
    ["Nombre", "Arturo"],
    ["Edad", 23],
    ["Estadocivil", "Mas soltero que nada" ],
    ["Años", 25],
    ["FuturaNovia", "ValeriaI"],
    ["Aciertos", 65],
    ["Aciertos", 99]
]);

console.log(mapa)


//Metodos y propiedades
//SET  "Para ingresar valores"

mapa.set("alias", "deltax");
console.log(mapa)

mapa.set("sexo", "M");
console.log(mapa)

mapa.set("Años", 23)

//GET  "Para obtener valores solo por clave"

console.log(mapa.get("Aciertos"));

//HAS "Comprueba si una clave esta o no esta (true or false)"

console.log(mapa.has("Añoss"));

//Delete "Borrar elemento de el map por clave"

mapa.delete("sexo");
mapa.delete("FuturaNovia");
mapa.delete("Aciertos");

console.log(mapa);

//KEYS "Te da listado de todas las claves"

console.log(mapa.keys());

//Values "Te da listado de todos los valores"
console.log(mapa.values());

//CLEAR "Elimina todo el listado"

mapa.clear();
console.log(mapa);