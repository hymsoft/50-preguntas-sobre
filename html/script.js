const grids = {
  basico: document.getElementById("grid-basico"),
  intermedio: document.getElementById("grid-intermedio"),
  avanzado: document.getElementById("grid-avanzado"),
};
const errorEl = document.getElementById("error");

function clearLoading() {
  Object.values(grids).forEach((grid) => {
    grid.innerHTML = "";
    grid.removeAttribute("aria-busy");
  });
}

fetch("ejemplos.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return res.json();
  })
  .then((ejemplos) => {
    clearLoading();
    ejemplos.forEach(({ num, titulo, nivel, carpeta, url }) => {
      const grid = grids[nivel];
      if (!grid) {
        return;
      }
      const li = document.createElement("li");

      const a = document.createElement("a");
      a.href = url;

      const numEl = document.createElement("span");
      numEl.className = "num";
      numEl.textContent = num;

      const tituloEl = document.createElement("span");
      tituloEl.className = "titulo";
      tituloEl.textContent = titulo;

      const rutaEl = document.createElement("span");
      rutaEl.className = "ruta";
      rutaEl.textContent = carpeta;

      a.append(numEl, tituloEl, rutaEl);
      li.append(a);
      grid.append(li);
    });
  })
  .catch((err) => {
    console.error(err);
    clearLoading();
    if (errorEl) {
      errorEl.hidden = false;
      errorEl.textContent =
        "No se pudo cargar ejemplos.json. Abrí con Live Server.";
    }
  });
