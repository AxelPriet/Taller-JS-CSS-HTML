function contarCaracteres() {
    var texto = document.getElementById("texto").value;
    var textoSinEspacios = texto.replace(/\s+/g, '');
    var longitud = textoSinEspacios.length;
    document.getElementById("resultado").innerHTML = "Cantidad de caracteres del texto ingresado:" + longitud;
}


