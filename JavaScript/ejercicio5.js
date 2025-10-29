let n = parseInt(prompt("Ingrese el número de términos para el arreglo: "));
let arreglo = [];
for (let i = 0; i < n ; i++) {
    let numero = parseFloat(prompt(`Ingrese el número ${i + 1}: `));
    arreglo.push(numero);
}
function tieneDuplicados(...arreglo) {
    let conjunto = new Set(arreglo);
    return conjunto.size !== arreglo.length;
}
console.log("¿El arreglo tiene duplicados?:", tieneDuplicados(...arreglo));
