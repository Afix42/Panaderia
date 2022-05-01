var n = document.getElementById("nom");

const form = document.getElementById("form1");
var msj = document.getElementById("mensajes");

form.addEventListener("submit", e =>{
    e.preventDefault();
    let msjmostrar = "";
    let envioCorrecto = false;
    if(n.value.length < 4 || n.value.length > 7) {
        msjmostrar += "El nombre no tiene la longitud correcta<br>";
        envioCorrecto = true;
    }

    var letraNombre = n.value.charAt(0);
    if(!esMayuscula(letraNombre)){
        msjmostrar += "Es minuscula<br>"
        envioCorrecto = true;
    }

    if(envioCorrecto){
        msj.innerHTML = msjmostrar;
    }
    else{
        msj.innerHTML = "Formulario Enviado";
    }


});

function esMayuscula(letra){
    return letra == letra.toUpperCase();
}