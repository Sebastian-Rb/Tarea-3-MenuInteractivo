const read = prompt
const write = alert
//!-----------Gabriel----------------!
//1.-Cómo convertir de grados Celsius a Fahrenheit
// Descripción del problema
// Queremos convertir una temperatura de grados Celsius a grados Fahrenheit.
// Pedimos al usuario que ingrese la temperatura en grados Celsius.
// Usamos la fórmula: (C * 9/5) + 32 para hacer la conversión.
// Mostramos el resultado en grados Fahrenheit.
//Primero, pide al usuario que ingrese la temperatura en grados Celsius. Luego, calcula la conversión a grados Fahrenheit usando la fórmula (C * 9/5) + 32. Finalmente, muestra el resultado de la conversión en grados Fahrenheit.

// Ejercicio JavasCript

function gradosaf(){
    const gradosC = read ('Ingresar grados en Celsius: ');
    const gradosFahrenheit = (gradosC * 9/5) + 32;
    alert(gradosC ," grados Celsius convertidos en grados fahrenheit es: ", gradosFahrenheit);
    }
    
    
    //2.-Algoritmo que lea un número entero, obtenga y presente el doble y el triple del número.
    //Descripcion
    //Se solicita al usuario que ingrese un número entero.
    //Se calcula el doble y el triple de ese número.
    //Se presenta el resultado de los cálculos al usuario.
    // Pasos para el algoritmo.
    //Solicitar al usuario que ingrese un número entero.
    //Obtener el número ingresado por el usuario.
    //Calcular el doble del número ingresado.
    //Calcular el triple del número ingresado.
    //Presentar el resultado de los cálculos al usuario.
    //Ejercico JavaScript
    
    function dobletriple() {
    const num = parseInt (read(' Ingresar numero: '));
    const numDoble = num * 2;
    const numTriple = num *3;
    alert("El doble de",num  ,"es: ", numDoble, "y el triple de", num, "es:", numTriple);
    }
    
    
    //3.-Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.
    // Descripción
    //Se solicita al usuario que ingrese 4 números.
    //Se calcula el producto, la suma y la media aritmética de los números ingresados.
    //Se muestra el resultado de los cálculos.
    //Pasos para el algoritmo 
    //Solicitar al usuario que ingrese los 4 números.
    //Calcular el producto, la suma y la media aritmética de los números ingresados.
    //Mostrar los resultados de los cálculos.
    
    //Ejercicio JavaScript
    
    function arreglosNumeros () {
        let numeros = [];
        let valor = parseFloat (read('Ingresar numero: '));
        numeros.push(valor);
        valor = parseFloat (read ('Ingresar numero: '));
        numeros.push(valor);
        valor = parseFloat (read( 'Ingresar numero: '));
        numeros.push(valor);
        valor = parseFloat (read( 'Ingresar numero: '));
        numeros.push(valor);
        alert (numeros);
        const sumaNumeros = numeros [0] + numeros [1] + numeros [2] + numeros [3];
        const mediaAritmetica = sumaNumeros / 4;
        alert("La suma de los numeros es: ",sumaNumeros)
        alert("Su media aritmetica es:",mediaAritmetica)
    }
    
    
    //4.-Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos (nota: una libra equivale a 0.453593 kilogramos).
    // Descripción
    // Le pedimos al usuario que nos diga cuánto pesa en libras.
    //Luego, vamos a cambiar ese peso a kilogramos y gramos.
    //Finalmente, le mostraremos al usuario cómo queda el peso convertido.
    //Pasos para el algoritmo 
    //Pedirle al usuario que nos diga cuánto pesa en libras.
    //Calcular el peso en kilogramos multiplicando el peso en libras por 0.453593.
    //Calcular el peso en gramos multiplicando el peso en libras por 453.592.
    //Mostrarle al usuario cómo quedó el peso convertido, tanto en kilogramos como en gramos.
    
    //Ejercicio JavaScript
    
    function librasKgGramos() {
    const pesoLibras = parseFloat(read('Ingresar su peso en libras: '));
    const KG = 0.453593;
    const pesoKg = pesoLibras * KG;
    const pesoGramos = pesoLibras * 453.592;
    alert(pesoLibras, "libras convertidos en kilogramos es" ,pesoKg.toFixed(2),"kg y convertidos en gramos es", pesoGramos);
    }
    
    //5.-Diseñar un algoritmo que resuelva la siguiente expresión matemática: 
    //x = ((sen(a) + cos(b)) * (trunc(a) mod 2)) + (raiz(a^3) / (a*b + c))
    //Descripción
    //Queremos resolver una expresión matemática usando los valores de a, b y c que nos den.
    //Calculamos el valor de la expresión usando funciones trigonométricas como seno y coseno, además de la raíz cuadrada y el operador módulo.
    //Finalmente, mostramos el resultado de la expresión.
    //Pasos para el algoritmo 
    //Definir una función para resolver la expresión matemática con los parámetros a, b y c.
    //Calcular los valores de las funciones seno y coseno para a y b, respectivamente.
    //Calcular la raíz cuadrada del cubo de a.
    //Calcular la expresión utilizando los valores obtenidos y los parámetros b y c.
    //Llamar a la función con valores de ejemplo y mostrar el resultado.
    
    //Ejercicio JavaScript
    
    function resolucion() {
        const senA = Math.sin(4)
        const cosB = Math.cos(5)
        const numeroEntero = Math.trunc(4)
        const mod2 = numeroEntero % 2
        const raizCubica = Math.sqrt(Math.pow(4, 3))
        const aPorbMasc = (4 * 5) + 7
        const resultado = ((senA + cosB) * mod2) + (raizCubica / aPorbMasc)
        alert("El resultado de la expresion matematica es: ", resultado, "Los valores de a,b y c son 4,5 y 7")
    }

