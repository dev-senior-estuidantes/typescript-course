/* 3 Verificación de mayor de edad
•	Objetivo: Usar operadores relacionales y booleanos.
•	Pregunta: ¿Qué ocurre si la edad es exactamente 18? */

import promptSync from 'prompt-sync';
const prompt = promptSync();

//Como la mayoria de edad es de los 18 hacia arriba (>=), si el usuario ingresa exactamente 18, el programa lo toma como mayor de edad
//Se declara la variable esMayor, en la cual se tiene la condición de la mayoria de edad
let esMayor:boolean = Number(prompt("Digite su edad: ")) >= 18;

//Se imprime el resultado correspondiente
console.log(esMayor ? "Es mayor de edad" : "No es mayor de edad");


export {}