/*function Cachorro(raca,patas,cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
}

Cachorro.prototype.uivar = function() {
  console.log("Auuuu");
}

Cachorro.prototype.latir = function() {
  console.log("AU au");
}

let husky = new Cachorro('Husky', 4, 'cinza');

husky.uivar();
husky.latir();

*/

class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir() {
    console.log("Au au");
  }

}

Cachorro.prototype.raca = 'SRD'; //nova prop a parte que não afeta classe
Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Amarelo');

console.log(labrador.patas);

labrador.latir();

let patas = Symbol(); //só pde ser declarada 1x
Cachorro.prototype[patas] = 4;

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

// acessando symbol
console.log(Cachorro.prototype[patas]);
console.log(labrador[patas]);

