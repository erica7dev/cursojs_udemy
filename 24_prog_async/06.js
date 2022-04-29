//async e await

/*async function somar(a, b) {
  return a + b;
}

console.log(somar(2,4)); // promise 6 (futuro)

somar(2, 4).then(value => console.log(value)); //6 */


//
function somaComDelay(a,b) {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(a+b); // 3
    }, 4000);
  })
}

async function resSoma(a,b,c) {

  let x = somaComDelay(a,b);
  let y = c;

  return await x + y; // aguarda a primeira op. ser concluida

}

resSoma(1,2,3).then(value => console.log(value));
