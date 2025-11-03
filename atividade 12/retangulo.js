function Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

let retangulo = new Retangulo(5, 10);
alert("Área do retângulo: " + retangulo.calcularArea());