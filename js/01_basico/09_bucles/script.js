// for: contar del 1 al 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// for: recorrer un array
let frutas = ['manzana', 'banana', 'naranja'];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// while: contar hasta 3
let contador = 0;
while (contador < 3) {
  console.log(contador);
  contador++;
}

// do...while: ejecutar al menos una vez
let intentos = 0;
do {
  console.log('Intento:', intentos);
  intentos++;
} while (intentos < 0); // Se ejecuta una vez aunque la condición sea falsa

// break: salir cuando se encuentra algo
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 3) {
    console.log('¡Encontré el 3!');
    break;
  }
}

// continue: saltar elementos
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // saltar el 2
  console.log(i); // 0, 1, 3, 4
}
