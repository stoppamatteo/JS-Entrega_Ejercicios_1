// Seleccionamos el campo de la llongitud, el botón y el campo del resultado
const long = document.getElementById("longitud");
const botonGenerar = document.getElementById("generador");
const resul = document.getElementById("resultado");

// Generamos unos strings de carácteres
let minusculas = "abcdefghijklmnopqrstuvwxyz";
let mayusculas = minusculas.toUpperCase();
let numeros = "1234567890";
let caracteresEspeciales="+-*/=!?%$&.,;:¨{}[]()";

// Creamos una función que compruebe la entrada
function compruebaEntrada(elemento){
    // Si la entrada está vacía o invalida (al ser un input tipo number, una entrada que no sea un número se devolverá como "") o el número ingresado es menor que 4
    if (elemento.value==""||parseInt(elemento.value)<4){
        alert("Error: La longitud debe ser mayor o igual a 4");
        return false;
    } else {
        // Si no devuelve el número
        return parseInt(elemento.value);
    }
}

// Creamos una función que selecciona un elemento de un array aleatoriamente
function eleentoAleatorio(array){
    // Generamos un número aleatorio entre 0 y la longitud del array de entrada menos 1
    return array[Math.floor(Math.random()*array.length)];
}

// Creamos una función que mezcla los elementos de un array
function meszclador(array){
    let arrayMezclado = [];
    let longitudArray = array.length;
    let indiceAzar=0;
    for (let i = 0; i < longitudArray; i++) {
        do { // Generamos un índice al azar hasta que no se encuentre una posición libre en el arrayMezclado 
            indiceAzar = Math.floor(Math.random() * longitudArray);
        } while (arrayMezclado[indiceAzar]);
        arrayMezclado[indiceAzar] = array[i];
    }
    return arrayMezclado;
}

// Creamos una función que crea una contraseña aleatoria
function generaPassword(numero){
    let password = "";
    // Sacamos un elemento aleatorio por cada uno de los strings de de carácteres para asegurarnos que la contraseña contenga por lo menos uno de casa tipo
    password += eleentoAleatorio([...minusculas]);
    password += eleentoAleatorio([...mayusculas]);
    password += eleentoAleatorio([...numeros]);
    password += eleentoAleatorio([...caracteresEspeciales]);
    // Si la longitud de la contraseña es mayor de 4, seguimos
    if (numero>4) {
        for (let i = 5; i<=numero; i++){
            password += eleentoAleatorio([...minusculas, ...mayusculas, ...numeros, ...caracteresEspeciales]);
        }
    } else {
        // En caso contrario mezclamos y cortamos. ATENCIÖN: Esta posibilidad se pone por si se usara la función de forma independiente, pero no se verificará mnunca en el programa principal!!!
        let passwordFinal = meszclador([...password]);
        password = passwordFinal.slice(0,numero);
    }
    // Mezclamos los carácteres de la contraseña
    password = meszclador([...password]);
    // Transformamos el array en string
    password = password.toString().replaceAll(",","");
    // Devolvemos la contraseña generada
    return password;
}

// Creamos una función que publica la contraseña
function publicar(pass,elem){
    elem.textContent = pass;
}

// Añadimos el EventListener a los botones
botonGenerar.addEventListener("click",()=>{
    let passwd = "";
    // Comprobamos la entrada
    let respuesta = compruebaEntrada(long);
    // Si la entrada es válida, generamos la contraseña
    if (respuesta){
        passwd = generaPassword(respuesta);
    }
    // Publicamos la contraseña generada
    publicar(passwd,resul);
});