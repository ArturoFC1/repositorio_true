//Este es el modulo de condicionales en JS 

/** 
Los condicionales son pruebas o condiciones que se deben de cumplir para ejecutar una determinada tarea o
linea de codigo, ejemplo.
*/

//else, else if, if

let edad = 54;

if  (edad <= 23 && edad >= 18){
    console.log("Es la edad masomenos del arthur");
}else if    (edad < 18){
    console.log("Es menor de edad");
}   else{
    console.log("Ese wey ya esta ruko");
}

//operador ternario

let mensaje = edad <= 50 ? "La edad es menor a 50" : "La edad es mayor a 50";
console.log(mensaje);

//Switch

let operacion = "suma";
let op;
switch(operacion){
    case "suma":
        op = ("Es suma "+2+2);
        break;
    case "resta":
        op = (2+2);
        break;
    case "multiplicacion":
        op = (2+2);
        break;
    case "division":
        op = (2+2);
        break;
    default:
        op = "valor no reconocido";
}
console.log(op);

