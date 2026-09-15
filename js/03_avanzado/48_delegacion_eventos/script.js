// archivo: script.js
// Sin delegación: múltiples listeners
const botones = document.querySelectorAll(".boton");
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    console.log("Clic en el botón");
  });
});

// Con delegación: un solo listener
const contenedor = document.getElementById("contenedor-botones");
contenedor.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("boton")) {
    console.log("Clic en el botón:", evento.target.textContent);
  }
});

// Ejemplo con lista dinámica
const lista = document.getElementById("lista");
lista.addEventListener("click", (evento) => {
  if (evento.target.tagName === "LI") {
    console.log("Clic en el elemento:", evento.target.textContent);
  }
});

// Agregar elemento dinámicamente (ya tiene listener)
const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Nuevo elemento";
lista.appendChild(nuevoElemento);
