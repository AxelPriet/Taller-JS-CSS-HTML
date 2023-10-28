function verificarEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    
    if (edad <= 0) {
        document.getElementById("resultado").innerHTML = "No es una edad valida.";
        return;
    }
    
    var resultado = edad >= 18 ? "Hola " + nombre + ", eres mayor de edad." : "Hola " + nombre + ", no eres mayor de edad.";
    document.getElementById("resultado").innerHTML = resultado;
}
