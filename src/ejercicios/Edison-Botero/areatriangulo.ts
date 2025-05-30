//area de un triangulo

const promptSyncsc = require('prompt-sync')();

let base1: number = Number(promptSyncsc("Ingresa base del triangulo:"));
let altura1: number = Number(promptSyncsc("Ingresa altura del triangulo:"));

let area1:number=(base1 * altura1) / 2;

console.log(`El Area del Triangulo es:          ${area1}`);
