// Función para mostrar el formulario y ocultar la primera parte
function mostrarIngreso() {
    document.getElementById("presentacion1").style.display = "none"; // Ocultar primera sección
    document.getElementById("ingresoTexto").style.display = "block"; // Mostrar formulario de ingreso
}

// Función para validar el texto ingresado
function validarTexto() {
    let textoUsuario = document.getElementById("textoUsuario").value;
    
    // Expresión regular que valida sólo letras minúsculas sin acentos
    let regex = /^[a-z\s]+$/;

    // Verificar si el texto contiene caracteres no permitidos
    if (!regex.test(textoUsuario)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos, números o caracteres especiales.");
        return false; // Evita que se siga procesando si hay un error
    }

    return true; // El texto es válido
}
// Función para 
//encriptar el texto
function convertirTexto() {
    if (!validarTexto()) return;
    let texto = document.getElementById("textoUsuario").value;
    
        // Reemplazar vocales
        texto = texto.replace(/a/g, "ai");
        texto = texto.replace(/e/g, "enter");
        texto = texto.replace(/i/g, "imes");
        texto = texto.replace(/o/g, "ober");
        texto = texto.replace(/u/g, "ufat");

        // Mostrar el texto convertido
        document.getElementById("textoConvertido").textContent = texto;
    
}

// Función para desencriptar el texto
function desencriptarTexto() {
    let texto = document.getElementById("textoUsuario").value;

    // Revertir el texto encriptado
    texto = texto.replace(/ufat/g, "u");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/ai/g, "a");

    // Mostrar el texto desencriptado
    document.getElementById("textoConvertido").textContent = texto;
}

// Función para copiar el texto
function copiarTexto() {
    const textoConvertido = document.getElementById("textoConvertido").textContent;
    navigator.clipboard.writeText(textoConvertido);
    alert("Texto copiado: " + textoConvertido);
}
