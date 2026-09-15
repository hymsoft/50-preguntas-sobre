// Crear una Promesa
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("¡Éxito!");
  }, 1000);
});

// Encadenar Promesas
miPromesa
  .then((resultado) => {
    console.log(resultado); // "¡Éxito!"
    return resultado.toUpperCase();
  })
  .then((nuevoResultado) => {
    console.log(nuevoResultado); // "¡ÉXITO!"
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Operación completada");
  });
