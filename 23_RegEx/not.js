const notab = /[^ab]/; //a e b não podem estar isolados

console.log(notab.test("a"));//false
console.log(notab.test("Aqui tem a"));//true


const nottoaz = /[^a-z]/; //a e z isolado

console.log(nottoaz.test("123 as")); //true
console.log(nottoaz.test("asdasfdfsfeeqweqeqwes"));

const az = /[a-z]/;

console.log(nottoaz.test("asd123asdad"));//true