/* 7. Uso de template literals
•	Explicación: Se usa la sintaxis de backticks ` para insertar variables dentro de un string.
•	Objetivo: Utilizar template strings.
•	Pregunta: ¿Cuál es la ventaja de usar template strings sobre la concatenación con +? */

let lenguaje : string = "TypeScript";
let dias : number = 10;

let mensaje1 : string = `estoy aprendiendo ${lenguaje} desde hace ${dias} dias`;

console.log(mensaje1);

// template string nos permite insertar variables en una cadena de texto mas faciles tmabien nos permite 
//insertar expresiones ${a + b}, es mas limpio y es multilinea