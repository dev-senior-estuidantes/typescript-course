/* 7. Uso de template literals
•	Explicación: Se usa la sintaxis de backticks ` para insertar variables dentro de un string.
•	Objetivo: Utilizar template strings.
•	Pregunta: ¿Cuál es la ventaja de usar template strings sobre la concatenación con +? */

let name5: string = "Andres";
let age2: number = 10;
let result1: string = `Mi nombre es ${name5} y tengo ${age2} años`;
console.log(result1);

/* Respuesta pregunta
La ventaja de usar template strings es que permiten insertar variables
y expresiones dentro de un string de forma más clara y legible, 
usando ${variable} dentro de las comillas invertidas (`), evitando múltiples signos + y 
facilitando la escritura de textos multilínea.
*/

