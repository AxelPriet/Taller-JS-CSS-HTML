function verificarDivisibilidad() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resultado = "";

    if (numero1 == "" || numero2 == "") {
        resultado = "Por favor, no deje los campos en blanco.";
    } else if (!Number.isInteger(parseFloat(numero1)) || !Number.isInteger(parseFloat(numero2))) {
        resultado = "Debe ingresar números enteros.";
    } else if (numero1 < 0 || numero2 < 0) {
        resultado = "Debe ingresar números positivos.";
    } else if (numero1 % numero2 == 0) {
        resultado = "El numero " + numero1 + " es divisible por " + numero2 + ".";
    } else {
        resultado = "El numero " + numero1 + " no es divisible por " + numero2 + ".";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
