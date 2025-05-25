/* 2. Concatenación de strings
•	Objetivo: Entender cómo unir cadenas de texto.
•	Pregunta: ¿Qué pasa si intentas concatenar un número con un string? */

let palabra1:String = "hola"
let palabra2: number = 190
let palabra3: String= palabra1+ "el numero es" + palabra2

console.log(palabra3)

//Hay error al querer unir un string con un number, en este caso si lo asignamos a otra variable para concatenar el number queda como string