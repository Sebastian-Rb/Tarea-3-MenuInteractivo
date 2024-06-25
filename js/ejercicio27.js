function ejercicio27() {
    let cadena = document.getElementById("cadena27").value;
    let resultado = invertirCadena(cadena);
    document.getElementById("resultado27").textContent = "Cadena invertida: " + resultado;
}

function invertirCadena(cadena) {
    let resultado = "";

    for (let i = cadena.length - 1; i >= 0; i--) {
        resultado += cadena[i];
    }

    return resultado;
}
