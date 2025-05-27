/* 6. Determinar si un número es par
•	Explicación: Se usa el operador módulo % para determinar si el residuo es 0.
•	Objetivo: Usar operaciones lógicas y aritméticas combinadas.
•	Pregunta: ¿Cómo cambiarías esto para verificar si un número es múltiplo de 3?
 */
const propmtsync = require("prompt-sync");

let numer3: number = Number(propmtsync("digite el numero a verificar"));

if(numer3 %2 ===0){
    console.log(`el numero ${numer3} es par`);
}else{
    console.log(`el numero ${numer3} es impar`);
}

if(numer3 %3 ===0){
    console.log("el numero es multiplo de 3");
}
else{
    console.log("el numero no es multiplo de 3");
}