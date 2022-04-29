const validarId = /\d+ID\b/; //\b -> termina com

console.log(validarId.test("384284ID"));
console.log(validarId.test("384284"));
console.log(validarId.test("asd"));
console.log(validarId.test("asdasdID"));
console.log(validarId.test("ID"));
console.log(validarId.test("555ID"));

//
const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Nike"));
console.log(validaMarca.test("Marca: asd"));
console.log(validaMarca.test("Marca: "));
console.log(validaMarca.test("Nike"));
console.log(validaMarca.test("123132"));
console.log(validaMarca.test("Marca: Puma"));


//
const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIp.test("127.0.0.1"));
console.log(validarIp.test("8.8.8.8"));
console.log(validarIp.test("192.168.0.62"));

console.log(validarIp.test("192.168.0"));
console.log(validarIp.test("192"));
console.log(validarIp.test("asdasasd"));
console.log(validarIp.test("12312321"));
console.log(validarIp.test("1924.1648.04.62444"));

//

let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;  //3-16 / a-z 0-9 _

console.log(validarNomeUsuario.test("matheus_123"));//t

console.log(validarNomeUsuario.test("as"));
console.log(validarNomeUsuario.test("11111111111111111111111111111"));