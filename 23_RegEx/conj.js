const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6"));
console.log(reg1.test("Temos o número 2"));
console.log(reg1.test("Temos o número 23"));//true
console.log(reg1.test("Temos o número 60"));

const reg2 = /[0-9]/;

console.log(reg1.test("Temos o número 65448484884848484"));//de 1 a 9, true
console.log(reg1.test("Temos o número"));