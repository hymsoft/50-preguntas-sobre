// Comparaciones con == (abstracta)
console.log(5 == '5');       // true (string '5' se convierte a number)
console.log(0 == false);     // true (false se convierte a 0)
console.log('' == false);    // true
console.log(null == undefined); // true
console.log(null == 0);      // false
console.log(undefined == 0); // false

// Comparaciones con === (estricta)
console.log(5 === '5');      // false (diferentes tipos)
console.log(0 === false);    // false (diferentes tipos)
console.log('' === false);   // false
console.log(null === undefined); // false (diferentes tipos)
console.log(null === null);  // true
console.log(undefined === undefined); // true

// Ejemplo práctico del problema
let usuario = '0';
let id = 0;

// Esto puede causar bugs
if (usuario == id) {
  console.log('¡Coinciden!'); // Se ejecuta (incorrecto)
}

// Mejor usar ===
if (usuario === id) {
  console.log('¡Coinciden!');
} else {
  console.log('No coinciden'); // Se ejecuta (correcto)
}
