function ejercicio30() {
    let cadena = document.getElementById("cadena30").value;
    let resultado = eliminarEspacios(cadena);
    document.getElementById("resultado30").textContent = "Cadena sin espacios: " + resultado;
}

function eliminarEspacios(cadena) {
    let resultado = "";

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== ' ') {
            resultado += cadena[i];
        }
    }

    return resultado;
}