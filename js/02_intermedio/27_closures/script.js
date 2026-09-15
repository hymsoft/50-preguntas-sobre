// --- Closure básico: función que recuerda su ámbito ---
function crearSaludo(saludo) {
  return function (nombre) {
    return `${saludo}, ${nombre}!`;
  };
}

const saludarHola = crearSaludo("Hola");
const saludarAdios = crearSaludo("Adiós");

console.log(saludarHola("María"));    // "Hola, María!"
console.log(saludarAdios("Carlos"));  // "Adiós, Carlos!"

// --- Estado privado con closures ---
function crearContador() {
  let cuenta = 0; // variable privada — no accesible desde fuera

  return {
    incrementar() { cuenta++; },
    decrementar() { cuenta--; },
    valor() { return cuenta; }
  };
}

const contador = crearContador();
contador.incrementar();
contador.incrementar();
contador.incrementar();
console.log(contador.valor()); // 3

contador.decrementar();
console.log(contador.valor()); // 2

// No se puede acceder directamente a 'cuenta'
// console.log(contador.cuenta); // undefined

// --- Fábrica de funciones ---
function crearMultiplicador(factor) {
  return function (numero) {
    return numero * factor;
  };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log(duplicar(5));   // 10
console.log(triplicar(5));  // 15

// --- Closure en un bucle (problema común) ---
// Solución con let (recomendada)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let:", i), 100);
}
// Imprime: 0, 1, 2
