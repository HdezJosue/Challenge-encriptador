const textArea = document.querySelector(".ingresar-msg");
const mensaje = document.querySelector(".msg-codificado");

const matrizCodigo = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
]
function btnEncriptar(){
    const textEncriptado = encriptar(textArea.value)
    mensaje.value = textEncriptado;
    textArea.value = "";
}
function btnDesencriptar(){
    const textDesencriptado = desencriptar(textArea.value);
    mensaje.value = textDesencriptado;
    textArea.value = "";
}
function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.tolowerCase();
    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}