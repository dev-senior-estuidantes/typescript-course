import promptSync = require('prompt-sync');
// //usammos promptSync para solicitar datos al usu

const prompt = promptSync();
//Ejercicios datos primitivos
/* 1. Suma de dos números
•	Objetivo: Comprender la declaración de variables y operadores aritméticos básicos.
•	Pregunta: ¿Cómo podrías modificar este código para que la suma sea ingresada por el usuario? */
let num01: string = prompt('Ingresa tu edad');
let convernum = Number(num01)
let num02: number = 40;
let res: number = convernum + num02;
console.log(res);

/* 2. Concatenación de strings
•	Objetivo: Entender cómo unir cadenas de texto.
•	Pregunta: ¿Qué pasa si intentas concatenar un número con un string? */
//Lo que pasaria es que no realizaria ninguna operacion, sino que se pondria uno al lado del otro
//Para el caso de una suma, a la variable sumaNum le deje de tipos string y number para
// que no genere error, y lo que pasa es una concatenacion mas no realizo la suma
let numString: string = '200';
let numero: number = 400;
let sumaNum: number | string = numString + numero
console.log(sumaNum)


/* 3 Verificación de mayor de edad
•	Objetivo: Usar operadores relacionales y booleanos.
•	Pregunta: ¿Qué ocurre si la edad es exactamente 18? */
//Podriamos generar un aviso que diga que tiene la edad exacta!
let edadPersona: number = 18;
let mayoriaEdad: number = 18;

if (edadPersona === mayoriaEdad) {
    console.log('edad exacta!')
} else if(edadPersona > mayoriaEdad){
    console.log('eres mayor de edad')
} else {
    console.log('no eres mayor')
}
/* 4. Conversión de tipos (number a string)
•	Explicación: Se convierte un número a cadena de texto.
•	Objetivo: Comprender cómo hacer type casting.
•	Pregunta: ¿Qué otro método podrías usar para convertir un string a number? */
//Hay varios metodos, el paseFloat(), realizar el doble ~~ etc.

let numrString: string = "10";
let converNum: number = parseInt(numrString);
console.log(converNum);
console.log(typeof (converNum));

/* 5. Calcular el área de un rectángulo
•	Explicación: Se multiplica la base por la altura.
•	Objetivo: Aplicar operaciones matemáticas básicas.
•	Pregunta: ¿Cómo modificarías el código para que también calcule el perímetro?
 */
let base: number = 20;
let altura: number = 30;
let opcion: string = prompt('Ingresa tu opcion:  1: area, 2: perimetro');


switch (opcion) {
    case "1":
        let area: number = base * altura;
        console.log('El area es: ' + area)
        break;
    case "2":
        let perimetro: number = 2 * (base + altura)
        console.log('El perimetro es: ' + perimetro)
        break;
default:
    console.log('Ingresa una opcion validar')
break;
}

/* 6. Determinar si un número es par
•	Explicación: Se usa el operador módulo % para determinar si el residuo es 0.
•	Objetivo: Usar operaciones lógicas y aritméticas combinadas.
•	Pregunta: ¿Cómo cambiarías esto para verificar si un número es múltiplo de 3?
 */

let numValidar: string = prompt('Ingresa un numero para saber si es par, impar o multpilo de 3 o no multplo de 3  ');
let numRes: number = Number(numValidar);
if (numRes % 2 === 0 && numRes % 3 === 0) {
    console.log("Es par y multiplo de 3");
  } else {
    console.log("Es impar y no es multiplo de 3");
  }

/* 7. Uso de template literals
•	Explicación: Se usa la sintaxis de backticks ` para insertar variables dentro de un string.
•	Objetivo: Utilizar template strings.
•	Pregunta: ¿Cuál es la ventaja de usar template strings sobre la concatenación con +? */
// estoy pensandooo... 
