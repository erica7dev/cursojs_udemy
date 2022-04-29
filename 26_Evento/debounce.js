let timeout; //p ter acesso do lado de fora

window.addEventListener("mousemove", function(e) {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    console.log(e.x);
  }, 500); // suavizador de evento, n executa o evento o tempo todo
});