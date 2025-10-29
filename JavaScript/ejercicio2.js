function filtrarYTransformar(arr) {
  return arr
    .filter(num => num >= 0)       
    .map(num => num ** 2)        
    .reduce((suma, num) => suma + num, 0);
}
let numeros = [];
let entrada;
while (true) {
  entrada = prompt("Ingresa un número (o escribe 'fin' para terminar):");
  if (entrada.toLowerCase() === "fin") break;
  let num = Number(entrada);
  if (!isNaN(num)) numeros.push(num);
}
let resultado = filtrarYTransformar(numeros);
console.log("La suma de los cuadrados de los números no negativos es: " + resultado);
