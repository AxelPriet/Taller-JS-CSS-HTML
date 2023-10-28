function identificarTipo() {
    var dato = document.getElementById("dato").value;
    var esNumero = !isNaN(dato);
    var resultado = esNumero ? "numero" : "texto";
    document.getElementById("resultado").innerHTML = "tipo: " + resultado;
}
