//elemento pode se repetir

const umOuMaisNumeros = /\d+/;//digitos 

console.log(umOuMaisNumeros.test("1518"));//t
console.log(umOuMaisNumeros.test(""));//f
console.log(umOuMaisNumeros.test("asdasdas"));//f
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("1511231231233123121323123121238"));