// Declaración simple
function saludar() {
  console.log('¡Hola!');
}

// Con parámetros
function sumar(a, b) {
  return a + b;
}

// Con valor por defecto
function multiplicar(a, b = 1) {
  return a * b;
}

// Invocar funciones
saludar();                    // ¡Hola!
let resultado = sumar(5, 3);  // 8
console.log(multiplicar(4));   // 4 (b usa valor por defecto)

// Función que retorna un objeto
function crearUsuario(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    esMayor: edad >= 18
  };
}

let usuario = crearUsuario('Ana', 22);
console.log(usuario); // { nombre: 'Ana', edad: 22, esMayor: true }

// Función como expresión
let restar = function(a, b) {
  return a - b;
};

console.log(restar(10, 4)); // 6
