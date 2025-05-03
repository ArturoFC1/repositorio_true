//Declaracion tipo SET 
    //Este tipo no acepta duplicados de datos a menos que cambien un bit

let myset = new Set();
console.log(myset);

myset = new Set(["hola","como","estas",9,0,76]);
console.log(myset);

//Metodos comunes de SET

//ADD && DELETE

    //Se ocupa add para añadir elemntos al SET

myset.add("valeria");
console.log(myset);

    //Se ocupa delete para eliminar elementos del SET

myset.delete("hola");
console.log(myset);

    //Para verificar si esta borrando un elementos podemos retornar un booleano ejemplo:

console.log(myset.delete("90090")); // obtenemos un false porque ese valor no existe

//Metodo HAS (para comprobar si un elemento existe dentro de el SET)

console.log(myset.has("valeria"));  // obtenemos true porque el elemento esta en el SET

//Metodo SIZE (para tamaño del SET)
 console.log(myset.size);

 //Convertir un SET a ARRAY

let miArreglo = Array.from(myset);
console.log(miArreglo);

//Convertir de ARRAY a SET

miset = new Set(miArreglo)
console.log(miset);