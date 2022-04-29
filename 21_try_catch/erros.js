function saudacao(nome) {
  if(typeof nome != 'string') {
    throw new Error("o parâmetro nome precisa ser string");
  } else {
    console.log(`Olá ${nome}.`);
  }
}

saudacao("Matheus");
saudacao(5);

console.log("teste");


//
let b = 3

try {

  let a = 2 + b;

} catch(e) {

  console.log(e);
  //throw new Error(e);
} finally {

  console.log("Executou");

}

console.log('teste');