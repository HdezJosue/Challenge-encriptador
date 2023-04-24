const textArea = document.querySelector(".ingrese-msg");
const mensaje = document.querySelector(".msg-codificado");

const matrizCodigo = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
]

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);

    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    stringDesencriptado = stringDesencriptado.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}

function btnCopiar(){
    const textoCopiado = mensaje.value;
    navigator.clipboard.writeText(textoCopiado);
}