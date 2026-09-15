// Obtener un elemento del DOM
const titulo = document.querySelector("h1");
const boton = document.querySelector("button#mi-boton");

// --- Modificar contenido ---

// textContent: reemplaza todo el contenido por texto plano
titulo.textContent = "Nuevo título del documento";

// innerHTML: interpreta el contenido como HTML
titulo.innerHTML = "Nuevo <em>título</em> con formato";

// --- Modificar atributos ---

// Establecer un atributo href en un enlace
const enlace = document.querySelector("a");
enlace.setAttribute("href", "https://developer.mozilla.org");
enlace.setAttribute("target", "_blank");

// Leer un atributo actual
const hrefActual = enlace.getAttribute("href");
console.log(hrefActual); // "https://developer.mozilla.org"

// Establecer atributo booleano disabled
boton.setAttribute("disabled", "disabled");

// Eliminar atributo booleano
boton.removeAttribute("disabled");
