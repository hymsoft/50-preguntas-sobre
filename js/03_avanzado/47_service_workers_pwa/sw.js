// archivo: sw.js
const CACHE_NAME = "mi-cache-v1";
const urlsACachear = ["./", "./index.html", "./principal.js"];

// Instalación
self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsACachear);
    })
  );
});

// Activación
self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys().then((nombresCache) => {
      return Promise.all(
        nombresCache
          .filter((nombre) => nombre !== CACHE_NAME)
          .map((nombre) => caches.delete(nombre))
      );
    })
  );
});

// Interceptación de peticiones
self.addEventListener("fetch", (evento) => {
  evento.respondWith(
    caches.match(evento.request).then((respuesta) => {
      return respuesta || fetch(evento.request);
    })
  );
});
