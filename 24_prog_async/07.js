function* criadorId() { //loop controlado
  let id = 0;
  while(true) {
    yield id++; //salva valor da promise em algum lugar da memória
  }
}

let criaId = criadorId();

console.log(criaId.next().value); //next => mesmo que then
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);

console.log(criaId.next());//{ value: 7, done: false }