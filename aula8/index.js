let Abacate = "Fruta Verde"

console.log(Abacate.indexOf("a", 3)); //'a' a partir do indice 3
console.log(Abacate.lastIndexOf("v", 3)); //'a' a partir do indice 3 contando do final
console.log(Abacate[2]);//charAt(2) 
console.log(Abacate.match(/[a-z]/g));//charAt(2) //exp. regular
console.log(Abacate.concat(" chamada Abacate"))
console.log(Abacate.search(/[a-z]/g))//exp. regular e indexOF
console.log(Abacate.replace("Verde", "Cremosa")) //substituição
console.log(Abacate.replace(/r/g, '#'));
console.log(Abacate.length);
console.log(Abacate.slice(0, 5)) //fatia - onde começa, onde termina(nao é adicionado)
console.log(Abacate.slice(-3)) //peguei a string inteira e subtrai as 3 
console.log(Abacate.split(' ', 3)) //divide
console.log(Abacate.toLowerCase()) 
console.log(Abacate.toUpperCase())


