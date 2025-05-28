/* 2. Concatenación de strings
•	Objetivo: Entender cómo unir cadenas de texto.
•	Pregunta: ¿Qué pasa si intentas concatenar un número con un string? */

let str1: string = "Hello ";
let str2: string = "World!";

//Forma uno, con la suma
let sum: string = str1 + str2;

//Forma dos, con el metodo .concat()
let con: string = str1.concat(str2);

//Forma tres, backticks (``) 
let back: string = `${str1}${str2}`;

//Todos las formas dan el mismo resultado, es una cuestión de gustos y comodidad
console.log(`Suma de strings: ${sum}`);
console.log(`Metodo concat: ${con}`);
console.log(`Con los backticks: ${back}`);

//Unir número con string
let num: number = 2;
let str: string = "2";

let mix: string = str + num;
console.log(mix);

export {}