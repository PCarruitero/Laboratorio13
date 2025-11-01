function contarLetras(texto) {
    texto = texto.toLowerCase(); 
    let conteo = {};
    for (let char of texto) {
        if (conteo[char]) {
            conteo[char]++;
        } else {
            conteo[char] = 1;
        }
    }
    return conteo;
}
let textoUsuario = prompt("Ingresa un texto para contar las letras:");
let resultado = contarLetras(textoUsuario);
let mensaje = "Conteo de caracteres:\n";
for (let letra in resultado) {
    mensaje += `${letra}: ${resultado[letra]}\n`;
}
console.log(resultado);
