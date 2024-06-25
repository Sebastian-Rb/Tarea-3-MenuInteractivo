function ejercicio28() {
    let cadena = document.getElementById("cadena28").value;
    let frecuencia = frecuenciaUltimoCaracter(cadena);
    document.getElementById("resultado28").textContent = `Frecuencia del último carácter (${cadena[cadena.length - 1]}): ${frecuencia}`;
}

function frecuenciaUltimoCaracter(cadena) {
    let ultimoCaracter = cadena[cadena.length - 1];
    let count = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === ultimoCaracter) {
            count++;
        }
    }

    return count;
}