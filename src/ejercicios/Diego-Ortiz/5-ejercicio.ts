/* 5. Calcular el área de un rectángulo
•	Explicación: Se multiplica la base por la altura.
•	Objetivo: Aplicar operaciones matemáticas básicas.
•	Pregunta: ¿Cómo modificarías el código para que también calcule el perímetro?
 */

//Declaramos la base y altura
let base: number = 5;
let altura: number = 10;

//Hallamos el área
let area: number = base * altura;

console.log(`El área del rectangulo de altura ${altura} y base ${base}, es de ${area} unidades cuadradas`);

//Y hallamos el perimetro
let perimetro: number = (base + altura) * 2

console.log(`El perimetro del rectangulo de altura ${altura} y base ${base}, es de ${perimetro} unidades`);

export {}

