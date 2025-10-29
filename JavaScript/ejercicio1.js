let n = parseInt(prompt("Ingrese el número de términos para el arreglo:"));
let arreglo = [];
for (let i = 0; i < n ; i++) {
    let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
    arreglo.push(numero);
}
function doblarNumeros(...arreglo) {
    let arregloDoblado = arreglo.map(num => num * 2);
    return arregloDoblado;
}
console.log("Arreglo doblado:", doblarNumeros(...arreglo));