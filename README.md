####ALURA LATAM | ORACLE NEXT EDUCATION | CHALLENGE
##ENCRIPTADOR DE TEXTOS
[![HTML](https://camo.githubusercontent.com/5e7e215d9ff3a7c2e96d09232c11b2205565c841d1129dd2185ebd967284121f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465 "HTML")](https://camo.githubusercontent.com/5e7e215d9ff3a7c2e96d09232c11b2205565c841d1129dd2185ebd967284121f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465 "HTML") [![CSS](https://camo.githubusercontent.com/6531a4161596e3d9fdab3d0499a7b7ce5c5c8b568be219f3e9707af042e575d2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465 "CSS")](https://camo.githubusercontent.com/6531a4161596e3d9fdab3d0499a7b7ce5c5c8b568be219f3e9707af042e575d2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465 "CSS") [![JS](https://camo.githubusercontent.com/53ec2e58e03ba275d9b3a386abd96a243cf744a1a7121bdf8262fc8ae6ebc335/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145 "JS")](https://camo.githubusercontent.com/53ec2e58e03ba275d9b3a386abd96a243cf744a1a7121bdf8262fc8ae6ebc335/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145 "JS")

Primer Challenge del programa del el programa **ORACLE NEXT EDUCATION **en conjunto con **ALURA LATAM** realizado con herramientas Front-end y diseño responsivo.

------------

[![alura](https://raw.githubusercontent.com/joshuaFrias95/Encriptador-Alura-Oracle-ONE/main/img/readme/aluraoracle.png "alura")](https://raw.githubusercontent.com/joshuaFrias95/Encriptador-Alura-Oracle-ONE/main/img/readme/aluraoracle.png "alura")

Funcionamiento del programa:

1. Se debe introducir un texto en la zona designada, y elegir si se va a encriptar o desencriptar.
2. Una vez realizada la operacion con uno de los dos botones, si los parametros requeridos son los correctos (texto solo en minuscula), el mensaje encriptado o desencriptado aparecera en la parte izquierda del programa con un boton que te permitia copiar el texto.

[![challenge](https://github.com/wtorrejon/encriptador.github.io./blob/main/assets/capturas/challenge%20captura%201.png?raw=true "challenge")](https://github.com/wtorrejon/encriptador.github.io./blob/main/assets/capturas/challenge%20captura%201.png?raw=true "challenge")



Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

La funcion para encriptar es la siguiente:

funcion para copiar el texto:

```javascript
function fnCopiar() {
  if (!navigator.clipboard) {
    //Para navegadores que no soportan Clipboard API
    alert(" Su navegador no soporta la funcion de copiar al portapapeles ");
    return;
  } else {
    let textarea = document.getElementById("result");
    navigator.clipboard
      .writeText(textarea.value)
      .then(() => {
        console.log("Texto copiado");
      })
      .catch((error) => {
        console.error("Error al copiar texto:", error);
      });
  }
}
```

    /* ------- Funcion para encriptar el texto------- */
    
    function encrypt() {
      let texto = text__Encrypt.value;
      let validation__txt = texto
        .normalize("NFD")
        .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
      if (texto == "") {
        conditionText.style.color = "red";
        conditionText.style.fontWeight = "800";
        conditionText.innerHTML = "El campo no puede estar vacio";
        tituloMensaje.innerHTML = "No se pudo encriptar el mensaje";
        parrafoMensaje.innerHTML = "El campo no puede estar vacio";
        parrafoMensaje.style.color = "red"
    
        //Regresando los valores y atributos a su estado inicial
        setTimeout(() => {
          conditionText.removeAttribute("style");
          conditionText.innerHTML = "Solo letras minúsculas y sin acentos.";
          parrafoMensaje.removeAttribute("style");
          tituloMensaje.innerHTML = "Ningun mensaje fue encontrado";
          parrafoMensaje.innerHTML = "Ingresa el texto que deseas encriptar o desencriptar";
        }, 1500);
    
      } else if (validation__txt != texto) {
        conditionText.style.color = "red";
        conditionText.style.fontWeight = "800";
        conditionText.textContent = "No debe tener acentos y caracteres especiales";
        tituloMensaje.innerHTML = "No se pudo encriptar el mensaje";
        parrafoMensaje.innerHTML = "No debe tener acentos, ni caracteres especiales";
        parrafoMensaje.style.color = "red";
    
        //Regresando los valores y atributos a su estado inicial
        setTimeout(() => {
            conditionText.removeAttribute("style");
            conditionText.innerHTML = "Solo letras minúsculas y sin acentos.";
            parrafoMensaje.removeAttribute("style");
            tituloMensaje.innerHTML = "Ningun mensaje fue encontrado";
            parrafoMensaje.innerHTML = "Ingresa el texto que deseas encriptar o desencriptar";
        }, 1500);
    
      } else if (texto !== texto.toLowerCase()) {
        conditionText.style.color = "red";
        conditionText.style.fontWeight = "800";
        conditionText.textContent = "El texto debe ser todo en minúscula";
        tituloMensaje.innerHTML = "No se pudo encriptar el mensaje";
        parrafoMensaje.innerHTML = "Coloque el texto solo en letras en minusculas";
        parrafoMensaje.style.color = "red";
    
        //Regresando los valores y atributos a su estado inicial
        setTimeout(() => {
            conditionText.removeAttribute("style");
            conditionText.innerHTML = "Solo letras minúsculas y sin acentos.";
            parrafoMensaje.removeAttribute("style");
            tituloMensaje.innerHTML = "Ningun mensaje fue encontrado";
            parrafoMensaje.innerHTML = "Ingresa el texto que deseas encriptar o desencriptar";
        }, 1500);
    
      } else {
        texto = texto.replace(/e/gm, "enter");
        texto = texto.replace(/i/gm, "imes");
        texto = texto.replace(/a/gm, "ai");
        texto = texto.replace(/o/gm, "ober");
        texto = texto.replace(/u/gm, "ufat");
        
        result.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        result.style.visibility = "inherit";
        containerCard.remove();
        wrapperDecrypt.style.display = "block";
    
      }
    
    }

Funcion para desencriptar el texto:

    /* ------- Funcion para desencriptar el texto------- */
    
    function decrypt() {
      let texto = text__Encrypt.value;
      let validation__txt = texto
        .normalize("NFD")
        .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
      if (texto == "") {
        conditionText.style.color = "red";
        conditionText.style.fontWeight = "800";
        conditionText.innerHTML = "El campo no puede estar vacio";
        tituloMensaje.innerHTML = "No se pudo Desencriptar el mensaje";
        parrafoMensaje.innerHTML = "El campo no puede estar vacio";
        parrafoMensaje.style.color = "red"
    
        //Regresando los valores y atributos a su estado inicial
        setTimeout(() => {
          conditionText.removeAttribute("style");
          conditionText.innerHTML = "Solo letras minúsculas y sin acentos.";
          parrafoMensaje.removeAttribute("style");
          tituloMensaje.innerHTML = "Ningun mensaje fue encontrado";
          parrafoMensaje.innerHTML = "Ingresa el texto que deseas encriptar o desencriptar";
        }, 1500);
      } else if (validation__txt != texto) {
        conditionText.style.color = "red";
        conditionText.style.fontWeight = "800";
        conditionText.textContent = "No debe tener acentos y caracteres especiales";
        tituloMensaje.innerHTML = "No se pudo Desencriptar el mensaje";
        parrafoMensaje.innerHTML = "No debe tener acentos, ni caracteres especiales";
        parrafoMensaje.style.color = "red";
    
        //Regresando los valores y atributos a su estado inicial
        setTimeout(() => {
            conditionText.removeAttribute("style");
            conditionText.innerHTML = "Solo letras minúsculas y sin acentos.";
            parrafoMensaje.removeAttribute("style");
            tituloMensaje.innerHTML = "Ningun mensaje fue encontrado";
            parrafoMensaje.innerHTML = "Ingresa el texto que deseas encriptar o desencriptar";
        }, 1500);
    
      } else if (texto !== texto.toLowerCase()) {
        conditionText.style.color = "red";
        conditionText.style.fontWeight = "800";
        conditionText.textContent = "El texto debe ser todo en minúscula";
        tituloMensaje.innerHTML = "No se pudo Desencriptar el mensaje";
        parrafoMensaje.innerHTML = "Coloque el texto solo en letras en minusculas";
        parrafoMensaje.style.color = "red";
    
        //Regresando los valores y atributos a su estado inicial
        setTimeout(() => {
            conditionText.removeAttribute("style");
            conditionText.innerHTML = "Solo letras minúsculas y sin acentos.";
            parrafoMensaje.removeAttribute("style");
            tituloMensaje.innerHTML = "Ningun mensaje fue encontrado";
            parrafoMensaje.innerHTML = "Ingresa el texto que deseas encriptar o desencriptar";
        }, 1500);
      } else {
        texto = texto.replace(/enter/gm, "e");
        texto = texto.replace(/imes/gm, "i");
        texto = texto.replace(/ai/gm, "a");
        texto = texto.replace(/ober/gm, "o");
        texto = texto.replace(/ufat/gm, "u");
        result.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        result.style.visibility = "inherit";
        containerCard.remove();
        wrapperDecrypt.style.display = "block";
      }
    
    }
    


