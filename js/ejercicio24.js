class tareas{
form24() {
        let cadena = document.getElementById("cadena24").value;
        let resultado = this.convertirAMayusculas(cadena);
        document.getElementById("resultado24").textContent = "Cadena en mayúsculas: " + resultado;
    }

    convertirAMayusculas(cadena) {
        let resultado = "";

        for (let i = 0; i < cadena.length; i++) {
            let caracter = cadena[i];
            if (caracter >= 'a' && caracter <= 'z') {
                resultado += String.fromCharCode(caracter.charCodeAt(0) - 32);
            } else {
                resultado += caracter;
            }
        }

        return resultado;
    }
}


let tareas = new tareas();