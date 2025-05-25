/* 4. Conversión de tipos (number a string)
•	Explicación: Se convierte un número a cadena de texto.
•	Objetivo: Comprender cómo hacer type casting.
•	Pregunta: ¿Qué otro método podrías usar para convertir un string a number? */

let NumeroPersona: number = 20;
let convertir: string = NumeroPersona.toString()
console.log("De number a string: " + convertir)
//convertimos el 20 a un string con la funcion ToString

//Ahora de String a number

let PalabraConvertir: string = "90";
let PalabraANumero: number = parseInt(PalabraConvertir);
console.log("De String a number: " + PalabraANumero)
