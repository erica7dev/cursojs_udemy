let numeros = [5,10,15,20,25];
let nums2 = [1,2,3];

console.log(numeros[0]);
console.log(numeros[2]);
console.log(numeros[3]);

if(numeros.includes(20)) {
  console.log("O numero foi encontrado");
} else {
  console.log("O numero não foi encontrado");
}


function verificaElementosArray(arr) {
  if(arr.length >= 5) {
    console.log("Muitos elementos");
  } else {
    console.log("Poucos elementos");
  }
}

verificaElementosArray(numeros);
verificaElementosArray(nums2);


let frutas = ["Maçã", "Banana", "Melão", "Melância", "Laranja"];

for(let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}


const frase = "Ser um programador bom requer muita prática";

const arrFrase = frase.split(" "); //divide cada uma das palavras em "" split([divisor],[limite])

for(let i = 0; i < arrFrase.length; i++) {
  console.log(arrFrase[i]);
}




/**-------------- */
let onibus = {
  rodas: 8,
  limitePassageiros: 40,
  portas: 2
};

delete onibus.rodas;

console.log(onibus.rodas);

onibus.janelas = 20; //add

console.log(onibus);
console.log(onibus.janelas);




const calculadora = {
  soma: function(a, b) {
    return a + b;
  },
  subtrair: function(a, b) {
    return a - b;
  },
  multiplicar: function(a, b) {
    return a * b;
  },
  dividir: function(a, b) {
    return a / b;
  }
}

console.log(calculadora.soma(3,4));
console.log(calculadora.subtrair(5,5));
console.log(calculadora.multiplicar(8,2));
console.log(calculadora.dividir(5,2));



//destructuring
let obj = {
  rodas: 4,
  portas: 4,
  tetosolar: true,
  motor: '2.0'
}

const {rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor} = obj;

console.log(vRodas);
console.log(vPortas);


//in array
let sapatos = ['Arezzo','ViaMarte','Colcci','Vizzano']

let [mod1, mod2] = sapatos;

console.log(mod1);

