
/*
Clase 34 - Ejercicios: Objetos
*/

// 1. Crea un objeto con 3 propiedades
let newObject = {
    nombre: "Arturo",
    apellidos: "Figueroa",
    edad: 23
}
console.log(newObject);

// 2. Accede y muestra su valor
console.log(newObject.nombre);
console.log(newObject.edad);


// 3. Agrega una nueva propiedad

newObject.sexo = "masculino";
console.log(newObject.sexo);

// 4. Elimina una de las 3 primeras propiedades

delete newObject.nombre;
console.log(newObject);

// 5. Agrega una función e invócala

newObject.funcion = function(){
    console.log("Estamos trabajando")
}

console.log(newObject.funcion());

console.log(newObject);

// 6. Itera las propiedades del objeto

for (const element in newObject) {
    console.log(element + ": "+ newObject[element])
}

// 7. Crea un objeto anidado

let objeto1 = {
    animal: "perro",
    raza: "schnauzer",
    agresivo: "muy agresivo",
    edad: 32,
    comportamiento: {
        agresivo: "muy agresivo",
        jugueton: "nada jugueton"
    },
    actividad: function(){
        console.log("Esta dormido")
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(objeto1);
objeto1.actividad();
console.log(objeto1.comportamiento.jugueton);
console.log(objeto1.comportamiento.agresivo);

// 9. Comprueba si los dos objetos creados son iguales

console.log(objeto1 === objeto1.comportamiento)
console.log(objeto1.agresivo === objeto1.comportamiento.agresivo)

// 10. Comprueba si dos propiedades diferentes son iguales

if  (objeto1.nombre === objeto1.comportamiento.agresivo){
    console.log( "son iguales");
}else{
    console.log("son distintas propiedades");
}