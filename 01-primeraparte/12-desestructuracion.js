const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020
};

let {marca, año} = coche;
console.log(marca)
console.log(año);

// 1. Extrae las propiedades "marca" y "año" en variables individuales

//////////////////////////////////////////////////////

const frutas = ["manzana", "pera", "mango", "plátano"];

// 2. Extrae en variables la primera y tercera fruta

let [primera, , tercera] = frutas;
console.log(primera);
console.log(tercera);

////////////////////////////////////////
const num1 = [1, 2, 3];
const num2 = [4, 5, 6,5];

// 3. Únelos en un solo arreglo llamado "completo"

let completo = [...num1, ...num2];
console.log(completo);

///////////////////////////////////////

const baseUser = {
  nombre: "Arturo",
  edad: 23
};

// 4. Usa propagación para agregar una nueva propiedad "rol: 'admin'" sin modificar baseUser
let userExtendido = {
    ...baseUser,
    rol: "admin"
};

console.log(userExtendido);

//////////////////////////////////////////

const jugador = {
  nombre: "Messi",
  equipo: "Inter Miami",
  goles: 30
};

// 5. ¿Cuál es el valor de nuevoJugador.goles?

const nuevoJugador = {
  ...jugador,
  goles: 35
};

console.log(nuevoJugador.nombre + " tiene " + nuevoJugador.goles + " goles")

