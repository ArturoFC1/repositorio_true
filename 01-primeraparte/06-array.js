//Array son tipos de datos que permiten guardar un conjunto de datos

//Declaracion de un array es 2do casi nunca se usa ni se recomienda

let miArray = [];
let miArray2 = new Array(2);

miArray2[0] = 2
miArray2[1] = 534
miArray2[2] = 1; 

console.log(miArray);
console.log(miArray2)

//Array

let arreglo = [1,2,4,"hola",2];
console.log(arreglo);

//Para agregar datos a un arreglo se usa la propiedad push

arreglo.push("Perro", "gato", 2);
console.log(arreglo);

//Para eliminar o extraer el ultimo valor del arreglo se usa la propiedad pop
arreglo.pop();
console.log(arreglo);

//Para eliminar o extraer el primer valor de un arreglo se usa la propiedad shift
arreglo.shift();
console.log(arreglo);

//Para ingresar valores al principio del arreglo se puede de la siguiente propiedad unshift

arreglo.unshift("Valeria", "ibañez");
console.log(arreglo);

//Para ver el tamaño del arreglo lenght

console.log(arreglo.length);

//Para limpiar el arreglo se inicializa en vacio

arreglo = [];
console.log(arreglo);

//Slice solo para mostrar elementos de determinadas posiciones
arreglo = ["h", "o", "l", "a"];
let palabras = arreglo.slice(2,4);
console.log(palabras);

//Splice solo para ingresar nuevas entradas en determinadas posiciones
arreglo = [1,3,4,65,7,2,2];
arreglo.splice(0,3,"prueba");
console.log(arreglo)