/* 1. Suma de dos números
•	Objetivo: Comprender la declaración de variables y operadores aritméticos básicos.
•	Pregunta: ¿Cómo podrías modificar este código para que la suma sea ingresada por el usuario? */

let num1: number = 10;
let num2: number = 10;
let suma: number = num1 + num2;
console.log(suma);

// Modificación para que los numeros sean ingresados por el usuario
let number1: number = Number(prompt("Ingresa el primer número:"));
let number2: number = Number(prompt("Ingresa el segundo número:"));
let sum: number = number1 + number2;
console.log(`La suma de ${number1} y ${number2} es: ${sum}`);

// Se utiliza Number() para convertir la entrada del usuario (que es un string) a un número