let auto = {
    marca: prompt("Ingresa la marca del auto:"),
    modelo: prompt("Ingresa el modelo del auto:"),
    año: prompt("Ingresa el año del auto:"),
    detalles: function() {
        let mensaje = `Auto:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.año}`;
        console.log(mensaje);
    }
};
auto.detalles();
