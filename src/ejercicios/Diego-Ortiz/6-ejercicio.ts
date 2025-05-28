/* 6. Determinar si un número es par
•	Explicación: Se usa el operador módulo % para determinar si el residuo es 0.
•	Objetivo: Usar operaciones lógicas y aritméticas combinadas.
•	Pregunta: ¿Cómo cambiarías esto para verificar si un número es múltiplo de 3?
 */

import promptSync from 'prompt-sync';
let prompt = promptSync();

//Capturamos un numero
let num: number = Number(prompt("Ingrese el número: "));

//Verificamos si es multiplo de 2
let esPar: boolean = num % 2 == 0;

//Mostramos el resultado correspondiente
console.log(esPar ? "El número ingresado es par" : "El número ingresado no es par");

//Verificamos si es multiplo de 3
let esMul3: boolean = num % 3 == 0;

//Mostramos el resultado correspondiente
console.log(esMul3 ? "El número ingresado es multiplo de 3" : "El número ingresado no es multiplo de 3");

export {}