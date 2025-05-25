/* 4. Conversión de tipos (number a string)
•	Explicación: Se convierte un número a cadena de texto.
•	Objetivo: Comprender cómo hacer type casting.
•	Pregunta: ¿Qué otro método podrías usar para convertir un string a number? */

//Convertimos un numero a String, usando el metodo toString, aunque hay más formas
let num: number = 2025;

let txt: string = num.toString()

//Convertimos un string a number usando la función Number
let txt2: string = "2026";

let num2: number = Number(txt2);

console.log(`Numero a texto: ${txt}`);
console.log(`Texto a numero: ${num2}`);

export {}