//mayor de edad

const edades: number[] = [25, 18, 42, 33, 19];

const obtenerMayor = (arr: number[]): number => Math.max(...arr);
const obtenerMenor = (arr: number[]): number => Math.min(...arr);

// Uso
console.log("Edad mayor:", obtenerMayor(edades)); 
console.log("Edad menor:", obtenerMenor(edades)); 