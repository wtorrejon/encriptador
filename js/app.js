'use strict'

//Funcion que nos servira para encriptar el texto capturado del text area
function encrypt(){
    //Decalramos una variable para capturar el texto ingresado
    let texto = document.getElementById("texto").value;
    //Declaramos una variable para decirle al usuario si se encripto o no el texto
    let mensaje_1 = document.getElementById("titulo__mensaje");
    let mensaje_2 = document.getElementById("parrafo__mensaje");
    let imagen = document.getElementById("img__person");
    
    
    //ahora declaramos una variable que nose servira para reemplazar las letras encontradas en el texto
    let encrypt__text= texto
    .replace(/m/gi, "1")
    .replace(/u/gi, "2")
    .replace(/r/gi, "3")
    .replace(/c/gi, "4")
    .replace(/i/gi, "5")
    .replace(/e/gi, "6")
    .replace(/l/gi, "7")
    .replace(/a/gi, "8")
    .replace(/g/gi, "9")
    .replace(/o/gi, "0");
    console.log(encrypt__text);
    

    if (texto.length != 0 && mensaje_2!=encrypt__text) {
        document.getElementById("parrafo__mensaje").value = encrypt__text;
        mensaje_1.textContent = "Texto encriptado con éxito";
        mensaje_2.textContent = encrypt__text;
        mensaje_2.className += "text__encrypt"
        imagen.className += "hidden";
        const buttonContainer = document.getElementById('button-container');
        const button = document.createElement('button');
        button.textContent = 'Copiar';
        button.type = 'button';
        button.className = 'btn__copiar';
        buttonContainer.appendChild(button);
    //   } else if(mensaje_2 = encrypt__text){
    //     swal("Ooops!", "Este texto ya fue encriptado", "warning");
      }else{ 
        imagen.src = "./assets/img/backgrouns/Muñeco.png";
        mensaje_1.textContent = "Ningún mensaje fue encontrado";
        mensaje_2.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
         swal("Ooops!", "No hay ningun texto que encriptar", "warning");
    }
    
}
//Funcion que nos servira para desencriptar el texto capturado del text area
