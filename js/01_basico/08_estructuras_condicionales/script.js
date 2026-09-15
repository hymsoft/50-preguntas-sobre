// if simple
let edad = 18;
if (edad >= 18) {
  console.log('Eres mayor de edad');
}

// if...else
let hora = 14;
if (hora < 12) {
  console.log('Buenos días');
} else {
  console.log('Buenas tardes');
}

// if...else if...else
let nota = 85;
if (nota >= 90) {
  console.log('Sobresaliente');
} else if (nota >= 70) {
  console.log('Aprobado');
} else {
  console.log('Reprobado');
}

// switch
let dia = 'lunes';
switch (dia) {
  case 'lunes':
  case 'martes':
  case 'miércoles':
  case 'jueves':
  case 'viernes':
    console.log('Día laboral');
    break;
  case 'sábado':
  case 'domingo':
    console.log('Fin de semana');
    break;
  default:
    console.log('Día no válido');
}
