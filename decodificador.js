//a = ai
//e = enter
//i = imes
//o = ober
//u = ufat
    
    

const mensajeEntrada = document.getElementById("mensajeEntrada");
const mensajeSalida = document.getElementById("mensajeSalida");
const btnCopiar = document.getElementById("btnCopiar");
btnCopiar.style.display = "none";

function validarEntrada() {

    let textoEscrito = mensajeEntrada.value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);

    if (!validador || validador =="") {
        alert("Solo se permiten letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

function btnCifrar() {
    if (!validarEntrada()) {
        const textoCifrado = cifrarMensaje(mensajeEntrada.value);
        mensajeSalida.value = textoCifrado;

        mensajeSalida.style.backgroundImage = "none";
        mensajeEntrada.value = "";
        btnCopiar.style.display = "block"
    }
}

function cifrarMensaje(textoEntrada) {
    var z = [];
    for (let i = 0; i < textoEntrada.length; i++) {
        let caracter = textoEntrada.charAt(i);

        switch (caracter) {
            case 'a':
                z.push('ai');
                break;
            case 'e':
                z.push('enter');
                break;
            case 'i':
                z.push('imes');
                break;
            case 'o':
                z.push('ober');
                break;
            case 'u':
                z.push('ufat');
                break;
            default:
                z.push(caracter);
                break;
        }
    }
    return z.join('');
}

function btnDescifrar() {
    if (!validarEntrada()) {
        const textoCifrado = descifrarMensaje(mensajeEntrada.value);
        mensajeSalida.value = textoCifrado;
        mensajeEntrada.value = "";
        mensajeSalida.style.backgroundImage = "none";
        btnCopiar.style.display = "block";
    }
}

function descifrarMensaje(mensajeSecreto) {
    var mensajeDescifrado = mensajeSecreto.replaceAll('ai', 'a');
    mensajeDescifrado = mensajeDescifrado.replaceAll('enter', 'e');
    mensajeDescifrado = mensajeDescifrado.replaceAll('imes', 'i');
    mensajeDescifrado = mensajeDescifrado.replaceAll('ober', 'o');
    mensajeDescifrado = mensajeDescifrado.replaceAll('ufat', 'u');

    return mensajeDescifrado;
}

function copiar() {
    mensajeSalida.select();
    navigator.clipboard.writeText(mensajeSalida.value);
    mensajeSalida.value = "";
    alert("Texto copiado");
    mensajeEntrada.focus();
    if(screen.width >= 1440 ){
        mensajeSalida.style.backgroundImage = "url('img/not-found.png')";
        btnCopiar.style.display = "none";
    }else{
        mensajeSalida.style.backgroundImage = "url('none')";
        btnCopiar.style.display = "none";
    }
    
}

var btnCifrarMensaje = document.getElementById("btnCifrar");
btnCifrarMensaje.onclick = btnCifrar;

var btnDescifrarMensaje = document.getElementById("btnDescifrar");
btnDescifrarMensaje.onclick = btnDescifrar;


btnCopiar.onclick = copiar;