/* 3 Verificación de mayor de edad
•	Objetivo: Usar operadores relacionales y booleanos.
•	Pregunta: ¿Qué ocurre si la edad es exactamente 18? */

const promptsync = require("prompt-sync");

let edad1 : number =Number("ingresesu edad: ")

if(edad1 >= 18){
    console.log("eres mayor de edad")
}else{
    console.log("no eres mayor de edad")
}