// !-------- Victor -----------!

//6. un empleado trabaja 40 horas en jornada normal en la semana a razon $5 la hora. si trabaja mas de 40 horas, estas seran considerados horas de sobre tiempo que se pagan aal doble de la hora de la jorada normal. el porcetanje del seguro social (iess) es del 10% del ingreso total . se desea saber cual es el valor del sueldo sobre tiempo, ingreso total ,seguro social y el neto a recibir.
// Leer el número de horas trabajadas por el empleado
// Si el número de horas trabajadas es menor o igual a 40
// Calcular el salario multiplicando las horas trabajadas por la tarifa por hora ($5)
// Calcular el seguro social como el 10% del salario
// Si el número de horas trabajadas es mayor a 40
//  - Calcular las horas extras trabajadas
//Calcular el salario regular multiplicando 40 horas por la tarifa por hora ($5)
// Calcular el salario de horas extras multiplicando las horas extras por el doble de la tarifa por hora ($10).
// Calcular el salario total sumando el salario regular y el salario de horas extras
// Calcular el seguro social como el 10% del salario total
// Calcular el neto a recibir restando el seguro social del salario total
//Mostrar el valor del salario, horas extras, ingreso total, seguro social y neto a recibir
// Fin.

function Pagosaltrabajador(){

    const  salarioporhora= 5
    const horasTrabajadas= 45
    const porcentajeIESS= 0.10
    let horasNormales= horasTrabajadas > 40 ? 40 : horasTrabajadas
    let sueldoJornadanormal= horasNormales* salarioporhora
    let  horassobreTiempo= horasTrabajadas > 40? horasTrabajadas - 40 : 0 
    let sueldoSobretiempo= horassobreTiempo* salarioporhora * 2
    let ingresoTotal=sueldoJornadanormal +  sueldoSobretiempo 
    let seguroSocial= ingresoTotal*porcentajeIESS
    let netoArecibir= ingresoTotal - seguroSocial

    alert("sueldo de la jornada :  $" +sueldoJornadanormal)
    alert ("sueldo de sobre tiempo:  $" +sueldoSobretiempo)
    alert ( "el ingreso total es " + ingresoTotal)
    alert("su seguro social es " + seguroSocial)
    alert(" neto a recibir es " + netoArecibir)
}

//7. algoritmo que pida dos nueros  presenta el mayor de los dos siempre y cuando el primero se par y el otro impar
//Leer dos números
//Verificar si el primer número es par y el segundo número es impar
//Si ambos criterios se cumplen
//Comparar los dos números y determinar cuál es el mayor
//no se cumplen los criterios
//Mostrar un mensaje indicando que los números no cumplen con los requisitos
//Mostrar el mayor de los dos números si se cumplen los criterios
//Fin
function elnumeromayordedos(){
    let numero1= prompt("ingrese el primer numero")
    let numero2= prompt("ingrese el segundo numero")
    if (numero1 % 2 === 0 && numero2 % 2 !==0){
    if ( numero1> numero2){
        alert( "el mayor de los dos numeros es "+ numero1)
    } else{
        alert(" el mayor de los numeros es " + numero2)
        }
        } else {
            alert (" las condiciones no se cumplen el primer numero debe ser par y el segundo debe ser impar")
        
        }   
    }

