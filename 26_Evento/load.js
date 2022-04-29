// window.addEventListener("load", function() { //n precisa colocar id no body
//   alert("Assine os nossos termos de uso");
// });

window.addEventListener("beforeunload", function(e) {
  e.returnValue = null;
});