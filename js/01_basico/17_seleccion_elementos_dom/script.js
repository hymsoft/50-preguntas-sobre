// getElementById: seleccionar por ID
let contenedor = document.getElementById('contenedor');
console.log(contenedor);

// querySelector: primer elemento que coincida
let primerParrafo = document.querySelector('.contenido');
console.log(primerParrafo.textContent); // "Párrafo 1"

// querySelector con selector complejo
let titulo = document.querySelector('#contenedor > h1');
let destacado = document.querySelector('[data-role="destacado"]');

// querySelectorAll: todos los elementos que coincidan
let todosLosParrafos = document.querySelectorAll('.contenido');
console.log(todosLosParrafos.length); // 2

// Iterar sobre NodeList
todosLosParrafos.forEach(function(p, indice) {
  console.log(`Párrafo ${indice + 1}:`, p.textContent);
});

// Convertir NodeList a array para usar métodos de array
let arrayParrafos = Array.from(todosLosParrafos);
console.log(Array.isArray(arrayParrafos)); // true

// Verificar si se encontró un elemento
let noExiste = document.querySelector('.inexistente');
if (noExiste) {
  console.log('Elemento encontrado');
} else {
  console.log('Elemento no encontrado');
}
