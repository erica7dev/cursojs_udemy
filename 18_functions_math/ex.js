function numeroAleatorio(num) {
  return Math.floor(Math.random() * num) + 1; //+1 porque o floor retira um numero
}

console.log(numeroAleatorio(10));
console.log(numeroAleatorio(100));
console.log(numeroAleatorio(50));