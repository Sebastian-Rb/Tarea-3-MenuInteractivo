function ejercicio25() {
    let cadena = document.getElementById("cadena25").value;
    let numPalabras = contarPalabras(cadena);
    document.getElementById("resultado25").textContent = "Número de palabras: " + numPalabras;
}

function contarPalabras(cadena) {
    let count = 0;
    let inWord = false;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== ' ' && !inWord) {
            count++;
            inWord = true;
        } else if (cadena[i] === ' ') {
            inWord = false;
        }
    }

    return count;
}
