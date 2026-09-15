// Función con parámetros por defecto
function saludar(nombre = "Mundo", saludo = "Hola") {
  return `${saludo}, ${nombre}!`;
}

// Llamadas
console.log(saludar()); // "Hola, Mundo!"
console.log(saludar("Ana")); // "Hola, Ana!"
console.log(saludar("Ana", "Buenos días")); // "Buenos días, Ana!"
console.log(saludar(undefined, "Hey")); // "Hey, Mundo!"

// Parámetros por defecto con valores calculados
function crearUsuario(nombre, rol = "usuario", fecha = new Date()) {
  return { nombre, rol, fecha };
}

console.log(crearUsuario("Carlos"));
// { nombre: "Carlos", rol: "usuario", fecha: [Fecha actual] }
