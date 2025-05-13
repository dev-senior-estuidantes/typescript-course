// dato tipo string texto
let name1: string = "Carlos";
console.log(name1)

// dato tipo number numerico
let edad: number = 30;
console.log(edad);

// dato tipo boolean 
let esActiva1: boolean = true;
console.log(esActiva1)

//Inferencia (Typescript detecta el tipo automaticamente)
let ciudad = "Bogota"; // Es un string
let peso = 65.5; // Es un number
let inscrita = false; // Es un boolean 

/* Es buena practica la anotación explicita en grandes proyectos */


// dato tipo null y undefined
let vacio1: null = null;
let noDefinido: undefined = undefined;

console.log(vacio1);
console.log(noDefinido);

/* tipo any
tipo universal
Evitar usarlo ya que desactiva las ventajas de TS */

let dato: any = "text";
dato = 123;
dato = true;
console.log(dato);

/* ⚠️ Evita usar any a menos que estés migrando JS o accediendo a APIs muy dinámicas. */

/* dato unknown
similiar a any, pero mas seguro */
let valor: unknown;

valor = "hola";
valor = 123;

// no puedes usarlo directamente sin comprobar el tipo
if (typeof valor === "string"){
    console.log(valor.toLocaleLowerCase());
}

/* 🧠 unknown te obliga a verificar el tipo antes de usarlo, lo que mejora la seguridad del código. */

/* ✍️ Inferencia vs Anotación Explícita
inferencia: let edad = 20 >> código mas limpio
Anotacion: let edad: number = 20 >> Código más claro y mantenible */

/* 🎯 Buenas prácticas:
Usa inferencia para valores inmediatos y obvios

Usa anotación para:

Argumentos de funciones

Retornos

Objetos complejos

Variables sin asignación inmediata */