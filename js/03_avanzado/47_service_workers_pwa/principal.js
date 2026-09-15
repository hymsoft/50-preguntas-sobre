// archivo: principal.js
// Registro del Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registro) => {
      console.log("Service Worker registrado:", registro.scope);
    })
    .catch((error) => {
      console.error("Error al registrar Service Worker:", error);
    });
}