//8. leer un caracter y deducir si esta o no comprendido entre la letra  a y z ambas inclusive y si no verificar si es un signo de puntuacion ",.;:" y si no presentar solo el caracter
 //Leer un carácter
 //Verificar si el carácter está comprendido entre las letras a y z (ambas inclusive)
 //Si está entre a y z
 //Mostrar un mensaje indicando que es una letra minúscula
 //Verificar si el carácter es un signo de puntuación (",", ".", ";", ":")
//Si es un signo de puntuación
 //Mostrar un mensaje indicando que es un signo de puntuación
 //Si el carácter no es una letra minúscula ni un signo de puntuación
 //Mostrar un mensaje indicando el carácter ingresado
 //Fin
function Letrasosignos(){
    let caracter= prompt("  ingrese un carater")
    if (caracter >="a" && caracter<= "z"){
       alert(" el caracter") + caracter (" es una letra minuscula")
   
    } else if(caracter === ',' || caracter=== '.' || caracter=== ';' || caracter === ':'){
      alert(" el caracter" + caracter + (" es un signo de puntuacion"))
    }else{
      alert(" el caracter ingresado es "+ caracter + "'")
    }
   }

//9. determinar cuanto se debe pagar por x catidad de colas considerando que si son menos de 12 colas el costo pot unidad es de 0,25 caso  contrario el precio sera 10% menos
//Leer la cantidad de colas
//Verificar si la cantidad de colas es menor a 12
//Si es menor a 12
//Calcular el costo total multiplicando la cantidad de colas por $0.25
//Si es mayor o igual a 12
//Calcular el costo total multiplicando la cantidad de colas por $0.225 (10% de descuento)
//Mostrar el costo total de las colas
//Fin
function costoColas(){

    let cantidadColas= prompt(" ingrese la cantidad que desea comprar ")
    let precioUnitario= 25
    let descueto= 0.10
    if (cantidadColas < 12){
         cantidadColas *precioUnitario
    } else( cantidadColas*precioUnitario)
    let costoFinal= cantidadColas* precioUnitario - descueto
    
    alert(" su costo total es " + costoFinal)
    }

//10. el almacen algoritmo X tiene una promocion  a todos los trajes que tienen un precio superior a 200 se les aplicara un descuento del 10 %  y el resto tendran un descuento de solo 10 dolares presentar el valor de cada traje con su respectivo valor descuento y pago considerando el iva del 15%
//Leer el precio del traje
//Verificar si el precio del traje es superior a 200
//Si es superior a 200
//Aplicar un descuento del 10% al precio del traje
//Si no es superior a 200:
//Aplicar un descuento fijo de $10 al precio del traje
//Mostrar el precio final del traje después de aplicar el descuento
//Fin
function AlgoritmoX() {
    let precioTraje = parseFloat(prompt("Ingrese el precio del traje: "))
    if (precioTraje > 200) {
        let descuento = precioTraje * 0.10
        precioTraje -= descuento
        alert("Se aplicó un descuento del 10%.")
    } else {
        precioTraje -= 10
        alert("Se aplicó un descuento de $10.")
    }
    alert("El precio final del traje es: $"+ precioTraje)
    }

//!----------------- Arianna -----------------!

// 11.Dado un dia en numero, presentar el nombre de ese dia. Para la solucion utilice arreglos.
// analisis de requerimientos
// entrada: numeroDeDia = ""
// proceso: diasDeLaSemana como ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
// salida:  Escribir "El día ", numeroDeDia, " corresponde a ", nombreDelDia, "."
// Codigo Js 

function obtenerNombreDelDia() {
    let diasDeLaSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado","domingo"]
    let numeroDeDia = parseInt(read("Ingrese un número del 1 al 7 para obtener el nombre del día:"))
    
    if (numeroDeDia >= 1 && numeroDeDia <= 7) {
        alert("El día " + numeroDeDia + " corresponde a " + diasDeLaSemana[numeroDeDia - 1] + ".")
    } else {
        alert("Número de día inválido. Por favor ingrese un número del 1 al 7.");
    }
}


