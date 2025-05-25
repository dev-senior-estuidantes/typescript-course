/* 3 Verificación de mayor de edad
•	Objetivo: Usar operadores relacionales y booleanos.
•	Pregunta: ¿Qué ocurre si la edad es exactamente 18? */

const promptSync = require('prompt-sync')();

console.log("Software para verificar si una persona es mayor de edad");
let numeroEdad: number = Number(promptSync("Ingrese su edad: "));

if (numeroEdad >= 18) {
    console.log("La persona es mayor de edad y puede ir a la fiesta");
} else {
    console.log("La persona no es admitida");
}
//en este caso hay que ser muy cuidadosos puesto que hay que poner >= en el if, ya que si no ponemos = si damos 18 el sistema no lo toma porque seria solo gente mayor de 18 años