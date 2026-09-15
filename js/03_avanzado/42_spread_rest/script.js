// Spread en arrays
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5]; // [1, 2, 3, 4, 5]

// Spread en objetos
const objeto1 = { a: 1, b: 2 };
const objeto2 = { ...objeto1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest en parámetros
function sumar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumar(1, 2, 3, 4)); // 10

// Rest en desestructuración
const [primero, ...resto] = [1, 2, 3, 4];
console.log(primero); // 1
console.log(resto); // [2, 3, 4]
