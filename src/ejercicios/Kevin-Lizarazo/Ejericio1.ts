/* 1. Suma de dos números
•	Objetivo: Comprender la declaración de variables y operadores aritméticos básicos.
•	Pregunta: ¿Cómo podrías modificar este código para que la suma sea ingresada por el usuario? */

let nume1 : number = 3;
let nume2 : number = 6;
let sum1 : number = nume1 + nume2;

console.log(`la suma de los numeros es: ${sum1}`);

const promptSync1 = require("prompt-sync");
let numme3 : number=Number(promptSync1("digite el numero 1: "));
let numme4 : number=Number(promptSync1("digite el numero 2: "));
let sum2 : number = numme3 + numme4;
console.log(`la suma de los numeros ingresados es ${sum2}`);