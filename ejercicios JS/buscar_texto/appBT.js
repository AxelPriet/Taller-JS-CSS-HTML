function buscarTexto() {
    var texto = document.getElementById("texto").value;
    var buscar = document.getElementById("buscar").value;
    var resultado = "";

    if (texto.includes(buscar)) {
        resultado = texto.split(buscar).join('<mark>' + buscar + '</mark>');
    } else {
        resultado = "No se encontro el texto buscado.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
