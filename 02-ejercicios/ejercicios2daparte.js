// 1. Crea una variable para cada operación aritmética
let a = 5;
let b = 3;

let suma = a+b;
let resta = a-b;
let multi = a*b;
let division = a/b;
let restate = a%b;
let potencia = a ** b;
let incremento = a++;
let decremento = a--;

// 2. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 2);
console.log(43 >= 23);
console.log(1 < 4);
console.log(0 <= 0);
console.log(80 != 3);

// 3. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 < 2);
console.log(43 <= 23);
console.log(1 > 4);
console.log(0 >= 1);
console.log(80 != 80);

// 4. Utiliza el operador lógico and

console.log(32 < 40 && 90 > 43);

// 5. Utiliza el operador lógico or    

console.log(10 == 10 || 9 > 8);

// 6. Combina ambos operadores lógicos

console.log(3 > 2 && 90 == 90 || 8 <= 9);

// 7. Añade alguna negación

console.log(!true);

// 8. Utiliza el operador ternario

const estalluviendo = true;
estalluviendo ? console.log("Esta lluviendo") : console.log("No esta");


// 9. Combina operadores aritméticos, de comparáción y lógicas
let aa = 10;
let bb = 5;

let sumas = aa + bb;
let producto = sumas * 10;
console.log(!(producto >= 1000) && aa > bb) ;