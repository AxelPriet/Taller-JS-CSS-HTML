function contarCaracteres() {
    var texto = document.getElementById("texto").value;
    var longitud = texto.length;
    document.getElementById("resultado").innerHTML = "Cantidad de caracteres de el texto ingresado: " + longitud;
}
