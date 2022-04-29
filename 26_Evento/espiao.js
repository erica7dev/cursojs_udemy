let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("Clicou em mim!");
});

//remove
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg(){
  console.log("Clicou em mim!");
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function() {
  btn1.removeEventListener("click", msg);
});

//obj_evento
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg(e){
  console.log(e);
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event) {
  console.log(event);
});

//stop
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");

function msg(e){
  console.log("Clicou no button");
  e.stopPropagation();
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event) {
  console.log(event);
});

p.addEventListener("click", function() {
  console.log("clicou no paragrafo");
});