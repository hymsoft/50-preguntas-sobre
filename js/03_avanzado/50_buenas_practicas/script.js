// archivo: script.js
// Ejemplo de código que sigue buenas prácticas

// 1. Usar const y let
const API_URL = "https://jsonplaceholder.typicode.com";
let usuarioActual = null;

// 2. Función pura
function calcularTotal(precios) {
  return precios.reduce((total, precio) => total + precio, 0);
}

// 3. Async/await con manejo de errores
async function obtenerUsuario(id) {
  try {
    const respuesta = await fetch(`${API_URL}/users/${id}`);
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    return await respuesta.json();
  } catch (error) {
    console.error("Error obteniendo usuario:", error);
    return null;
  }
}

// 4. Nombres descriptivos
function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  return edad;
}

// 5. Uso de módulos (import/export)
export function formatearMoneda(cantidad, moneda = "USD") {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: moneda,
  }).format(cantidad);
}

// 6. Throttling para eventos frecuentes
function throttledScroll() {
  let enThrottle = false;
  return function () {
    if (!enThrottle) {
      console.log("Scroll:", window.scrollY);
      enThrottle = true;
      setTimeout(() => (enThrottle = false), 100);
    }
  };
}

window.addEventListener("scroll", throttledScroll());

// Mostrar resultados por consola
console.log(calcularTotal([10, 20, 30])); // 60
obtenerUsuario(1); // loguea el usuario con id 1
console.log(calcularEdad("1990-05-15"));
console.log(formatearMoneda(1234.5, "USD"));
