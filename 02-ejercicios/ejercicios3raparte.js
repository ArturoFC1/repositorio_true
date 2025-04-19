// 1. Concatena dos cadenas de texto

let texto1 = "Hi im Arturo";
let texto2 = texto1+" i love to travel and a girl very special for me"
console.log(texto2)

// 2. Muestra la longitud de una cadena de texto

console.log(texto2.length);

// 3. Muestra el primer y último carácter de un string

console.log(`Primer valor ${texto1[0]} y el ultimo valor ${texto1[11]}`);

// 4. Convierte a mayúsculas y minúsculas un string

console.log("Texto en minusculas "+texto1.toLowerCase());
console.log("Texto en mayusculas "+texto1.toUpperCase());

// 5. Crea una cadena de texto en varias líneas

console.log(`Hola como estas hijo de la verga 
    soy mencho wey 
    relaja tus pinches partidas
    soy mencho weyyy`);

// 6. Interpola el valor de una variable en un string

console.log(`Ya hize la fucking interpolacion que no mamen ${texto1}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let examplestring = "Hola Arturo Gey";
console.log(examplestring.replace(/ /g, "_",));  //Nota no supe como poner el guion en los demas en blanco:()

// 8. Comprueba si una cadena de texto contiene una palabra concreta
if(examplestring.includes("Arturo") == true){
    console.log("Simon si esta")
}else{
    console.log("Nel no esta");
}
// 9. Comprueba si dos strings son iguales
let stringprimero = "Holaa";
let strignsegundo = "Holaa";
console.log(strignsegundo == stringprimero);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(stringprimero.length == strignsegundo.length);