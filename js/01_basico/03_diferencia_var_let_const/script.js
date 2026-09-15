// var tiene alcance de función
function ejemploVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (accesible fuera del bloque)
}

// let tiene alcance de bloque
function ejemploLet() {
  if (true) {
    let y = 20;
  }
  // console.log(y); // Error: y no está definida fuera del bloque
}

// const no permite reasignación
const z = 30;
// z = 40; // Error: Assignment to constant variable

// Pero objetos const pueden modificar sus propiedades
const persona = { nombre: 'Ana' };
persona.nombre = 'Luis'; // Esto funciona
// persona = {}; // Error: Assignment to constant variable

// Mostrar resultados por consola
ejemploVar(); // 10 (var es accesible fuera del bloque)
console.log(z); // 30
console.log(persona); // { nombre: 'Luis' }
