function invertirMap(map) {
    let invertido = new Map();
    for (let [clave, valor] of map) {
        invertido.set(valor, clave);
    }
    return invertido;
}
let cantidad = parseInt(prompt("¿Cuántos países quieres ingresar?"));
let capitales = new Map();
for (let i = 0; i < cantidad; i++) {
    let pais = prompt(`Ingresa el nombre del país #${i + 1}:`);
    let capital = prompt(`Ingresa la capital de ${pais}:`);
    capitales.set(pais, capital);
}
let invertido = invertirMap(capitales);
let mensaje = "Mapa invertido (Capital → País):\n";
for (let [capital, pais] of invertido) {
    mensaje += `${capital} → ${pais}\n`;
}
console.log(mensaje);
