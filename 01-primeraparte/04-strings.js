//Strings

//Concatenacion
let nombre = "Arturo";
let saludo = "Hola "+ nombre;
console.log(saludo);

//Longitud
console.log(saludo.length);

//Acceso a caracteres
let i = 0;
while(i < saludo.length){
    console.log(saludo[i]);
    i++;
}

//Metodos comunes
console.log(saludo.toUpperCase());  //Para poner en mayuscula el texto
console.log(saludo.toLowerCase());  //Para poner en minuscula el texto
console.log(saludo.indexOf("Arturo")); //Indica desde donde empieza ese nombre por ejemplo la posicion
console.log(saludo.includes("Arturo")); //Indica si ese valor esta incluido dentro del texto puede ser true o false
console.log(saludo.slice(0, 3)); //Marca en que posiciones imprimir el valor
console.log(saludo.replace("Hola", "Camara")) //Remplaza valores existentes por otros

//Template plantillas literales

let mensaje = `Hola como estais
por esos rumbos de la programada`;

console.log(mensaje);

console.log(`Este es un mensaje para todos ustedes en especial para ${nombre}, pinche wey 
    lameculos ademas te dire... ${mensaje}`)