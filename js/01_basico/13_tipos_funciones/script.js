// 1. Función declarada (se eleva)
console.log(duplicar(5)); // 10 (funciona antes de la declaración)

function duplicar(x) {
  return x * 2;
}

// 2. Función expresión (no se eleva)
// console.log(triplicar(5)); // Error: Cannot access 'triplicar' before initialization

let triplicar = function(x) {
  return x * 3;
};

console.log(triplicar(5)); // 15

// 3. Función flecha
let cuadrado = (x) => x * x;

// Formas shorthand
let sumar = (a, b) => a + b;
let doble = x => x * 2;  // un solo parámetro: sin paréntesis
let saludo = () => '¡Hola!'; // sin parámetros

console.log(cuadrado(4));  // 16
console.log(sumar(3, 4));  // 7

// Diferencia con this
function Persona(nombre) {
  this.nombre = nombre;
  
  // Función tradicional: this es dinámico
  this.saludarTradicional = function() {
    setTimeout(function() {
      console.log('Hola, soy ' + this.nombre); // this es window (no la Persona);
      // como window.nombre no existe, imprime "undefined"
    }, 100);
  };
  
  // Función flecha: this es léxico (hereda el this)
  this.saludarFlecha = () => {
    setTimeout(() => {
      console.log('Hola, soy ' + this.nombre); // this es la Persona
    }, 100);
  };
}

let ana = new Persona('Ana');
ana.saludarFlecha(); // "Hola, soy Ana"
