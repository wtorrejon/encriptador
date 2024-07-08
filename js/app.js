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

//Funcion que nos servira para encriptar el texto capturado del text area
// function encrypt(){
//     let texto = document.getElementById("texto").value;
//     let mensaje_1 = document.getElementById("titulo__mensaje");
//     let mensaje_2 = document.getElementById("parrafo__mensaje");
//     let imagen = document.getElementById("img__person");
//     let flex = document.querySelector("wrapper__result");

//     let encrypt__text= texto
//     .replace(/e/gi, "enter")
//     .replace(/i/gi, "imes")
//     .replace(/a/gi, "ai")
//     .replace(/o/gi, "ober")
//     .replace(/u/gi, "ufat");

//     console.log(encrypt__text);
//     const buttonContainer = document.getElementById('button-container');
//         const button = document.createElement('button');
//         button.textContent = 'Copiar';
//         button.type = 'button';
//         button.className = 'btn__copiar';
//         buttonContainer.appendChild(button);

//     if (texto.length != 0) {
//         document.getElementById("parrafo__mensaje").value = encrypt__text;
//         mensaje_1.textContent = "Texto encriptado con éxito";
//         mensaje_2.textContent = encrypt__text;
//         mensaje_2.className += "text__encrypt"
//         imagen.className += "hidden";
        
//     }else{
//         imagen.src = "./assets/img/backgrouns/Muñeco.png";
//         mensaje_1.textContent = "Ningún mensaje fue encontrado";
//         mensaje_2.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
//         swal("Ooops!", "No hay ningun texto que encriptar", "warning");
//     }
    
// }
//Funcion que nos servira para desencriptar el texto capturado del text area
