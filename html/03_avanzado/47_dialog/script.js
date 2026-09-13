// Respaldo para navegadores sin soporte de closedby="any":
// cerrar el diálogo modal al hacer clic fuera de él.
const dialogo = document.querySelector("dialog");

dialogo.addEventListener("click", (evento) => {
    // El clic sobre el backdrop llega al elemento dialog.
    if (evento.target === dialogo) {
        dialogo.close();
    }
});
