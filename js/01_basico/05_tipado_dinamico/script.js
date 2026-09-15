// Variable que cambia de tipo
let cosa = 42;          // number
cosa = 'ahora soy texto'; // string
cosa = true;            // boolean

// Coerción de tipos (puede ser confusa)
console.log(5 + '3');    // "53" (número se convierte a string)
console.log('5' - 3);    // 2 (string se convierte a number)
console.log('5' + 3);    // "53" (string gana en concatenación)
console.log(true + 1);   // 2 (true se convierte a 1)

// Verificación de tipo con typeof
let x;
console.log(typeof x);           // "undefined"
console.log(typeof 42);          // "number"
console.log(typeof 'hola');      // "string"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object" (arrays son objetos)

// Conversión explícita (más seguro)
let numero = 10;
let texto = String(numero);   // "10"
let otroNumero = Number('42'); // 42
let bool = Boolean(0);         // false
