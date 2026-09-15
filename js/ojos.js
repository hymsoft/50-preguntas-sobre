// Ojos que siguen el mouse en las páginas loader ("Mirá la consola").
// Se mueve por transformada vía JS porque el mouse no existe en CSS.
(function () {
  var pupilas = document.querySelectorAll(".ojo .pupila");
  if (!pupilas.length) return;
  var RADIO = 14;
  document.addEventListener("mousemove", function (evento) {
    pupilas.forEach(function (pupila) {
      var r = pupila.closest(".ojo").getBoundingClientRect();
      var dx = evento.clientX - (r.left + r.width / 2);
      var dy = evento.clientY - (r.top + r.height / 2);
      var dist = Math.hypot(dx, dy) || 1;
      var m = Math.min(RADIO, dist / 10);
      pupila.style.transform =
        "translate(" + (dx / dist) * m + "px," + (dy / dist) * m + "px)";
    });
  });
})();
