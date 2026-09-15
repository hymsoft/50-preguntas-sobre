// Geolocation API
navigator.geolocation.getCurrentPosition(
  (posicion) => {
    console.log("Latitud:", posicion.coords.latitude);
    console.log("Longitud:", posicion.coords.longitude);
  },
  (error) => {
    console.error("Error de geolocalización:", error.message);
  }
);

// Clipboard API
async function copiarAlPortapapeles(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    console.log("Texto copiado al portapapeles");
  } catch (error) {
    console.error("Error al copiar:", error);
  }
}

// Notifications API
if ("Notification" in window) {
  Notification.requestPermission().then((permiso) => {
    if (permiso === "granted") {
      new Notification("¡Hola desde JavaScript!");
    }
  });
}

// Web Storage API
localStorage.setItem("usuario", JSON.stringify({ nombre: "Ana" }));
const usuario = JSON.parse(localStorage.getItem("usuario"));
console.log(usuario.nombre); // "Ana"
