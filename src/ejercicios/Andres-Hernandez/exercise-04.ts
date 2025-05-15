/* 4. Conversión de tipos (number a string)
•	Explicación: Se convierte un número a cadena de texto.
•	Objetivo: Comprender cómo hacer type casting.
•	Pregunta: ¿Qué otro método podrías usar para convertir un string a number? */

let num: number = 10;
let str: string = num.toString();
console.log(str);

/* Respuesta pregunta
El metodo Number() y se usa para convertir un string a number de la siguiente manera:
*/

let str2: string = "10";
let num3: number = Number(str2);
console.log(num3);
