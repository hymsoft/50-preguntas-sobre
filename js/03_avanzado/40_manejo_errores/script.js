function dividir(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Ambos argumentos deben ser números");
    }
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  } catch (error) {
    console.error("Error en división:", error.message);
    return null;
  } finally {
    console.log("Operación de división completada");
  }
}

// Ejemplos de uso
console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // null (después del error)
console.log(dividir("a", 2)); // null (TypeError)

// Salida en consola:
// Operación de división completada
// 5
// Error en división: No se puede dividir por cero
// Operación de división completada
// null
// Error en división: Ambos argumentos deben ser números
// Operación de división completada
// null
