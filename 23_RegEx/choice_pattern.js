//Tipo um || or pra regex

const reg = /\w+: (Matheus|João|Maria)/; // Nome: nadsuasudi

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: José")); //f
console.log(reg.test("Nome: Maria"));