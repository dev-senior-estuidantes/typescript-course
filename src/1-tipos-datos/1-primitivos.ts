// Anotacion Explícita
let nombre: string = "Laura"; // string
let edad: number = 30; // number
let esActiva: boolean = true; // boolean

//Inferencia  (ts detecta el tipo automaticamente)
let ciudad = "Bogota"; // string
let peso = 65.5; // number
let inscrito = false; // boolean

// Tipo explícito
let firstName: string = "Dylan"; //tipo string

console.log(typeof firstName)

// null, undefined
let vacio: null = null;
let noDefinido: undefined = undefined

// ejemplo
let edad: number | null = null; //puede tener un numero o estar vacio

function obtenerNombre() string | undefined {
    return undefined; // aun no se a obtenido el nombre

}

// any Tipo universal (evitar en lo posble)
// permite cualquien tipo. 
// Desactiva las ventajas de TypeScritp.

let dato: any = "texto";
dato = 123;
dato = true;
// se deve evitar 

// unkowun - Similiar a any, pero más SVGAnimatedEnumeration.
let valor: unknown;
valor = "Hola";
valor = 123;

// No se puede usar sin comprobar el tipo
if (typeof valor === "string"){
    console.log(valor.toUpperCase());
}

