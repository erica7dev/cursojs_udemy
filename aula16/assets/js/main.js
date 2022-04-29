const data = new Date() //constructor

const dia = String(data.getDate(2,'0')).padStart() //comprimento inferior a 2 preenchido com 0
const mes = String(data.getMonth(2,'0')+ 1).padStart() //jan = 0  +1 => segue a ordem do calendar real
const ano = data.getFullYear() //2023  
const dataAtual = `${dia}/${mes}/${ano}`
console.log(dataAtual)



/*Desafio
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
*/

