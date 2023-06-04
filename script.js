const textoMensaje = document.querySelector(".textoMensaje");
const textoVisual = document.querySelector(".textoVisual");
const copia = document.querySelector(".botonCo");
botonCo.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector(".textoMensaje").value;
    let validador = textoEscrito.match(/^[a-z\s\n]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(textoMensaje.value == ""){
        textoVisual.style.backgroundImage = "";
        botonCo.style.display = "none";
        alert("Por favor ingrese un mensaje para encriptar");
    }else{
        if(!validarTexto()){
            const textoEncriptado = encriptar(textoMensaje.value);
            textoVisual.value = textoEncriptado;
            textoVisual.style.backgroundImage = "none";
            textoMensaje.value = "";
            botonCo.style.display = "inline"
        }
    }
}

function encriptar(texto){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    texto = texto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    
    }
    return texto;
}

function btnDesencriptar(){
    if(textoMensaje.value == ""){
        textoVisual.style.backgroundImage = "";
        botonCo.style.display = "none";
        alert("Por favor ingrese un mensaje para desencriptar");
    }else{
        const textoDesencriptado = desencriptar(textoMensaje.value);
        textoVisual.value = textoDesencriptado;
        textoVisual.style.backgroundImage = "none";
        textoMensaje.value = "";
    }
}

function desencriptar(textodesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textodesencriptado = textodesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textodesencriptado.includes(matrizCodigo[i][1])){
            textodesencriptado = textodesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    
    }
    return textodesencriptado;

}

function copiar(){
    var textoCopiado = document.querySelector(".textoVisual");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert("Mensaje copiado");
}
