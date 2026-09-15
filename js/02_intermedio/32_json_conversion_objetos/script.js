// archivo: script.js
// --- Crear un objeto ---
const usuario = {
  nombre: "María",
  edad: 30,
  activa: true,
  direccion: {
    ciudad: "Buenos Aires",
    pais: "Argentina"
  },
  hobbies: ["leer", "correr", "programar"]
};

// --- Convertir a JSON (stringify) ---
const jsonString = JSON.stringify(usuario);
console.log(jsonString);
// '{"nombre":"María","edad":30,"activa":true,...}'

// Con indentación (pretty print)
const jsonFormateado = JSON.stringify(usuario, null, 2);
console.log(jsonFormateado);
// {
//   "nombre": "María",
//   "edad": 30,
//   ...
// }

// --- Convertir JSON a objeto (parse) ---
const objetoParseado = JSON.parse(jsonString);
console.log(objetoParseado.nombre); // "María"
console.log(objetoParseado.direccion.ciudad); // "Buenos Aires"

// --- Usar con localStorage ---
localStorage.setItem("usuario", JSON.stringify(usuario));
const guardado = JSON.parse(localStorage.getItem("usuario"));
console.log(guardado.nombre); // "María"

// --- Enviar datos a un servidor ---
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(usuario)
})
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log("Usuario creado:", datos);
  })
  .catch(error => {
    console.error("Error:", error);
  });

// --- Manejar errores en parse ---
try {
  const datos = JSON.parse("esto no es JSON válido");
} catch (error) {
  console.error("Error al parsear JSON:", error.message);
}

// --- Usar revivificador ---
const fechaJSON = '{"fecha":"2024-01-15T10:30:00.000Z"}';
const objeto = JSON.parse(fechaJSON, function (clave, valor) {
  if (clave === "fecha") {
    return new Date(valor);
  }
  return valor;
});
console.log(objeto.fecha instanceof Date); // true
