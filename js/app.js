'use strict'
/* ------- Declaraciones Globales ------- */
const text__Encrypt = document.getElementById("texto");
const conditionText = document.getElementById("condition__text");
const containerCard = document.getElementById("container__card");
const btnCopiar = document.querySelector(".btn__copiar");
const result = document.getElementById("result");
const text__result = result.value;

/* ------- Funcion para el boton copiar ------- */
function fnCopiar() {
    if(!navigator.clipboard){
        //Para navegadores que no soportan Clipboard API
        alert (" Su navegador no soporta la funcion de copiar al portapapeles ")
        return;
    }else{
        result.select();
        document.execCommand("copy");
        // navigator.clipboard.readText(text__result);
        // console.log()
        // alert("Texto copiado al portapapeles");
    }
}

/* ------- Funcion para encriptar el texto------- */

function encrypt () {
    
    let texto = text__Encrypt.value;
    let validation__txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == ""){
        conditionText.style.color = "red";
        conditionText.style.fontWeight = "800";
        conditionText.innerHTML = "El campo no puede estar vacio";

        setTimeout(()=>{
            conditionText.removeAttribute ("style");
        },1500);
    }
    else if (validation__txt != texto){
        conditionText.style.background = "#0A3871";
        conditionText.style.color = "#FFFF";
        conditionText.style.fontWeight = "800";
        conditionText.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            conditionText.removeAttribute ("style");
        },1500);
    }
    else if (texto !== texto.toLowerCase()) {
        conditionText.style.background = "#0A3871";
        conditionText.style.color = "#FFFF";
        conditionText.style.fontWeight = "800";
        conditionText.textContent = "El texto debe ser todo en minúscula";
    }
    else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
    }

    result.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    containerCard.remove();

}

/* ------- Funcion para desencriptar el texto------- */

function decrypt(){
    let texto = text__Encrypt.value;
    let validation__txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == ""){
        conditionText.style.color = "red";
        conditionText.style.fontWeight = "800";
        conditionText.innerHTML = "El campo no puede estar vacio";

        setTimeout(()=>{
            conditionText.removeAttribute ("style");
        },1500);
    }
    else if (validation__txt != texto){
        conditionText.style.background = "#0A3871";
        conditionText.style.color = "#FFFF";
        conditionText.style.fontWeight = "800";
        conditionText.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            conditionText.removeAttribute ("style");
        },1500);
    }
    else if (texto !== texto.toLowerCase()) {
        conditionText.style.background = "#0A3871";
        conditionText.style.color = "#FFFF";
        conditionText.style.fontWeight = "800";
        conditionText.textContent = "El texto debe ser todo en minúscula";
    }
    else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
    }

    result.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    containerCard.remove();
}