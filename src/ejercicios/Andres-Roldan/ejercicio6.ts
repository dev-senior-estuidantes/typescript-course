/* 6. Determinar si un número es par
•	Explicación: Se usa el operador módulo % para determinar si el residuo es 0.
•	Objetivo: Usar operaciones lógicas y aritméticas combinadas.
•	Pregunta: ¿Cómo cambiarías esto para verificar si un número es múltiplo de 3?
 */
// Determinar si un número es par

// Declaramos un número
let numero: number = 3;

// Usamos el operador módulo para verificar si es par
if (numero % 2 === 0) {
  console.log(`${numero} es un número par.`);
} else {
  console.log(`${numero} es un número impar.`);
}

// Pregunta: ¿Cómo cambiarías esto para verificar si un número es múltiplo de 3?
// Respuesta:
if (numero % 3 === 0) {
  console.log(`${numero} es múltiplo de 3.`);
} else {
  console.log(`${numero} no es múltiplo de 3.`);
}
