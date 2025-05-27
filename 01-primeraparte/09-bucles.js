//Leccion de los bucles, tanto bucle FOR, While, Do While, For OF

//Bucle For
let prueba = 5;
for (let i = 0; i < 10; i++){
    console.log('lista de numeros '+i);
}

let arreglo = ["hola", "como", "estas", "chavalon"];
for (let j = 0; j < arreglo.length; j++){
    console.log(arreglo[j]);
}

//Bucle While
let i = 9;
while (i < 10){
    console.log("number "+i)
    i++;
}

//Bucle Do While
i = 11;
do{
    console.log("Hola mundo"+ i);
    i++;
}while(i < 10);

//Bucle For of  (Recorre valores de objetos iterables como arreglos, strings)
let arreglos = [1,2,4,"hola",2];

let myset = new Set(["hola","como","estas",9,0,76]);

let mapa = new Map([
    ["Nombre", "Arturo"],
    ["Edad", 23],
    ["Estadocivil", "Mas soltero que nada" ],
    ["Años", 25],
    ["FuturaNovia", "ValeriaI"],
    ["Aciertos", 65],
    ["Aciertos", 99]
]);

for (let valor of arreglos){
    console.log(valor);
}
for (let valor1 of myset){
    console.log(valor1);
}
for (let valor2 of mapa){
    console.log(valor2);
}


let palabra = "Arthur";
for (const letra of palabra){
    console.log(letra);
}
for (const letra in palabra){
    console.log(letra);
}

const edades = new Map([
  ["Ana", 25],
  ["Luis", 30],
  ["Carlos", 28]
]);

for (const [nombre, edad] of edades) {
  console.log(`${nombre} tiene ${edad} años`);
}

//Break and continue (Esto tiene como beneficio continuar sin tomar en cuenta un valor o terminar ejecucion ejemplo)

for (let i = 0; i < 9; i++){
    if  (i === 4){
        continue;
    }else if (i === 8){
        break;
    }
    console.log("numero "+i);
}