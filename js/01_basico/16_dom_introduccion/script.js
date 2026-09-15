// El DOM representa este HTML como un árbol de nodos:
// document
//   └── html
//       ├── head
//       │   └── title
//       │       └── "Mi página"
//       └── body
//           ├── h1#titulo
//           │   └── "Hola"
//           ├── p.texto
//           │   └── "Primer párrafo"
//           └── p.texto
//               └── "Segundo párrafo"

// JavaScript puede manipular el DOM
let titulo = document.getElementById('titulo');
console.log(titulo.textContent); // "Hola"

// Modificar contenido
titulo.textContent = 'Nuevo título';

// Crear nuevo elemento
let nuevoP = document.createElement('p');
nuevoP.textContent = 'Tercer párrafo';
document.body.appendChild(nuevoP);

// Eliminar elemento
let primerP = document.querySelector('.texto');
primerP.remove();
