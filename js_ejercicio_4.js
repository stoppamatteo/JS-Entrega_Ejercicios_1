// Seleccionamos el campo de texto la lista y los elementos de la lista
let texto = document.getElementById("texto");
let lista = document.getElementById("lista")
let elementos = document.getElementsByTagName("li");
// Creamos una copia del HTMLCollection de los elementos para tener memoria de la lista completa
let arrayElementos = [...elementos];


// Creamos una función que a partir de una lista de elementos y un texto comprueba si éste es contenido y devulve un array con sólo los elementos cuyo texto contiene el proporcionado.
function comprubaTexto(list,text) {
    // Creamos el array filtrado y lo devolvemos
    return arrayElementos.filter(elem=>elem.textContent.toLowerCase().includes(text.toLowerCase()));
}

// Creamos una función que a partir del array de elementos filtrados y la lista, pinte los elementos filtrados
function pintaElementos(arrayFiltrado,list){
    // Vaciamos la lista
    list.innerHTML="";
    // Colgamos los elementos filtrados
    arrayFiltrado.map(elem=>list.append(elem));
}

// Añadimos el EventListener al al campo de texto
texto.addEventListener("keyup",()=>{
    // Filtramos con el texto introducido
    let filtrado = comprubaTexto(elementos,texto.value);
    // Refrescamos la lista pintando los elementos filtrados
    pintaElementos(filtrado,lista);
})
