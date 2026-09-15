const numeros = [1, 2, 3, 4, 5];

// --- forEach: ejecutar una acción por cada elemento ---
numeros.forEach(function (numero, indice) {
  console.log(`Índice ${indice}: valor ${numero}`);
});

// --- map: transformar cada elemento ---
const dobles = numeros.map(function (numero) {
  return numero * 2;
});
console.log(dobles); // [2, 4, 6, 8, 10]
console.log(numeros); // [1, 2, 3, 4, 5] — no se modifica

// Con función flecha
const triplicados = numeros.map(n => n * 3);
console.log(triplicados); // [3, 6, 9, 12, 15]

// --- filter: seleccionar elementos ---
const pares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});
console.log(pares); // [2, 4]

const mayoresQueTres = numeros.filter(n => n > 3);
console.log(mayoresQueTres); // [4, 5]

// --- reduce: acumular en un solo valor ---
const suma = numeros.reduce(function (acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(suma); // 15

// Con función flecha
const producto = numeros.reduce((acc, n) => acc * n, 1);
console.log(producto); // 120

// --- Combinando métodos ---
const resultado = numeros
  .filter(n => n % 2 !== 0)  // [1, 3, 5]
  .map(n => n * 10);          // [10, 30, 50]
console.log(resultado); // [10, 30, 50]
