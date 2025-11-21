// Seleccionamos los dos campos de entrada, el del resultado y los 4 botones
const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");
const res = document.getElementById("resultado");
const botonSumar = document.getElementById("sumar");
const botonRestar = document.getElementById("restar");
const botonMultiplicar = document.getElementById("multiplicar");
const botonDividir = document.getElementById("dividir");


// Creamos una función que a partir de un elemento valida su valor y devuelve el número
function comprubaEntrada(elemento) {
    let entrada = elemento.value;
    if (parseFloat(entrada)||parseFloat(entrada)==0) {
        // si la entrada es un número
        return parseFloat(entrada);
    } else {
        // Si el elemento no es un número lanza un error
        alert(`El valor del ${(elemento.id==="numero1")?"primer":"segundo"} número no es admitido`);
    }
}

// Creamos una función que comprueba si un número es igual a cero y alerta
function compruebaCero(numero){
    if (numero) {
        // Si el número es distinto de cero
        return false;
    } else {
        // Si es igual a cero
        alert("El divisor no puede ser igual a 0");
        return true;
    }
}

// Creamos una función que a partir del id del botón elige la operación y devuelve el resultado o undefined, si las entradas no son válidas
function calculadora(evento){
    // Comprobamos lasa entradas
    let numero1 = comprubaEntrada(num1);
    let numero2 = comprubaEntrada(num2);
    if (numero1!=undefined&&numero2!=undefined) {
        // Si lo dos números son definidos seguimos
        switch (evento.target.id) {
            case "sumar":
                return numero1 + numero2;
                break;
            case "restar":
                return numero1 - numero2;
                break;
            case "multiplicar":
                return numero1 * numero2;
                break;
            case "dividir":
                // Comprobamoos el segundo número si es distinto a cero procedemos
                if (!compruebaCero(numero2)) {
                    return numero1 / numero2;
                } //Si el segundo número es igual a cero, no hacemos nada para que la función devuelva un undefined
                break;
        }
    } // Si por lo menos uno de los dos números no es definido, no hacemos nada para que la función devuelva un undefined
}

// CReamos una función que actualice el campo del resultado
function actualizaResultado(resultado, elemento){
    // Inicialmente borramos el resultado anterior
    elemento.placeholder="";
    // Comprobamos si el resultado es distinto de undefined, lo actualizamos
    if (resultado!=undefined) {
        // Actualizamos el resultado
        elemento.placeholder=`${resultado}`;
    }
}

// Añadimos el EventListener a los botones
botonSumar.addEventListener("click",(event)=>{
    actualizaResultado(calculadora(event),res);
});
botonRestar.addEventListener("click",(event)=>{
    actualizaResultado(calculadora(event),res);
});
botonMultiplicar.addEventListener("click",(event)=>{
    actualizaResultado(calculadora(event),res);
});
botonDividir.addEventListener("click",(event)=>{
    actualizaResultado(calculadora(event),res);
});