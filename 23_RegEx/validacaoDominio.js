const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.horadecodar.com.br"));
console.log(validaDominio.test("www.horadecodar"));//f
console.log(validaDominio.test("horadecodar.com.br"));

//
const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("matheus@gmail.com"));
console.log(validarEmail.test("matheus@gmail"));//f
console.log(validarEmail.test("gmail.com"));//f
console.log(validarEmail.test("matheus@gmail.com.br"));
console.log(validarEmail.test("gmail@gmail.gmail.gmail"));


//
const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/;

console.log(validarDataNasc.test('05/02/2000'));
console.log(validarDataNasc.test('5/2/2000'));//f
console.log(validarDataNasc.test('05-02-2000'));
console.log(validarDataNasc.test('05/02/00'));//f
console.log(validarDataNasc.test('12/12/1999'));
console.log(validarDataNasc.test('99/99/9999'));//f
console.log(validarDataNasc.test('31/00/2010'));