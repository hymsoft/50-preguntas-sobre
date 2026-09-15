// archivo: script.js
// Función async que usa await
async function obtenerDatos() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

// Llamar a la función async
obtenerDatos();
console.log("Esto se imprime primero");

// Salida en consola:
// Esto se imprime primero
// (Luego, después de la respuesta, se imprime el objeto de datos)
