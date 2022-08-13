let btnEncriptar = document.querySelector('.btnEncriptar');
let btnDesencriptar = document.querySelector('.btnDesencriptar');
let mensajeResultado = document.querySelector('.resultado');
let mensaje = document.querySelector('.mensajeIngresado')
let btnCopiar = document.querySelector('.btnCopiar');
let btnLimpiar = document.querySelector('.btnLimpiar');

btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);
btnCopiar.addEventListener('click', copiar);
btnLimpiar.addEventListener('click', limpiar);

function encriptar(){
    mensajeResultado.value = encriptarMensaje(recuperarMensaje());
}

function desencriptar(){
    mensajeResultado.value =desencriptarMensaje(recuperarMensaje());
}

function limpiar(){
    let mensaje = document.querySelector('.mensaje');
    mensaje.value = "";
}

function recuperarMensaje(){
    let mensaje = document.querySelector('.mensaje');
    return mensaje.value;
}

function encriptarMensaje(mensaje){
    let texto = mensaje;
    let textoResultado = "";

    for (let i = 0; i < texto.length; i++) {
        if(texto[i] == "a"){
            textoResultado = textoResultado + "ai"
        }
        else if(texto[i] == "e"){
            textoResultado = textoResultado + "enter"
        }
        else if(texto[i] == "i"){
            textoResultado = textoResultado + "imes"
        }
        else if(texto[i] == "o"){
            textoResultado = textoResultado + "ober"
        }
        else if(texto[i] == "u"){
            textoResultado = textoResultado + "ufat"
        }else{
            textoResultado = textoResultado + texto[i];
        }   
    }

    return textoResultado;
}

function desencriptarMensaje(mensaje){
    let texto = mensaje;
    let textoResultado = "";

    for (let i = 0; i < texto.length; i++) {
        if(texto[i] == "a"){
            textoResultado = textoResultado + "a"
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoResultado = textoResultado + "e"
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoResultado = textoResultado + "i"
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoResultado = textoResultado + "o"
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoResultado = textoResultado + "u"
            i = i + 3;
        }else{
            textoResultado = textoResultado + texto[i];
        }   
    }

    return textoResultado;
}

function copiar(){
    let mensajeEncriptado = mensajeResultado.value;
    
    navigator.clipboard.writeText(mensajeEncriptado);
}