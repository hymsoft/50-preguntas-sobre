// archivo: script.js
// --- Desestructuración de arrays ---
const colores = ["rojo", "verde", "azul"];

const [primero, segundo, tercero] = colores;
console.log(primero);  // "rojo"
console.log(segundo);  // "verde"
console.log(tercero);  // "azul"

// Saltar elementos
const [a, , c] = colores; // salta el segundo
console.log(a); // "rojo"
console.log(c); // "azul"

// Valores por defecto
const [x = 0, y = 0, z = 0, w = 0] = [10, 20];
console.log(x, y, z, w); // 10, 20, 0, 0

// Rest elements
const [primeroArr, ...resto] = [1, 2, 3, 4, 5];
console.log(primeroArr); // 1
console.log(resto);      // [2, 3, 4, 5]

// Intercambiar variables
let [var1, var2] = ["a", "b"];
[var1, var2] = [var2, var1];
console.log(var1, var2); // "b", "a"

// --- Desestructuración de objetos ---
const persona = {
  nombre: "Lucía",
  edad: 28,
  ciudad: "Córdoba"
};

const { nombre, edad, ciudad } = persona;
console.log(nombre);  // "Lucía"
console.log(edad);    // 28

// Renombrar variables
const { nombre: nombrePersona, edad: edadPersona } = persona;
console.log(nombrePersona); // "Lucía"
console.log(edadPersona);   // 28

// Valores por defecto
const { nombre: nombre2, profesion = "No especificada" } = persona;
console.log(nombre2);    // "Lucía"
console.log(profesion);  // "No especificada"

// Rest properties
const { nombre: nombre3, ...restoDatos } = persona;
console.log(nombre3);    // "Lucía"
console.log(restoDatos); // { edad: 28, ciudad: "Córdoba" }

// --- Desestructuración anidada ---
const usuario = {
  id: 1,
  perfil: {
    nombre: "Pedro",
    direccion: {
      ciudad: "Rosario",
      pais: "Argentina"
    }
  }
};

const { perfil: { nombre: nombreUsuario, direccion: { ciudad: ciudadUsuario } } } = usuario;
console.log(nombreUsuario); // "Pedro"
console.log(ciudadUsuario); // "Rosario"

// --- En parámetros de función ---
function crearUsuario({ nombre, email, rol = "user" }) {
  console.log(`${nombre} (${email}) - Rol: ${rol}`);
}

crearUsuario({ nombre: "Sofia", email: "sofi@ejemplo.com" });
// "Sofia (sofi@ejemplo.com) - Rol: user"

// --- Con map y desestructuración ---
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Carmen", edad: 35 }
];

const nombres = personas.map(({ nombre }) => nombre);
console.log(nombres); // ["Ana", "Luis", "Carmen"]
