const caja = document.querySelector(".caja");

// --- Usar style (estilos en línea) ---
caja.style.backgroundColor = "#ff6600";
caja.style.color = "white";
caja.style.padding = "20px";
caja.style.borderRadius = "8px";

// --- Usar classList (forma recomendada) ---
caja.classList.add("activa");         // agrega la clase "activa"
caja.classList.add("destacada", "visible"); // agrega varias clases
caja.classList.remove("oculta");      // elimina la clase "oculta"
caja.classList.toggle("modo-oscuro"); // alterna la clase

// Verificar si tiene una clase
if (caja.classList.contains("activa")) {
  console.log("La caja está activa");
}

// Reemplazar una clase
caja.classList.replace("vieja-clase", "nueva-clase");

// --- Usar className (reemplaza todas las clases) ---
caja.className = "caja activa visible";
