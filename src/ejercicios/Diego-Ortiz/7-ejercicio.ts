/* 7. Uso de template literals
•	Explicación: Se usa la sintaxis de backticks ` para insertar variables dentro de un string.
•	Objetivo: Utilizar template strings.
•	Pregunta: ¿Cuál es la ventaja de usar template strings sobre la concatenación con +? */

//Datos que seran insertados en un string
let año: number = 2025;
let casado: boolean = false;

//Comparamos `` con la concatenacion
let back: string = `Hello, world ${año}, ${casado ? "estoy casado" : "no estoy casado"}`;
let con: string = "Hello, world " + año + ", " + (casado ? "estoy casado" : "no estoy casado");


console.log(`Texto con \`\`: ${back}`);
console.log("Texto con concatenacion:", con);

//Si bien dan el mismo resultado, en muchas ocasiones el `` resulta mas comodo y consiso a la hora de insertar información en una string
//Ademas el `` permite strings de varias lineas a diferencia de las comillas que solo permiten una linea, ejemplo:

let str = `
    Linea uno,
    Linea dos
`;

console.log(`String de varias lineas: ${str}`);

export {}
