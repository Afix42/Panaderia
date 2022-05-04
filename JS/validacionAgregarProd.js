const nombre = document.getElementById("nomProd");
const descripcion = document.getElementById("descProd");
const precio = document.getElementById("precio");
const cantidad = document.getElementById("cantidad");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 7 || nombre.value.trim() == "") {
    mostrarMensajeError("nomProd", "Nombre no valido*");
    condicion = false;
  }
  if (descripcion.value.length < 15 || descripcion.value.trim() == "") {
    mostrarMensajeError("descProd", "Descripción muy corta");
    condicion = false;
  }
  return condicion;
}
});

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "Producto agregado";
}


