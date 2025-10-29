let productos = new Map([
  ["manzana", 2.5],
  ["pan", 3.0],
  ["leche", 4.5],
  ["arroz", 5.0],
  ["huevo", 6.0]
]);
let total = 0;
let seguir = true;
while (seguir) {
  let producto = prompt("Ingresa un producto (manzana, pan, leche, arroz, huevo) o 'fin' para terminar:");
  if (producto === null || producto.toLowerCase() === "fin") {
    seguir = false;
  } else if (productos.has(producto.toLowerCase())) {
    total += productos.get(producto.toLowerCase());
    console.log(`${producto} agregado. Total parcial: ${total.toFixed(2)}`);
  } else {
    console.log("Producto no disponible. Intenta nuevamente.");
  }
}
console.log("Compra finalizada. Total a pagar:", total.toFixed(2));