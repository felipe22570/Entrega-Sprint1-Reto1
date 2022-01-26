const menures = document.getElementById("nav-bar-res");
const btnmenu = document.getElementById("btn-menu");
const btnsalir = document.getElementById("btn-salir");

const titleuno = document.getElementById("uno");
const titledos = document.getElementById("dos");
const titletres = document.getElementById("tres");

const uno = document.getElementById("content-uno");
const dos = document.getElementById("content-dos");
const tres = document.getElementById("content-tres");

btnmenu.addEventListener("click", mostrar);
btnsalir.addEventListener("click", ocultar);

function mostrar() {
   menures.style.display = "flex";
}

function ocultar() {
   menures.style.display = "none";
}

function mostrarUno() {
   uno.style.display = "flex";
   dos.style.display = "none";
   tres.style.display = "none";
}

function mostrarDos() {
   uno.style.display = "none";
   dos.style.display = "flex";
   tres.style.display = "none";
}

function mostrarTres() {
   uno.style.display = "none";
   dos.style.display = "none";
   tres.style.display = "flex";
}

titleuno.addEventListener("click", mostrarUno);
titledos.addEventListener("click", mostrarDos);
titletres.addEventListener("click", mostrarTres);

const error = document.getElementById("error");

function validar(correo) {
   let expReg =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

   let valido = expReg.test(correo);

   if (valido == false) {
      error.style.display = "flex";
   } else {
      error.style.display = "none";
   }
}
