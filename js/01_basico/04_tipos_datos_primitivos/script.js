// string
let nombre = 'María';
let saludo = "Hola";
let mensaje = `Bienvenida`; // template literal

// number
let edad = 25;
let precio = 19.99;
let grande = 9007199254740991; // número seguro máximo

// boolean
let esActivo = true;
let tieneAcceso = false;

// null
let resultado = null; // sin resultado intencionalmente

// undefined
let variable; // sin valor asignado

// symbol
let id = Symbol('id');

// bigint
let enorme = 9007199254740992n;

// Verificar tipos con typeof
console.log(typeof nombre);    // "string"
console.log(typeof edad);      // "number"
console.log(typeof esActivo);  // "boolean"
console.log(typeof resultado); // "object" (comportamiento histórico del lenguaje)
console.log(typeof variable);  // "undefined"
