// --- var se eleva e inicializa como undefined ---
console.log(miVar); // undefined (no da error)
var miVar = 10;
console.log(miVar); // 10

// --- let y const están en TDZ ---
// console.log(miLet); // ReferenceError: Cannot access 'miLet' before initialization
let miLet = 20;
console.log(miLet); // 20

// console.log(miConst); // ReferenceError
// const miConst = 30;

// --- Función declarada se eleva completamente ---
console.log(sumar(2, 3)); // 5 — funciona antes de la declaración

function sumar(a, b) {
  return a + b;
}

// --- Función expresión NO se eleva ---
// console.log(restar(5, 2)); // ReferenceError: Cannot access 'restar' before initialization
const restar = function (a, b) {
  return a - b;
};
console.log(restar(5, 2)); // 3

// --- Función flecha tampoco se eleva ---
// console.log(multiplicar(4, 3)); // ReferenceError
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 3)); // 12

// --- Ejemplo práctico del problema con var ---
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Imprime: 3, 3, 3 (var tiene ámbito de función, todas comparten la misma i)

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Imprime: 0, 1, 2 (let tiene ámbito de bloque, cada iteración tiene su propia j)
