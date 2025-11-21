// Seleccionamos el area de texto y los campos de los carácteres y las palabras
const areaTexto = document.getElementById("texto");
const numeroCaracteres = document.getElementById("caracteres");
const numeroPalabrasEspacio = document.getElementById("palabrasEspacio");
const numeroPalabrasSalto = document.getElementById("palabrasSalto");


// Creamos una función que devuelve el número de carácteres
function contaCar(stringa){
    // A partir de la entrada, eliminamos los espacios y los saltos de línea y contamos los carácteres
    return stringa.replaceAll(" ","").replaceAll(`\n`,"").length;
}

// Creamos una función que reduzca un cualquier número de espacios en blanco a un solo espacio en blanco
function reducirEspacios(stringa){
    // Declaramos las variables que almacena el string original y lo que almacenará el string tras haber reducido los espacios. Como los espacios en blanco podrían ser un valor arbitrario, necesitamos un bucle que se pare cuando ya no hay más cambios. Las variable se necesitan inicializar al revés por las acciones en el interior del bucle
    let stringAntes = "";
    let stringDespues = stringa;
    do {
        stringAntes = stringDespues;
        stringDespues=stringAntes.replaceAll("  "," ");
    } while (stringDespues.length!==stringAntes.length); // Esta condición asegura que el número de espacios en blanco entre palabras ya es sólo uno
    return stringDespues;
}

// Creamos una función que devulve el número de palabras
function contarPalabras(stringa){
    let numPalabras = [];
    // Eliminamos los espacios en blanco desde el principio y final del string
    let stringaTrim = stringa.trim();
    // Se presentan 2 casos: 

    // Caso 1) - Consideramos como palabras distintas sólo la que están separadas por espacios
    // En este caso se pueden eliminar los saltos de línea, dando por sentado que a falta de un espacio el final de una línea y el principio de la siguiente es la misma palabra.
    let stringaEspacio = stringaTrim.replaceAll(`\n`,"");
    // Reducimos los espacios
    stringaEspacio = reducirEspacios(stringaEspacio);
    // Dividimos por espacios
    let arrayPalabrasEspacio = stringaEspacio.split(" ");
    //  Si la cadena de caracteres en la entrada es una cadena vacía, arrayPalabrasEspacio sólo contiene el elemento "", que claramente no es una palabra
    // Si este es el caso se necesita restar 1 a la longitud del array. Almacenamos el valor en numPalabras
    if ((arrayPalabrasEspacio.length==1) && (arrayPalabrasEspacio[0]=="")) {
        numPalabras.push(arrayPalabrasEspacio.length - 1);
    } else {
        // En caso contrario el número de palabras corresponde a la longitud de arrayPalabrasEspacio. Almacenamos el valor en numPalabras
        numPalabras.push(arrayPalabrasEspacio.length);
    }

    // Caso 2) - Consideramos como palabras distintas tanto las que están separadas por espacios como las que están separadas por saltos de línea
    // En este caso se pueden substituir los saltos de línea por espacios, dando por sentado que no hace falta introducir un espacio entre dos palabras al cambiar de línea
    let stringaSalto = stringaTrim.replaceAll(`\n`," ");
    // Reducimos los espacios
    stringaSalto = reducirEspacios(stringaSalto);
    // Dividimos por espacios
    let arrayPalabrasSalto = stringaSalto.split(" ");
    //  Si la cadena de caracteres en la entrada es una cadena vacía, arrayPalabrasSalto sólo contiene el elemento "", que claramente no es una palabra
    // Si este es el caso se necesita restar 1 a la longitud del array. Almacenamos el valor en numPalabras
    if ((arrayPalabrasSalto.length==1) && (arrayPalabrasSalto[0]=="")) {
        numPalabras.push(arrayPalabrasSalto.length - 1);
    } else {
        // En caso contrario el número de palabras corresponde a la longitud de arrayPalabrasSalto. Almacenamos el valor en numPalabras
        numPalabras.push(arrayPalabrasSalto.length);
    }

    return numPalabras;
}

// Creamos una función que publica los números
function publicar(num, elem){
    elem.textContent = num;
}

// Añadimos el EventListener al area de texto
areaTexto.addEventListener("keyup",(event)=>{
    // Contamos los carácteres
    let numCar = contaCar(event.target.value);
    // Contamos las palabras
    let numPal = contarPalabras(event.target.value);
    // Publicamos llos números
    publicar(numCar, numeroCaracteres);
    publicar(numPal[0], numeroPalabrasEspacio);
    publicar(numPal[1], numeroPalabrasSalto);
});