//12. Dado un mes en numero, presentar el nombre de ese dia. Para la solucion utilice arreglos.
// analisis de requerimientos
// entrada: numerodemes = ""
// proceso: mesesDelAño como ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre","noviembre", "diciembre"]
// salida:  Escribir "El numero ", numeroDeDia, " corresponde a ", mesdelaño, "."
//! CODIGO JS
function mes() {
    let mesesDelAño = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
    let numeroDeMes = parseInt(read("Ingrese un número del 1 al 12 para obtener el nombre del mes:"))

    if (numeroDeMes >= 1 && numeroDeMes <= 12) {
        alert("El mes " + numeroDeMes + " corresponde a " + mesesDelAño[numeroDeMes - 1] + ".")
    } else {
        alert("Número de mes inválido. Por favor ingrese un número del 1 al 12.")
    }
}

//* 13. Dado 5 nombres almacenalo en un arrreglo y luego presentar cada nombre del arreglo desde el ultimo al primero sin usar sin ciclos 
// entrada: nombres=[Sebastian, Victor, Gabriel, Andres, Arianna]
// proceso: alert(nombres[4])
// alert(nombres[3])
// alert(nombres[2])
// alert(nombres[1])
// alert(nombres[0])
// salida : se muestan los nombres
// !CODIGO
function nombres(){
    let nombres = ["Sebastian", "Victor", "Gabriel", "Andres", "Arianna"];    
    alert(nombres[4])
    alert(nombres[3])
    alert(nombres[2])
    alert(nombres[1])
    alert(nombres[0])
}

//* 14.Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección.
//? entrada: dirección ""
// Proceso: ingresa la dirección 
// Salida: salida de la dirección de los 3 caracteres y su dirección 
function dirección(){
let direccion = prompt("Por favor, ingresa una dirección:")
alert("Dirección:", direccion)
alert("Primer carácter:", direccion[0])
let indiceMedio = Math.floor(direccion.length / 2)
let caracterMedio = direccion[indiceMedio]
alert("Carácter del medio:", caracterMedio)
alert("Último carácter:", direccion[direccion.length - 1])
}

//*15.	Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo.

// Entrada: no se ingresa valor 
// Proceso: se llena el arreglo aleatoriamente 
// Salida: verifica si el primer y el último vamos es par positivo o par negativo 

function arreglo(){
let valores = []
for (let i = 0; i < 5; i++) {
  valores.push(Math.round(Math.random() * 200 - 100))
}

alert(valores)

if (valores[0] > 0 && valores[0] % 2 === 0) {
  alert(valores[0])
}

if (valores[4] < 0 && valores[4] % 2 !== 0) {
  alert(valores[4])
}
}

//!---------Toscano----------!

