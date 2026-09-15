const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const edad = document.querySelector("#edad");
const telefono = document.querySelector("#telefono");

// --- Verificar validez con checkValidity ---
function validarCampo(campo) {
  if (campo.checkValidity()) {
    console.log(`${campo.id}: válido`);
    return true;
  } else {
    console.log(`${campo.id}: inválido`);
    console.log("Mensaje:", campo.validationMessage);
    return false;
  }
}

// --- Usar la propiedad validity ---
function detallesValidacion(campo) {
  const validity = campo.validity;

  if (validity.valueMissing) {
    console.log("El campo es obligatorio");
  } else if (validity.typeMismatch) {
    console.log("El tipo de dato no coincide");
  } else if (validity.tooShort) {
    console.log("El valor es demasiado corto");
  } else if (validity.rangeUnderflow) {
    console.log("El valor es menor que el mínimo");
  } else if (validity.rangeOverflow) {
    console.log("El valor es mayor que el máximo");
  } else if (validity.patternMismatch) {
    console.log("El valor no cumple el patrón");
  }
}

// --- Validar al enviar ---
formulario.addEventListener("submit", function (event) {
  let esValido = true;

  if (!nombre.checkValidity()) {
    esValido = false;
    detallesValidacion(nombre);
  }

  if (!email.checkValidity()) {
    esValido = false;
    detallesValidacion(email);
  }

  if (!edad.checkValidity()) {
    esValido = false;
    detallesValidacion(edad);
  }

  if (!telefono.checkValidity()) {
    esValido = false;
    detallesValidacion(telefono);
  }

  if (!esValido) {
    event.preventDefault(); // evita el envío
    formulario.reportValidity(); // muestra errores al usuario
  }
});

// --- Validación en tiempo real ---
nombre.addEventListener("input", function () {
  validarCampo(nombre);
});
