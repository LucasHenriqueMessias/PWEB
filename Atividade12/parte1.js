class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    calcArea() {
        return this.altura * this.largura;
    }
}

objRetangulo = new Retangulo(10, 20);

alert(objRetangulo.calcArea());