// --- Prevenir envío de formulario ---
const formulario = document.querySelector("#mi-formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // evita que la página se recargue

  const formData = new FormData(formulario);
  const nombre = formData.get("nombre");
  console.log("Nombre enviado:", nombre);

  // Procesar datos con JavaScript...
});

// --- Prevenir navegación de un enlace ---
const enlace = document.querySelector("#enlace-especial");

enlace.addEventListener("click", function (event) {
  event.preventDefault(); // evita navegar a la URL
  console.log("Se hizo clic en el enlace, pero no se navegó");
});

// --- Prevenir comportamiento en un campo ---
const input = document.querySelector("#solo-numeros");

input.addEventListener("keypress", function (event) {
  // Solo permitir dígitos (0-9)
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
    console.log("Solo se permiten números");
  }
});
