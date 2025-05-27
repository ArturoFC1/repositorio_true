// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

console.log("Bucle FOR");
for (let i = 1; i <= 20; i++){
    console.log("Numero: "+i)
}

console.log("Bucle WHILE");
let num=1;
while(num <= 20){
    console.log("Numero: "+num)
    num++;
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0;
console.log("Bucle FOR");
for (i = 0; i <= 100; i++){
    suma += i;
}
console.log("La suma de los numeros 0 al 100 es: "+suma);

suma = 0;
num = 0;
console.log("Bucle WHILE");
while(num <= 100){
    suma += num;
    num++;
}
console.log("La suma de los numero de 0 al 100 es: "+suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

console.log("Bucle FOR");
for  (i = 1; i <= 50; i++){
    if  (i % 2 == 0){
        console.log("Numeros pares: "+i);
    }
}

num = 1;
console.log("Bucle WHILE");
while  (num <= 50){
    if  (num % 2 == 0){
        console.log("Numeros pares: "+num);
    }
    num++;
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let arregloNombres = ["Arturo", "Alexander", "Issac", "Valeria", "Paulinho"];

for (const element of arregloNombres) {
    console.log(element);
}


// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("Bucle FOR");
let contador = 0;
let text = "Nombredeprueba"
let texto = text.toUpperCase();

for (i = 0; i < texto.length; i++){
    if  (texto[i] == "A" || texto[i] == "E" || texto[i] == "I" || texto[i] == "O" || texto[i] == "U" ){
        contador ++;
    }
}
    console.log("Numero de vocales: "+contador);

console.log("Bucle WHILE");
num = 0;
contador = 0;
while   (num < texto.length){
    if  (texto[num] == "A" || texto[num] == "E" || texto[num] == "I" || texto[num] == "O" || texto[num] == "U" ){
        contador ++;
    }
    num ++;
}
    console.log("Numero de vocales: "+contador);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let arrayNumber = [5,7,3,2,1,9,6,2,6,1];
let producto = 1;

console.log("Bucle FOR");

for (i = 0; i < arrayNumber.length; i++){
    producto *= arrayNumber[i];
}
console.log(producto);

console.log("Bucle WHILE");
num = 0;
producto = 1;
while   (num < arrayNumber.length){
    producto *= arrayNumber[num];
    num ++;
}
console.log(producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let numero = 5;
console.log("Bucle FOR");
for (i = 1; i <= 10; i++){
    console.log(i + " * 5 = " + numero*i);   
}

let indice = 1;
let resultado = 1;
console.log("Bucle WHILE");
while   (indice <= 10){
    console.log(indice + " * 5 = "+ resultado * indice);
    indice++;
}

// 8. Usa un bucle para invertir una cadena de texto

let cadenaN = "ArturoFigueroaChino";
let parametro = cadenaN.length - 1;
let invertido = [];

for (i = 0; i < cadenaN.length; i++){
    invertido[parametro] = cadenaN[i];
    parametro --;
}

console.log(invertido.join(''));




// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let x = 0;
let y = 1;

for (let i = 0; i < 10; i++) {
  console.log(x); // Mostramos el valor actual de x (Fibonacci)
  
  // Calculamos el siguiente término de Fibonacci
  let temp = x + y;
  x = y;    // x ahora toma el valor de y
  y = temp; // y ahora es la suma de los dos anteriores
}




// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let arregloNumero = [3,2,6,78,1,2,13,45,2,90,2,12,100];
let newarregloN = [];

for (i = 0; i < arregloNumero.length; i++){
    if  (arregloNumero[i] > 10){
        newarregloN.push(arregloNumero[i]);
    }
}
console.log(newarregloN);