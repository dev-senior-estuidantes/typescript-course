/* 1. Suma de dos números
•	Objetivo: Comprender la declaración de variables y operadores aritméticos básicos.
•	Pregunta: ¿Cómo podrías modificar este código para que la suma sea ingresada por el usuario? */

import promptSync from 'prompt-sync';

let num1: number = 5;
let num2: number = 6;

let sum: number = num1 + num2;

console.log(sum);

//Con entrada de usuario

let prompt = promptSync();

let numUser1: number = Number(prompt("Digite el primer numero: "));
let numUser2: number = Number(prompt("Digite el segundo numero: "));

let sumUser: number = num1 + num2;

console.log(`El resultado de la suma entre ${numUser1} y ${numUser2} es: ${sumUser}`);

export {}
