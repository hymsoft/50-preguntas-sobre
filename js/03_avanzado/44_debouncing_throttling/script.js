// Implementación de debounce
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Implementación de throttle
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Ejemplo de uso: debounce en input de búsqueda
const buscar = debounce((evento) => {
  console.log("Buscando:", evento.target.value);
}, 300);

// Ejemplo de uso: throttle en scroll
const manejarScroll = throttle(() => {
  console.log("Posición de scroll:", window.scrollY);
}, 100);

// Agregar event listeners
document.getElementById("busqueda").addEventListener("input", buscar);
window.addEventListener("scroll", manejarScroll);
