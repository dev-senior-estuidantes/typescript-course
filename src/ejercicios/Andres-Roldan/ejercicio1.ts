const promptSync = require('prompt-sync')();

//Ejercicios datos primitivos
/* 1. Suma de dos números
•	Objetivo: Comprender la declaración de variables y operadores aritméticos básicos.
•	Pregunta: ¿Cómo podrías modificar este código para que la suma sea ingresada por el usuario? */
let numero1= 20
let numero2=10
 let suma1: number
 suma1 = numero1+numero2
 console.log("La suma es: " + suma1)
 //Para que la suma la haga el usuario

 let numeroA = Number(promptSync("Ingrese un número a sumar: "));
 let numeroB = Number(promptSync("Ingrese otro número a sumar: "));
 let suma3 = numeroA + numeroB;

 console.log("La suma es: " + suma3);
