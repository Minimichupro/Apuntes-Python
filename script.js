const botones = document.querySelectorAll(".boton-desplegable");

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const contenido = boton.nextElementSibling;
    contenido.classList.toggle("abierto");
  });
});
