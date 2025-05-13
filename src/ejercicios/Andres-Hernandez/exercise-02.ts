/* 2. Concatenación de strings
•	Objetivo: Entender cómo unir cadenas de texto.
•	Pregunta: ¿Qué pasa si intentas concatenar un número con un string? */

let names: string = "Andres";
let age: number = 10;
let result: string = names +" tiene " + age + " años";
console.log(result);

/* Respuesta pregunta
En este caso, edad (que es un número) se convierte automaticamente en un string 
antes de la concatenacion
*/