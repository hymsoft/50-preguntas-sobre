// Ejemplo con delegación de eventos
const lista = document.querySelector("#lista-tareas");

lista.addEventListener("click", function (event) {
  // event.target: el elemento donde se hizo clic (puede ser un <li> o un <span>)
  console.log("Target:", event.target);
  console.log("Texto del target:", event.target.textContent);

  // event.currentTarget: el <ul> al que se le asignó el listener
  console.log("CurrentTarget:", event.currentTarget);
  console.log("Tag del currentTarget:", event.currentTarget.tagName);

  // this es igual a event.currentTarget
  console.log("this:", this);
  console.log("Son iguales:", this === event.currentTarget); // true

  // Usar target para manejar clics en elementos hijos
  if (event.target.tagName === "BUTTON") {
    console.log("Se hizo clic en un botón:", event.target.textContent);
  }
});
