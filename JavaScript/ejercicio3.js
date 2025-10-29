function reordenarPalabras() {
  let oracion = prompt("Escribe una oración con palabras separadas por espacios:");
  let resultado = oracion
    .split(" ")
    .map(palabra => palabra.toUpperCase())
    .sort();
  console.log(resultado);
}
reordenarPalabras();
