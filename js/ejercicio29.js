function ejercicio29() {
    let cadena = document.getElementById("cadena29").value;
    let numCaracteres = contarCaracteres(cadena);
    document.getElementById("resultado29").textContent = "Número de caracteres: " + numCaracteres;
}

function contarCaracteres(cadena) {
    let count = 0;

    for (let i = 0; i < cadena.length; i++) {
        count++;
    }

    return count;
}