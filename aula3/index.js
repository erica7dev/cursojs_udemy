let n1 = 6;
let n2 = 65;
let n3 = '65';

console.log(n1 * n2 + (7));
console.log(n1 ** 4);
console.log(n1 / n2);
console.log(n2 % n1);

console.log(typeof n3);

//Desafio
const n = "Luiz Otávio Miranda";
let idade = 33;
let peso = 84;
let imc;
const altura = 1.80;
let anoNasc = 2022 - idade;

imc = Math.round((peso / (altura * altura))); 

console.log(`${n} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc}. Ele nasceu em ${anoNasc}`);
