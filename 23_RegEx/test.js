const reg1 = new RegExp('bola'); //condição

console.log(reg1.test("Tem bola?")); //true
console.log(reg1.test("Não tem"));


const reg2 = /bola/; //outra condição
let text = 'Tem bola na cesta';

console.log(reg2.test("Tem bola?"));
console.log(reg2.test("Não tem"));
console.log(reg2.test(text)); // true

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("3423442323434quadrado2342323424332"));