//!16.	Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.
//!analisis de requerimiento:
//entrada:nombres=[]
//proceso: escribir nombres.push(read("ingrese el primer nombre:"));
// leer primer nombre
// escribir nombres.push(read("ingrese el segundo nombre:"));
// leer segundo nombre 
// escribir nombres.push(read("ingrese el tercer nombre:"));
// leer tercer nombre
//nombres.forEach(nombre => {
//leer(`Nombre: ${nombre}, El primer carácter: ${nombre[0]}, El ultimo carácter: ${nombre[nombre.length - 1]}`);
//});
//salida:mostrar mostrar mensaje
//!java
function ejercicio16(){
    let nombres=[]
    nombres.push(read("ingrese el primer nombre:"))
    nombres.push(read("ingrese el segundo nombre:"))
    nombres.push(read("ingrese el tercer nombre:"))
    
    nombres.forEach(nombre => {
        alert(`Nombre: ${nombre}, El primer carácter: ${nombre[0]}, El ultimo carácter: ${nombre[nombre.length - 1]}`);
    });
    
    }
    
    //!17.	Dada una cadena presentar el primer carácter siempre y cuando sea un digito
    //!analisis de requerimiento
    //entr: escribir cadena="098786707280"
    //proceso: escribir "Dada una cadena presentar el primer carácter siempre y cuando sea un digito"
    //leer el mensaje
    //escribir("La cadena es:",cadena )
    //leer mensaje
    //si (cadena>="0"||cadena<="9") {
        //alert("El primer caracter es un digito:",cadena.charAt(0))
    //}
    //si no{
        //alert("El primer caracter no es un digito.")
    //}
    //finsi
    //sal: mostrar el texto
    //!java
    function ejercicio17(){
        let cadena="n86707280"
        let caracter=cadena.charAt(0)
        alert ("Dada una cadena presentar el primer carácter siempre y cuando sea un digito")
        alert("La cadena es:",cadena )
        if (caracter>="0"&&caracter<="9") {
            alert("El primer caracter es un digito:",caracter)
        }
        else{
            alert("El primer caracter no es un digito.")
        }
        }
    
        //!18.	Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra
    //!analisis de requerimiento
    //entrada: cadena="""(leer), caracter=""(leer)
    //pro:leer ("Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra")
    //leer("La cadena es:",cadena )
    //si (caracter>="0"&&caracter<="9"||caracter==";"||caracter==":"||caracter=="."||caracter=="," ) {
        //leer ("el ultimo caracter no es una letra")
    //}
    //si np{
        //leer("El ultimo caracter es una letra.",caracter)
    //}finish
    //sal:mostrar mensaje
    //!java
    function ejercicio18(){
        let cadena="o12m6j"
        caracter=cadena.charAt(5)
    alert ("Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra")
    alert("La cadena es:",cadena )
        if (caracter>="0"&&caracter<="9"||caracter==";"||caracter==":"||caracter=="."||caracter=="," ) {
            alert("el ultimo caracter no es una letra")
        }
        else{
            alert("El ultimo caracter es una letra.",caracter)
        }
        }
    
        //!19.	Dada una cadena presentar el primer carácter siempre y cuando sea una vocal
    //!analisis de requerimiento
    //entr: letra="Hola786707280"(leer)
        //caracter=letra.charAt(0)(leer)
        //pro: leer ("Dada una cadena presentar el primer carácter siempre y cuando sea un digito")
       // leer("La cadena es:",letra )
        //si (caracter == "A" || caracter == "E" || caracter == "I" || caracter == "O" || caracter == "U"||caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u") {
            //leer ("El primer caracter es una vocal:",caracter)
        //}
       // si no{
        //   leer("El primer caracter no es una vocal.")
        //}finsi
        //!java
    function ejercicio19(){
        let letra="Hola786707280"
        let caracter=letra.charAt(0)
        alert ("Dada una cadena presentar el primer carácter siempre y cuando sea un digito")
        alert("La cadena es:",letra )
        if (caracter == "A" || caracter == "E" || caracter == "I" || caracter == "O" || caracter == "U"||caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u") {
            alert("El primer caracter es una vocal:",caracter)
        }
        else{
            alert("El primer caracter no es una vocal.")
        }
        }
        
        //!20.	Dada una cadena presentar el carácter de en medio, siempre y cuando sea un carácter de puntuación: “;” | “:” | “.” | “,”
    //!analisis de requerimiento 
    //ent:puntuación=""(leer)
     //pro:  caracter=puntuación.charAt(4)
        //leer ("Dada una cadena presentar el carácter de en medio, siempre y cuando sea un carácter de puntuación: “;” | “:” | “.” | “,”")
        //leer("La cadena es:",puntuación )
        //si (caracter==";"||caracter==":"||caracter=="."||caracter=="," ) {
            //leer ("El caracter del medio es un caracter de puntunción:",caracter)
        //}
        //si no{
           // leer("El caracter del medio no es caracter de puntunción.")
        //}finsi
        //sal:mostrar mensaje
    function ejercicio20(){
        let puntuación="hola,adios"
        let caracter=puntuación.charAt(4)
        alert ("Dada una cadena presentar el carácter de en medio, siempre y cuando sea un carácter de puntuación: “;” | “:” | “.” | “,”")
        alert("La cadena es:",puntuación )
        if (caracter==";"||caracter==":"||caracter=="."||caracter=="," ) {
            alert("El caracter del medio es un caracter de puntunción:",caracter)
        }
        else{
            alert("El caracter del medio no es caracter de puntunción.")
        }
        }

//!-------------Sebastian------------!

/**
 * Requerimientos: Dos caracteres para comparar con operadores de comparación
 * Entradas: primercaracter, segundocaracter
 * Proceso: Comparar los caracteres con operadores de comparación - primercaraacter == segundocaracter 
 *          primercaracter < segundocaracter, primercaracter > segundocaracter
 * Salidas: "Los caracteres son iguales" o "El primer caracter es menor que el segundo" o "El primer caracter es mayor que el segundo"
 */
function CaracterComparar(){
    let primercaracter = "a"
    let segundocaracter = "f"
    if (primercaracter == segundocaracter){
        alert("Los caracteres son iguales")
    } else if (primercaracter < segundocaracter){
        alert("El primer caracter es menor que el segundo")
    } else {
        alert("El primer caracter es mayor que el segundo")
    }
}
/** 
 * Requerimientos: Dos nombres para comparar con operadores de comparación
 * Entradas: nombreuno, nombredos / ambos tipo caracter
 * Proceso: Comparar los nombres con operadores de comparación - nombreuno == nombredos
 *          nombreuno < nombredos, nombreuno > nombredos
 * Salidas: "Los nombres son iguales" o "El primer nombre es menor que el segundo" o "El primer nombre es mayor que el segundo"
 */

