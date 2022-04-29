
//par impar/** */
for (let i = 0; i <= 50; i++) {
  
  if(i % 2 == 0) {
    console.log(`O numéro ${i} é par`);
  } else {
    console.log(`O numéro ${i} é ímpar`);
  }

}


//primo
let num = 17;
let divisoes = 0;

for(let i = 1; i <= num; i++) {

  if(num % i == 0) {
    divisoes++;
  }

}
//primo só pode dividir 2x 
if(divisoes == 2) {
  console.log(`O número ${num} é primo`);
} else {
  console.log(`O número ${num} não é primo`);
}