function combinarCatalogos(tiendaA, tiendaB) {
    let combinado = {};
    for (let producto in tiendaA) {
        combinado[producto] = tiendaA[producto];
    }
    for (let producto in tiendaB) {
        if (combinado[producto]) {
            combinado[producto] = Math.min(combinado[producto], tiendaB[producto]);
        } else {
            combinado[producto] = tiendaB[producto];
        }
    }
    for (let producto in combinado) {
        combinado[producto] = combinado[producto].toFixed(2);
    }
    return combinado;
}
console.log("Ingresa los precios de los productos para la Tienda A:");
let tiendaA = {
    laptop: parseFloat(prompt("Precio de laptop (Tienda A):")),
    mouse: parseFloat(prompt("Precio de mouse (Tienda A):")),
    teclado: parseFloat(prompt("Precio de teclado (Tienda A):"))
};

console.log("Ingresa los precios de los productos para la Tienda B:");
let tiendaB = {
    mouse: parseFloat(prompt("Precio de mouse (Tienda B):")),
    monitor: parseFloat(prompt("Precio de monitor (Tienda B):")),
    teclado: parseFloat(prompt("Precio de teclado (Tienda B):"))
};
let catalogoFinal = combinarCatalogos(tiendaA, tiendaB);
let mensaje = "Catálogo combinado (precio más bajo, con 2 decimales):\n";
for (let producto in catalogoFinal) {
    mensaje += `${producto}: S/.${catalogoFinal[producto]}\n`;
}
console.log(mensaje);
console.log(catalogoFinal);
