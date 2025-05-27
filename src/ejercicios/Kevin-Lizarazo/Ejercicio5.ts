/* 5. Calcular el área de un rectángulo
•	Explicación: Se multiplica la base por la altura.
•	Objetivo: Aplicar operaciones matemáticas básicas.
•	Pregunta: ¿Cómo modificarías el código para que también calcule el perímetro?
 */
export function area(base:number, altura: number): number{//creacion de function, se usa export para poderlas usar en el archivo
    return base*altura;
 }

 export function perimetroRectangulo(base:number, altura:number):number{
    return 2*(base+altura);
 }

let base1: number = 30;
let altura1: number = 40;
let area1 : number = area(base1, altura1);
console.log(area1);

//perimetro
let perimetro: number = perimetroRectangulo(base1, altura1);
console.log(perimetro);