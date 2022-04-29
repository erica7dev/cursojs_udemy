window.addEventListener("keydown", function(e) { //aperta

  if(e.key == 'q') {
    console.log("Apertou a letra q");
  }

});

window.addEventListener("keyup", function(e) { //soltar

  if(e.key == "Enter") {
    console.log("Soltou o enter");
  }

});