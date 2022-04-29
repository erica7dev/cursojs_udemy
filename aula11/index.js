let alunos =['Luisa','Sofia','Pedro']
//alunos = 123;

console.log(alunos instanceof Array)

//----------------------

const raiz = function (n) {
  return n ** 0.5;
};

//return fica oculto
const raiz3 = (n) => n ** 0.5;

console.log(raiz(9));
console.log(raiz3(9));


function Pessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  }
};

const pessoa1 = Pessoa('Erica', 'Mont', 21);
const pessoa2 = Pessoa('Luna', 'Mont', 21);

console.log(pessoa1.nome, pessoa2.idade)