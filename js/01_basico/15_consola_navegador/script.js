// Imprimir valores simples
console.log('Hola, mundo');
console.log(42);
console.log(true);
console.log(null);

// Imprimir objetos
let usuario = { nombre: 'Ana', edad: 25 };
console.log(usuario);

// Imprimir arrays
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

// Depurar con console.log
function sumar(a, b) {
  console.log('Sumando:', a, 'y', b); // ver qué valores recibe
  let resultado = a + b;
  console.log('Resultado:', resultado); // ver qué retorna
  return resultado;
}

sumar(5, 3);

// console.table para datos tabulares
let productos = [
  { nombre: 'Laptop', precio: 999 },
  { nombre: 'Mouse', precio: 25 },
  { nombre: 'Teclado', precio: 50 }
];
console.table(productos);

// Medir tiempo
console.time('bucle');
for (let i = 0; i < 1000000; i++) {}
console.timeEnd('bucle'); // muestra cuánto tardó

// Verificar tipos
let x;
console.log(typeof x);        // "undefined"
console.log(typeof 42);       // "number"
console.log(typeof 'texto');  // "string"
