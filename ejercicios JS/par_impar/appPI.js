function identificarNumeros() {
    var numeros = document.getElementById("numeros").value.split(",");
    var resultado = "";

    for (var i = 0; i < numeros.length; i++) {
        var numero = parseFloat(numeros[i].trim());

        if (isNaN(numero)) {
            resultado += "Debe ingresar un numero.<br>";
        } else if (!Number.isInteger(numero)) {
            resultado += "Debe ingresar numeros enteros.<br>";
        } else if (numero < 0) {
            resultado += "Debe ingresar numeros positivos.<br>";
        } else if (numero % 2 == 0) {
            resultado += numero + " es par.<br>";
        } else {
            resultado += numero + " es impar.<br>";
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
}
