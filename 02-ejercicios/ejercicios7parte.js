/*
Clase 32 - Ejercicios: Funciones
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function funcionSuma (n1, n2){
    return n1 + n2;
}
let resultado = funcionSuma(3,6);
console.log(resultado);

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function funcionArreglo (arreglo, tamaño){
    let valorAlto = arreglo[0];
    for (let i = 0; i < tamaño; i++){
        if  (arreglo[i] > valorAlto){
            valorAlto = arreglo[i];
        } 
    }
    return valorAlto;
}

let arreglo = [1219,11212,4000000,1,15,10];
let resultadoMayor = funcionArreglo(arreglo, arreglo.length);

console.log(resultadoMayor);


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function vocales (frase){
    let contadorv = 0;
    for (let i = 0; i < frase.length; i++){
        if  (frase[i] == "A" || frase[i] == "E" || frase[i] == "I" || frase[i] == "O" || frase[i] == "U"){
            contadorv++;
        }
    }
    return contadorv;
}

let palabra = "perroCoCkINAio"
palabra = palabra.toUpperCase();

console.log("La palabra: "+palabra+ " tiene "+ vocales(palabra)+ " vocales");

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function conversorMayusculas (array){
    let palabra = array;
    palabra = palabra.toUpperCase();
    return palabra;
}

let stringes = "esteesunarraydepalabras";

console.log(conversorMayusculas(stringes));


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function numeroprimo (numeroPrimo, condicion){
    if  (numeroPrimo == 2 || numeroPrimo == 3){
    condicion = true;
    }else if(numeroPrimo > 3){
    let number = Math.floor(Math.sqrt(numeroPrimo));
    for (let i = 2; i <= number; i++){
        if  (numeroPrimo % i === 0){
            condicion = false;
            break;
        }else{
            condicion = true;
        }
    }
}
    if  (condicion == true){
    return "Es primo";
        }else{
    return "No es primo";
    }
}

let numeroPrimo = 67;
let condicion = false;

console.log(numeroprimo(numeroPrimo , condicion));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function arreglos (arreglo1, arreglo2, arreglo3){
    for (let i = 0; i < arreglo1.length; i++){
        for (let j = 0; j < arreglo2.length; j++){
            if  (arreglo1[i] == arreglo2[j]){
                arreglo3.push(arreglo1[i]);
                arreglo2.splice(j,1);
                break;
            }
        }
    }
    return arreglo3;
}

let arreglo1 = [4,4,2,9,4,2,1];
let arreglo2 = [4,2,0,8,6,4,2];
let arreglo3 = [];

let resultadoArray = arreglos(arreglo1, arreglo2, arreglo3);
console.log(resultadoArray);

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function numerosPares (arreglo){
    let sumaNumeros = 0;
    for (let i = 0; i < arreglo.length; i++){
        if  (arreglo[i] % 2 == 0){
            sumaNumeros += arreglo[i];
        }
    }
    return sumaNumeros;
}

let arregloNumero = [2,4,6,2,1,8,9,20,30,12,16];
console.log(numerosPares(arregloNumero));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function numCuadradro (oldarreglo, newarreglo){
    for (let i = 0; i < oldarreglo.length; i++){
        newarreglo[i] = Math.pow(oldarreglo[i], 2);
    }
    return newarreglo;
}
let oldarreglo = [2,4,5,7,10,12,3,4,7,100];
let newarreglo = [];

console.log(numCuadradro(oldarreglo, newarreglo));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inversa

function cadenaTexto (texto , newtexto){
    for (let i = texto.length - 1, j = 0; i >= 0; i--, j++){
    newtexto[j] = texto[i];
    }
    return newtexto.join("");
}

let texto = "Esta es una linea de codigo inversa";
let newtexto = [];

let inversa = cadenaTexto(texto, newtexto);
console.log(inversa);


// 10. Crea una función que calcule el factorial de un número dado

function calculoFactorial (numero){
    let valor = 1;
    for (let i = 1; i <= numero; i++){
        valor *= i;
    }
    return valor;    
}

let valornumerico = 6;

console.log(calculoFactorial(valornumerico));