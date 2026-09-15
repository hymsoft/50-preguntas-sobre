// Ejemplo de propagación
const abuelo = document.querySelector("#abuelo");
const padre = document.querySelector("#padre");
const hijo = document.querySelector("#hijo");

// Listeners en la fase de burbuja (por defecto)
abuelo.addEventListener("click", () => console.log("Abuelo - burbuja"));
padre.addEventListener("click", () => console.log("Padre - burbuja"));
hijo.addEventListener("click", () => console.log("Hijo - burbuja"));

// Listener en la fase de captura
abuelo.addEventListener("click", () => console.log("Abuelo - captura"), true);

// Al hacer clic en #hijo, el orden será:
// Abuelo - captura
// Hijo - burbuja
// Padre - burbuja
// Abuelo - burbuja

// --- Detener propagación ---
padre.addEventListener("click", function (event) {
  console.log("Padre ejecutado, deteniendo la propagación...");
  event.stopPropagation(); // el evento NO llegará a abuelo
});

// Ahora, al hacer clic en #hijo:
// Abuelo - captura
// Hijo - burbuja
// Padre - burbuja (detiene aquí)

// --- stopImmediatePropagation ---
hijo.addEventListener("click", function (event) {
  console.log("Primer listener del hijo");
  event.stopImmediatePropagation(); // impide que se ejecute otro listener en el mismo elemento
});

hijo.addEventListener("click", function () {
  console.log("Segundo listener del hijo"); // NUNCA se ejecuta
});