function dosnombres (){
    let nombreuno = "Sebastian"
    let nombredos = "Guillermo"

    if (nombreuno == nombredos){
        alert("Los nombres son iguales")
    } else if (nombreuno < nombredos){
        alert(nombreuno," es menor que ", nombredos)
    } else {
        alert(nombreuno," es mayor que ", nombredos)
    }
}

/**
 * Requerimientos: Una cadena para contar sus elementos
 * Entradas: elementocadena = "", numeroelemento = 0
 * Procesos: Contar los elementos con .length 
 * Salidas: "La cadena tiene ", numeroelemento, " elementos"
 */

function cadena (){
let elementocadena = "Esta cadena tiene 30 elementos" 
let numeroelemento = elementocadena.length

alert("La cadena tiene ", numeroelemento, " elementos") 
}

/**
 * Requerimientos: Un arreglo para contar sus elementos
 * Entradas: arregloelemento = [], numeroelemento = nombrevariable.length
 * Procesos: Contar los elementos con .length
 * Salidas: "El arreglo tiene ", numeroelemento, " elementos"
 */
function arreglosebas (){
    let arregloelemento = [1,2,3,4,5,6,7,8,9,10]
    let numeroelemento = arregloelemento.length

    alert("El arreglo tiene ", numeroelemento, " elementos")
}


//? !-- FUNCION PARA MENU DE EJERCICIOS --!   
//* Notaza: Esta funcion es para crear la parte visual del menu el += se usa para agregar una linea, seria lo mismo que escribir
//*         menu = menu + "Segundo ejercicio /n", ademas /n es necesario para enlistar los ejercicios por medio de salto de linea  

function seleccionmenu(){
    let menu = "Seleccione una opcion:\n"
    menu += "1. Celcius a Fahrenheit \n"
    menu += "2. El doble y el triple del numero. \n"
    menu += "3. Producto, suma, media aritmetica de un numero. \n"
    menu += "4. Libras a Kilogramos y gramos. \n"
    menu += "5. Algoritmo de expresion matematica. \n"
    menu += "6. Sueldo neto de un trabajador mas su seguro social. \n"
    menu += "7. Dos numeros, mayor, menor, par o impar. \n"
    menu += "8. Caracter A-Z o ;.,: \n"
    menu += "9. Descuento de colas \n"
    menu += "10. Almacen AlgoritmoX \n"
    menu += "11. Dias de la semana en numeros \n"
    menu += "12. Meses del año en numeros \n"
    menu += "13. Nombres en un arreglo \n"
    menu += "14. Caracteres de una direccion \n"
    menu += "15. Valores par positivo e impar negativo \n"
    menu += "16. Primer y ultimo caracter de 3 nombres \n"
    menu += "17. Caracter digito de una cadena \n"
    menu += "18. Caracter letra de una cadena \n"
    menu += "19. Caracter vocal de una cadena \n"
    menu += "20. Caracter de puntuacion de una cadena \n"
    menu += "21. Caracteres mayores, menores o iguales \n"
    menu += "22. Nombres mayores, menores o iguales \n"
    menu += "23. Cuantos elementos tiene una cadena \n" 
    menu += "24. Cuantos elementos tiene un arreglo \n" 
    alert("\n")
    return prompt(menu + "Ingrese el numero de ejercicio a ejecutar: ")
    
}
//  !-- MAPEO DEL MENU DE SELECCION --!

let opciones = {
    "1": gradosaf, 
    "2": dobletriple,
    "3": arreglosNumeros,
    "4": librasKgGramos,
    "5": resolucion,
    "6": Pagosaltrabajador,
    "7": elnumeromayordedos,
    "8": Letrasosignos,
    "9": costoColas,
    "10": AlgoritmoX,
    "11": obtenerNombreDelDia,
    "12": mes,
    "13": nombres,
    "14": dirección,
    "15": arreglo,
    "16": ejercicio16,
    "17": ejercicio17,
    "18": ejercicio18,
    "19": ejercicio19,
    "20": ejercicio20,
    "21": CaracterComparar,
    "22": dosnombres,
    "23": cadena,
    "24": arreglosebas,
}

let opcion = seleccionmenu()
if (opciones[opcion]) {
    opciones[opcion]()
} else {
    alert("El numero de ejercicio no existe")
}

