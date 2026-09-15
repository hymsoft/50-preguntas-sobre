// archivo: worker.js
self.onmessage = function (evento) {
  const numero = evento.data;
  // Cálculo pesado
  let resultado = 0;
  for (let i = 0; i < numero; i++) {
    resultado += i;
  }
  self.postMessage(resultado);
};
