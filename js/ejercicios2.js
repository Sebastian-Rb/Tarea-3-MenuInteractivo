class tarea {
//! Arianna
form1() {
    console.log("Ejercicio 1 ejecutando")
    let mensaje = document.getElementById("mensaje1").value;
    let N = parseInt(document.getElementById("repeticiones1").value)
    let container = document.getElementById("resultado1")
    container.innerHTML = ''
    for (let i = 0; i < N; i++) {
        let p = document.createElement('p')
        p.textContent = mensaje
        container.appendChild(p)
    }
}
form2() {
    let number = parseInt(document.getElementById("num2").value)
    let divresultado = document.getElementById("resultado2")
    
    let i = 1
    let msg = "Múltiplos de 7 de 1 a " + number + ":<br>"
    while (i <= number) {
        if (i % 7 === 0) {
            msg += i + " "
        }
        i++
    }
     
    divresultado.innerHTML = msg
}

form3() {
    let numero = parseInt(document.getElementById("numero").value)
    let limite = parseInt(document.getElementById("limite").value)
    let divresultado = document.getElementById("divresultado3")
    
    let i = 1
    let msg = "Múltiplos de " + numero + " de 1 a " + limite + ":<br>"
    while (i <= limite) {
        if (i % numero === 0) {
            msg += i + " "
        }
        i++
    }
    
    divresultado.innerHTML = msg
}
form4() {
    let numeros = document.getElementById("numeros").value.split(",").map(Number)
    let resultDiv = document.getElementById("resultado4")
    
    let positiveNumbers = numeros.filter(num => num > 0)
    let msg = "Números positivos ingresados: " + positiveNumbers.join(", ")
    
    resultDiv.innerHTML = msg
}
form5() {
    let numeros = document.getElementById("numeros").value.split(",").map(Number)
    let resultDiv = document.getElementById("resultado5")
    
    let pares = numeros.filter(num => num % 2 === 0)
    let msg = "Números pares ingresados: " + pares.join(", ")
    
    resultDiv.innerHTML = msg
}
form6() {
    let numero = parseInt(document.getElementById("numero").value)
    let resultDiv = document.getElementById("resultado6")
    
    let divisores = []
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i)
        }
    }
    
    let msg = "Divisores de " + numero + ": " + divisores.join(", ")
    resultDiv.innerHTML = msg
}
form7() {
    let tablaSumar10 = document.getElementById("tablaSumar10")
    let msg = ""

    for (let i = 1; i <= 12; i++) {
        let suma = i + 10
        msg += `${i} + 10 = ${suma}<br>`
    }

    tablaSumar10.innerHTML = msg
}
form8() {
    let inicio = parseInt(document.getElementById("inicio").value)
    let final = parseInt(document.getElementById("final").value)
    let tablaMultiplicar = document.getElementById("tablaMultiplicar")
    let msg = ""

    if (inicio > final) {
        tablaMultiplicar.innerHTML = "El valor inicial debe ser menor o igual al valor final."
        return
    }

    for (let i = inicio; i <= final; i++) {
        for (let j = 1; j <= 10; j++) {
            msg += `${i} x ${j} = ${i * j}<br>`
        }
        msg += "<br>"
    }

    tablaMultiplicar.innerHTML = msg
}

//!Andres 
//!num9
form9() {
    let inicio = parseInt(document.getElementById("inicio").value);
    let final = parseInt(document.getElementById("final").value);
    let numerosComprendidos = document.getElementById("numerosComprendidos");
    let msg = "";

    if (inicio > final) {
        numerosComprendidos.innerHTML = "El número inicial debe ser menor o igual que el número final.";
        return;
    }

    for (let i = inicio + 1; i < final; i++) {
        msg += `${i}, `;
    }

    msg = msg.slice(0, -2); // Eliminar la última coma y espacio
    numerosComprendidos.innerHTML = msg;
} 

//!num10
form10() {
    let inicio = parseInt(document.getElementById("inicio").value);
    let final = parseInt(document.getElementById("final").value);
    let numerosParesComprendidos = document.getElementById("numerosParesComprendidos");
    let msg = "";

    if (inicio > final) {
        numerosParesComprendidos.innerHTML = "El número inicial debe ser menor o igual que el número final.";
        return;
    }

    for (let i = inicio; i <= final; i++) {
        if (i % 2 === 0) {
            msg += `${i}, `;
        }
    }

    if (msg.length === 0) {
        numerosParesComprendidos.innerHTML = "No hay números pares en el rango especificado.";
    } else {
        msg = msg.slice(0, -2); // Eliminar la última coma y espacio
        numerosParesComprendidos.innerHTML = msg;
    }
}

//!Ejercicio11
 form11() {
    console.log("Ejercicio 11 ejecuntando")
    const entrada11 = document.getElementById("numeros11").value
    const num11 = entrada11.split(",")

    let a = 0
    let msg = "Los numeros ingresados son: "
    while (a < num11.length) {
        msg += num11[a]
        if (a !== num11.length - 1) {
            msg += ", "
        }
        a = a + 1
    }
    document.getElementById("resultado11").innerText = msg
    //document.getElementById('resultado11').innerText = 'Los numeros dados son: ' + num11.join(', ')
}
//!arreglos
form12() {
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",").map(num => parseInt(num.trim(), 10));
    let numerosParesDiv = document.getElementById("numerosPares");
    let numerosPares = numerosArray.filter(num => num % 2 === 0);

    if (numerosArray.length !== 10) {
        numerosParesDiv.innerHTML = "Debes ingresar 10 números separados por comas.";
    } else {
        numerosParesDiv.innerHTML = `Números Pares: ${numerosPares.join(", ")}`;
    }
}

