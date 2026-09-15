// Operadores aritméticos
let a = 10 + 5;   // 15
let b = 10 - 3;   // 7
let c = 4 * 2;    // 8
let d = 15 / 4;   // 3.75
let e = 15 % 4;   // 3 (resto)
let f = 2 ** 3;   // 8 (2 elevado a 3)

// Operadores de comparación
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 >= 5);   // true
console.log(5 <= 4);   // false

// Igualdad abstracta vs estricta
console.log(5 == '5');  // true (coerción)
console.log(5 === '5'); // false (diferentes tipos)
console.log(0 == false);  // true
console.log(0 === false); // false

// Operadores lógicos
let esMayor = 5 > 3 && 10 > 5;   // true (ambos verdaderos)
let esOpcion = 5 > 3 || 10 < 5;  // true (uno verdadero)
let noEs = !(5 > 3);              // false (invierte)
