const pontoRegex = /./; //qualquer caractere

console.log('.');
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));

const dRegex = /\d/; // [0-9]

console.log('d'); //qualquer digito
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123")); //true
console.log(dRegex.test("123sad")); //true


const dRegex2 = /\D/; // [^0-9]

console.log('D'); //não digitos
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123sad"));

const sRegex = /\s/; //qualquer um que não tenha espaço em branco

console.log('s');
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123sad"));

const wRegex = /\w/; // 0-9 a-z

console.log('w');
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));//false
console.log(wRegex.test("123"));
console.log(wRegex.test("123sad"));


const dia = /\d\d/; //2 digitos 0-9

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asd1"));

const palavrasPeloMenosTresLetras = /\w\w\w/;//3 dig alphanumeric

console.log(palavrasPeloMenosTresLetras.test("asd"));
console.log(palavrasPeloMenosTresLetras.test("asdd"));
console.log(palavrasPeloMenosTresLetras.test("as"));