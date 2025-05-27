/* 4. Conversión de tipos (number a string)
•	Explicación: Se convierte un número a cadena de texto.
•	Objetivo: Comprender cómo hacer type casting.
•	Pregunta: ¿Qué otro método podrías usar para convertir un string a number? */

let numer : number = 18;
let edad2 : string = numer.toString();
console.log(`el usuario tiene ${edad2} años`);

//string a numero
let palabra: string = "hello typeScript";
let numer1: number = parseInt(palabra);
console.log(numer1);
