let productos = new Map([["pan", 2.5], ["leche", 4.2], ["arroz", 3.8], ["huevos", 7.0], ["queso", 5.5]]);
let lista = "Productos disponibles:\n";
for (let [nombre, precio] of productos) {
    lista += `${nombre}: S/.${precio}\n`;
}
console.log(lista);
let entrada = prompt("Ingresa los productos que deseas comprar separados por comas:");
let compras = entrada.split(",").map(item => item.trim().toLowerCase());
let total = 0;
for (let producto of compras) {
    if (productos.has(producto)) {
        total += productos.get(producto);
    } else {
        console.log(`El producto "${producto}" no está disponible.`);
    }
}
console.log(`Total: S/.${total.toFixed(2)}`);
