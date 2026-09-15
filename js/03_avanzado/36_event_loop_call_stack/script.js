console.log("1"); // Síncrono

setTimeout(() => {
  console.log("2"); // Tarea asíncrona
}, 0);

Promise.resolve().then(() => {
  console.log("3"); // Microtarea
});

console.log("4"); // Síncrono

// Salida en consola:
// 1
// 4
// 3
// 2
