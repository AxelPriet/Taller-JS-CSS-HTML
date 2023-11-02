function identificarNumeros() {
    var numeros = document.getElementById("numeros").value.split(",");
    var resultado = "";

    for (var i = 0; i < numeros.length; i++) {
        var numero = parseFloat(numeros[i].trim());

        if (isNaN(numero)) {
            resultado += "<span class='error'>Debe ingresar un numero.</span><br>";
        } else if (!Number.isInteger(numero)) {
            resultado += "<span class='error'>Debe ingresar numeros enteros.</span><br>";
        } else if (numero < 0) {
            resultado += "<span class='error'>Debe ingresar numeros positivos.</span><br>";
        } else if (numero % 2 == 0) {
            resultado += "<span class='par'>" + numero + " es numero par.</span><br>";
        } else {
            resultado += "<span class='impar'>" + numero + " es numero impar.</span><br>";
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
}



