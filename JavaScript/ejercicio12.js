function gestionarEmpleados(empleados) {
    let mapa = new Map();
    for (let empleado of empleados) {
        if (!mapa.has(empleado.area)) {
            mapa.set(empleado.area, { empleados: [], salarios: [] });
        }
        mapa.get(empleado.area).empleados.push(empleado.nombre);
        mapa.get(empleado.area).salarios.push(empleado.salario);
    }
    let resultado = {};
    for (let [area, datos] of mapa) {
        let total = datos.salarios.reduce((sum, s) => sum + s, 0);
        let promedio = total / datos.salarios.length;
        resultado[area] = {
            empleados: datos.empleados,
            promedio: promedio.toFixed(2)
        };
    }
    return resultado;
}
let cantidad = parseInt(prompt("¿Cuántos empleados deseas ingresar?"));
let empleados = [];
for (let i = 0; i < cantidad; i++) {
    let id = parseInt(prompt(`ID del empleado #${i + 1}:`));
    let nombre = prompt(`Nombre del empleado #${i + 1}:`);
    let area = prompt(`Área de trabajo de ${nombre}:`);
    let salario = parseFloat(prompt(`Salario de ${nombre}:`));
    empleados.push({ id, nombre, area, salario });
}
let resultado = gestionarEmpleados(empleados);
let mensaje = "Empleados por área:\n";
for (let area in resultado) {
    mensaje += `\nÁrea: ${area}\n`;
    mensaje += `Empleados: ${resultado[area].empleados.join(", ")}\n`;
    mensaje += `Salario promedio: S/.${resultado[area].promedio}\n`;
}
console.log(mensaje);
console.log(resultado);
