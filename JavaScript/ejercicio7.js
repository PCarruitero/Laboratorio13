function contarPalabras(texto) {
    let palabras = texto.toLowerCase().split(/\s+/);
    let conteo = new Map();
    for (let palabra of palabras) {
        if (conteo.has(palabra)) {
            conteo.set(palabra, conteo.get(palabra) + 1);
        } else {
            conteo.set(palabra, 1);
        }
    }
    return conteo;
}
let textoUsuario = prompt("Ingresa un texto para contar las palabras:");
let resultado = contarPalabras(textoUsuario);
let mensaje = "Conteo de palabras:\n";
for (let [palabra, cantidad] of resultado) {
    mensaje += `${palabra}: ${cantidad}\n`;
}
console.log(mensaje);
