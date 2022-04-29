let a = document.querySelector("footer a");

console.log(a.getAttribute('href')); // exibindo link no console

let link = 'https://www.horadecodar.com.br';

a.setAttribute('href', link); //mudando link

console.log(a.getAttribute('href'));