// JavaScript puede responder a eventos del usuario
document.addEventListener('DOMContentLoaded', function() {
  // Mostrar un mensaje cuando la página se carga completamente
  console.log('¡Página cargada!');
  
  // Cambiar el contenido de un elemento cuando se hace clic
  document.body.addEventListener('click', function() {
    document.body.style.backgroundColor = '#f0f0f0';
  });
});
