let pontos = 1000.67;
let pontos2 = 1500;

const res = Number.isInteger(pontos)? 'é verdade' : 'negativo!';
console.log(res);

//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia);

const data = new Date(2019, 3, 20, 14, 27);
console.log(data.toString())
console.log('Dia', data.getDate());
console.log('Dia', data.getMonth() + 1)//começa do 0
console.log('Dia', data.getFullYear());
console.log('Dia', data.getHours());
console.log('Dia', data.getMinutes());
console.log('Dia', data.getSeconds());
console.log('Dia', data.getMilliseconds());
console.log('Dia semana', data.getDay());
//console.log('Dia', data.now());


function formateDate(date) {
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  const hora = data.getHours();
  const min = data.getMinutes();
  const seg = data.getSeconds();

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const date = new Date();
const dateBR = formateDate(date);
console.log(dateBR)