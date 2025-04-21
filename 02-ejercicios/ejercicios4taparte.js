// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Arturo";

if  (nombre == "Arturo"){
    console.log("Es mi nombre "+nombre);
}else{
    console.log("Ese no es mi nombre");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let contraseña = "123AA";
let usuario = "ArturoF"

if  (contraseña == "123AA" && usuario == "ArturoF"){
    console.log("La constraseña & usuario coinciden");
}else{
    console.log("Contraseña o usuario incorrectos");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -1;

if  (numero == 0){
    console.log("El numero es cero");
}else if    (numero < 0){
    console.log("El numero es negativo");
}else{
    console.log("El numero es positivo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 18;
let añosfaltantes = (18 - edad);
if  (edad >= 18){
    console.log("Persona mayor de edad");
}else{
    console.log("Persona menor de edad le faltan "+añosfaltantes+" años")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let años = 17;
let valor = años >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(valor);


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 9;

if  (mes <= 12 && mes >= 1){
    if (mes == 12 || mes == 1 || mes == 2){
        console.log("Es Invierno");
    }else if (mes == 3 || mes == 4 || mes == 5){
        console.log("Es primavera");
        }else if (mes == 6 || mes == 7 || mes == 8){
            console.log("Es verano");
        }else if (mes == 9 || mes == 10 || mes == 11){
            console.log("Es otoño");
        }
    }else{
        console.log("Mes no existe");
    }

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes <= 12 && mes >= 1){
    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 10 || mes == 8 || mes == 12){
        console.log("El mes tiene 31 dias");
    }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
        console.log("El mes tiene 30 dias");
    }else{
        console.log("El mes tiene 28 o aveces 29 dias")
    }
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Chinese";

switch(idioma){
    case "Español":
        console.log("Hola mi chavo");
        break;
    case "English":
        console.log("Hi my brother, how are you?");
        break;
    case "Chinese":
        console.log("你好");
        break;
    case "Protugese":
        console.log("Óla");
        break;
    default :
        console.log("Idioma no registrado");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes){
    case 12:
        console.log("Es invierno");
        break;
    case 1:
        console.log("Es invierno");
        break;
    case 2:
        console.log("Es invierno");
        break;
    case 3:
        console.log("Es primavera");
        break;
    case 4:
        console.log("Es primavera");
        break;
    case 5:
        console.log("Es primavera");
        break;
    case 6:
        console.log("Es verano");
        break;
    case 7:
        console.log("Es verano");
        break;
    case 8:
        console.log("Es verano");
        break;
    case 9:
        console.log("Es otoño");
        break;
    case 10:
        console.log("Es otoño");
        break;
    case 11:
        console.log("Es otoño");
        break;
    default:
        console.log("Mes no existente");

}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes){
    case 12:
        console.log("31 dias");
        break;
    case 1:
        console.log("31 dias");
        break;
    case 2:
        console.log("28 o aveces 29 dias");
        break;
    case 3:
        console.log("31 dias");
        break;
    case 4:
        console.log("30 dias");
        break;
    case 5:
        console.log("31 dias");
        break;
    case 6:
        console.log("30 dias");
        break;
    case 7:
        console.log("31 dias");
        break;
    case 8:
        console.log("31 dias");
        break;
    case 9:
        console.log("30 dias");
        break;
    case 10:
        console.log("31 dias");
        break;
    case 11:
        console.log("30 dias");
        break;
    default:
        console.log("Mes no existente");

}