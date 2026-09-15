// archivo: principal.js
const worker = new Worker("worker.js");

worker.postMessage(1000000); // Enviar dato al worker

worker.onmessage = function (evento) {
  console.log("Resultado del worker:", evento.data);
};

worker.onerror = function (error) {
  console.error("Error en el worker:", error.message);
};
