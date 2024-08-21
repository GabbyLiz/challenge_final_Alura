// Variable auxiliar para manejo de botones y limpieza de input
let textoIngresado= "";
// Variable inicial para verificar si hay tildes
const regex = /[áéíóúÁÉÍÓÚ]/;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.value = texto;
    return;
}

function encriptadorTexto() {
    let textoCapturado = document.getElementById('textoUsuario').value;

    // Verifica si está vacía la entrada de texto
    if (textoCapturado == "") {
        alert("Ingrese algún texto para encriptarlo"); 
    }

    // Verifica si hay letras mayúsculas o tildes en el texto ingresado
    if (regex.test(textoCapturado)) {
        alert("No se permiten tildes");
        asignarTextoElemento("#textoUsuario", "");         
    } else if (textoCapturado.localeCompare(textoCapturado.toUpperCase()) === 0 & textoCapturado != "") {
        alert("Solo se permiten letras minúsculas");
        asignarTextoElemento("#textoUsuario", "");     
    } else if(textoCapturado.localeCompare(textoCapturado.toLowerCase()) === 0) {
        console.log("Hay minusculas");
        // Forzamos a que el texto ingresado sea un String
        let textoEncriptado = textoCapturado.toString();
        // Reemplaza la coma en la frase (en caso de que haya una) por otro símbolo
        textoEncriptado = textoEncriptado.replace(/,/g, '{');
        //Transforma la frase en un array
        textoEncriptado = textoEncriptado.split('');
        // Reemplaza las vocales por las claves de encriptación
        let lenghtArray = textoEncriptado.length;
        for (let index = 0; index < lenghtArray; index++) {

                if (textoEncriptado[index] === 'e') {
                    textoEncriptado[index] = 'enter';
                }

                if (textoEncriptado[index] === 'i') {
                    textoEncriptado[index] = 'imes';
                }

                if (textoEncriptado[index] === 'a') {
                    textoEncriptado[index] = 'ai';
                }

                if (textoEncriptado[index] === 'o') {
                    textoEncriptado[index] = 'ober';
                }

                if (textoEncriptado[index] === 'u') {
                    textoEncriptado[index] = 'ufat';
                }
        }

        // De array a String(lo reconstruye con las comas)
        textoEncriptado = textoEncriptado.toString();
        // Se retiran las comas para que quede solo la frase
        textoEncriptado = textoEncriptado.replace(/,/g, '');
        // Se reemplaza el símbolo especial por una coma (en caso de que haya una)
        textoEncriptado = textoEncriptado.replace(/{/g, ',');
        textoIngresado = textoEncriptado;
        asignarTextoElemento("#textoUsuario", "");  
    } else{
        alert("Solo se permiten letras minúsculas");
        asignarTextoElemento("#textoUsuario", "");
    }
}

function copiarTexto() {
    // Obtiene el texto del elemento "w3review"
    var texto = document.getElementById("w3review");
    // Selecciona el campo del texto
    texto.select();
    texto.setSelectionRange(0, 99999); // para dispositivos móviles
    //Copia el texto de adentro del recuadro
    navigator.clipboard.writeText(texto.value);
    //Alerta del tecto copiado
    alert("Texto copiado: " + texto.value);

}

function desencriptadorTexto() {

    let textoCapturado = document.getElementById('textoUsuario').value;
    // Verifica si está vacía la entrada de texto
    if (textoCapturado == "") {
        alert("Ingrese algún texto para desencriptarlo");
    }

    // Verifica si hay letras mayúsculas o tildes en el texto ingresado
    if (regex.test(textoCapturado)) {
        alert("No se permiten tildes");
        asignarTextoElemento("#textoUsuario", "");   
    } else if (textoCapturado.localeCompare(textoCapturado.toUpperCase()) === 0 & textoCapturado != "") {
        alert("Solo se permiten letras minúsculas");
        asignarTextoElemento("#textoUsuario", "");          
    } else if (textoCapturado.localeCompare(textoCapturado.toLowerCase()) === 0) {
        frase = textoCapturado.toString();
        let res1, res2, res3, res4, res5;
        res1 = frase.replace(/imes/g, "i");
        res2 = res1.replace(/ai/g, "a");
        res3 = res2.replace(/enter/g, "e");
        res4 = res3.replace(/ober/g, "o");
        res5 = res4.replace(/ufat/g, "u");
        textoIngresado = res5;
        //asignarTextoElemento("#w3review", res5);
        asignarTextoElemento("#textoUsuario", "");
    } else {
        alert("Solo se permiten letras minúsculas");
        asignarTextoElemento("#textoUsuario", "");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const cambiarContenidoBtn = document.getElementById("cambiarContenido");
    const principalDerecho = document.querySelector(".principal_derecho_marco");

    cambiarContenidoBtn.addEventListener("click", function () {

        if(textoIngresado == "" ){
            
            //Si no hay un texto generado la primera vez no cambiar el estilo de la página
            
        }else{
            principalDerecho.innerHTML = `
                <div class="nuevo_contenido">
                    <textarea id="w3review" name="w3review" rows="4" cols="50">${textoIngresado}</textarea>
                    <div>
                        <button onclick="copiarTexto()" class="botonCopiar">Copiar</button>
                    </div>
                </div>
            `;
        }
     
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cambiarContenidoBtn = document.getElementById("cambiarContenido2");
    const principalDerecho = document.querySelector(".principal_derecho_marco");

    cambiarContenidoBtn.addEventListener("click", function () {

        if(textoIngresado == "" ){
            
            //Si no hay un texto generado la primera vez no cambiar el estilo de la página
            
        }else{
            principalDerecho.innerHTML = `
                <div class="nuevo_contenido">
                    <textarea id="w3review" name="w3review" rows="4" cols="50">${textoIngresado}</textarea>
                    <div>
                        <button onclick="copiarTexto()" class="botonCopiar">Copiar</button>
                    </div>
                </div>
            `;
        }
     
    });
});

