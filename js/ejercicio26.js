function ejercicio26() {
    let cadena = document.getElementById("cadena26").value;
    let resultado = presentarPrimerCaracter(cadena);
    document.getElementById("resultado26").textContent = "Resultado:\n" + resultado;
}

function presentarPrimerCaracter(cadena) {
    let resultado = "";

    for (let i = 0; i < cadena.length; i++) {
        for (let j = 0; j <= i; j++) {
            resultado += cadena.charAt(j);
        }
        resultado += "\n";
    }

    return resultado;
}