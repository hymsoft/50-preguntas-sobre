// archivo: script.js
const contenedor = document.getElementById("contenedor-botones");
contenedor.addEventListener("click", (evento) => {
  const boton = evento.target.closest(".boton");
  if (boton && contenedor.contains(boton)) {
    console.log("Clic en el botón:", boton.textContent);
  }
});
