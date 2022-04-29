class Carro {
  constructor(marca, cor, gasolinaRestante, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo; //leia-se gasosa
  }

  dirigir(km) { // gasta gasosa
    let litrosConsumidos = km / this.consumo; //calc. de gasto
    this.gasolinaRestante -= litrosConsumidos;

  }

  abastecer(l) { //add gasosa
    this.gasolinaRestante += l;

  }
}

let carro = new Carro("VW", "Cinza", 100, 14);

console.log(carro);

carro.dirigir(100); //km

console.log(carro);

carro.abastecer(10); //l

console.log(carro);