form13() {
    let numerosInput = document.getElementById("num13").value;
    let numerosArray = numerosInput.split(",").map(num => parseInt(num.trim(), 10));
    let suma = numerosArray.reduce((acc, curr) => acc + curr, 0);
    let resultadoDiv = document.getElementById("resultado13");
    resultadoDiv.textContent = `La suma de los elementos es: ${suma}`;
}

form14() {
    let numerosInput = document.getElementById("num14").value;
    let numerosArray = numerosInput.split(",").map(num => parseInt(num.trim(), 10));
    let promedio = numerosArray.reduce((acc, curr) => acc + curr, 0) / numerosArray.length;
    let resultadoDiv = document.getElementById("resultado14");
    resultadoDiv.textContent = `El promedio de los elementos es: ${promedio.toFixed(2)}`;
}

form15() {
    let numerosInput = document.getElementById("num15").value;
    let numerosArray = numerosInput.split(",").map(num => parseInt(num.trim(), 10));
    let mayor = Math.max(...numerosArray);
    let menor = Math.min(...numerosArray);
    let resultadoDiv = document.getElementById("resultado15");
    resultadoDiv.textContent = `El número mayor es: ${mayor}, y el número menor es: ${menor}`;
}

form16() {
    let numerosInput = document.getElementById("num16").value;
    let numerosArray = numerosInput.split(",").map(num => parseInt(num.trim(), 10));
    let positivos = numerosArray.filter(num => num > 0);
    let negativos = numerosArray.filter(num => num < 0);
    let resultadoDiv = document.getElementById("resultado16");
    resultadoDiv.textContent = `Números positivos: ${positivos.join(", ")}. Números negativos: ${negativos.join(", ")}`;
}

form17() {
    const numeros = document.getElementById("numerosInput17").value.split(",");
    const numeroEspecifico = parseInt(document.getElementById("numeroEspecifico17").value);
    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (parseInt(numeros[i]) === numeroEspecifico) {
            contador++;
        }
    }

    document.getElementById("resultado17").innerText = `El número ${numeroEspecifico} aparece ${contador} veces.`;
}

form18() {
    const numeros = document.getElementById("numerosInput18").value.split(",");
    const numerosInvertidos = numeros.reverse();

    document.getElementById("resultado18").innerText = `Números en orden inverso: ${numerosInvertidos.join(", ")}`;
}

form19() {
    const numeros = document.getElementById("numerosInput19").value.split(",");
    const valor = parseInt(document.getElementById("valorInput19").value);
    const mayores = numeros.filter(num => parseInt(num) > valor);

    document.getElementById("resultado19").innerText = `Números mayores que ${valor}: ${mayores.join(", ")}`;
}
// Ejercicio 20: Encontrar duplicados
form20() {
    let numerosInput = document.getElementById("numeros").value;
    let numerosArray = numerosInput.split(",").map(num => parseInt(num.trim(), 10));
    let duplicados = {};
    let resultadoDiv = document.getElementById("resultado20");

    for (let i = 0; i < numerosArray.length; i++) {
        if (duplicados[numerosArray[i]] === undefined) {
            duplicados[numerosArray[i]] = 1;
        } else {
            duplicados[numerosArray[i]]++;
        }
    }

    let duplicadosArray = Object.keys(duplicados).filter(num => duplicados[num] > 1);
    resultadoDiv.textContent = `Números duplicados: ${duplicadosArray.join(", ")}`;
}

form21() {
    const cadenaInput = document.getElementById("cadenaInput21").value;
    const resultadoDiv = document.getElementById("resultado21");
    let resultado = "";
    for (let i = 0; i < cadenaInput.length; i++) {
        resultado += cadenaInput[i] + "<br>";
    }
    resultadoDiv.innerHTML = "Cada carácter en una línea diferente:<br>" + resultado;
}

form22() {
    const cadenaInput = document.getElementById("cadenaInput22").value;
    const resultadoDiv = document.getElementById("resultado22");
    const vocales = 'aeiouAEIOU';
    let contador = 0;
    for (let i = 0; i < cadenaInput.length; i++) {
        if (vocales.includes(cadenaInput[i])) {
            contador++;
        }
    }
    resultadoDiv.innerHTML = "El número de vocales en la cadena es: " + contador;
}

form23() {
    const cadenaInput = document.getElementById("cadenaInput23").value;
    const resultadoDiv = document.getElementById("resultado23");
    let resultado = "";
    for (let i = 0; i < cadenaInput.length; i += 2) {
        resultado += cadenaInput[i] + " ";
    }
    resultadoDiv.innerHTML = "Los caracteres en posiciones pares son:<br>" + resultado;
}
    
//!Victor

/*En otro archivo conectado a sus propio html */

//Test
// Dado un arreglo de nombres indicar cuantas veces se encuentra el primer nombre del arreglo en dicho arreglo siempre y cuando el primer nombre sea igual a "ana" 

aregglotest(){

    console.log("Ejercicio 11 ejecuntando")
    const entrada11 = document.getElementById("numeros11").value
    const num11 = entrada11.split(",")

    
    let msg = " "
    if (num11[0] !=="anna"){
        msg = ""
    }
    else {
        msg = "El primer nombre del arreglo no es anna"
    }

    document.getElementById("resultado11").innerText = msg

/*    let arreglo =[]
    arreglo.push(prompt("Digite un nombres"))
    arreglo.push(prompt("Digite un nombres"))
    arreglo.push(prompt("Digite un nombres"))
    arreglo.push(prompt("Digite un nombres"))
    
    if (arreglo[0] !== "anna"){

    }
    else{
        console.log("El primer nombre del arreglo no es anna")
    }
    
*/
}
}
let tareas = new tarea()