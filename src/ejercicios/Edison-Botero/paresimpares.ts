//mostrar numeros pares e impares en vector

//Antes
let saludoNombre = function (nombre: string) {
  return 'Hola' + nombre;
};
console.log( saludoNombre('Jonathan') ); //Imprime Hola Jonathan

//Ahora
let saludar = (nombre: string )=> `Hola ${nombre}`;
console.log( saludar('Jonathan') ); //Imprime Hola Jonathan

let mensaje1: string = "Hello"

//mostrar numeros pares e impares ingrsando datos por teclado
const promptSyncs = require('prompt-sync')();
for (let i = 1; i<=6; i++){
     let number1: number = Number(promptSyncs("Ingresa el primer número:"));
     if (number1===0){
      console.log(`El numero es Indefinidio:     ${number1}`);
     }
     else{
      if (number1 % 2 ===0){
        console.log(`El numero es Par:          ${number1}`);
      } else{
           console.log(`El numero es Impar:     ${number1}`);
      }
     }

}

