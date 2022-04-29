const digitos = /\d+/; //retorna info - se não tiver nada retorna null

console.log(digitos.exec("Tem o número 100 aqui"));
console.log(digitos.exec("Tem o número aqui")); //null