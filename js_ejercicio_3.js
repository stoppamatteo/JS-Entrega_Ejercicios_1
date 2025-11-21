// Seleccionamos los elementos button y campo de texto y lista
const boton = document.getElementsByTagName("button")[0];
let texto = document.getElementById("texto");
let lista = document.getElementById("lista");


// Creamos una función que crea la estrucura del neuvo elemento, añadiendo texto, botón y EventListener
function nuevoElemento() {
    // Creamos el li
    let nuevoLi = document.createElement("li");
    // Añadimos el texto al nuevo elemento
    nuevoLi.textContent=texto.value;
    // Creamos el nuevo botón
    let botonCierre = document.createElement("button");
    botonCierre.textContent="X";
    botonCierre.setAttribute("type","submit");
    // Damos un mínimo de estilo
    botonCierre.style.display = "inline-block";
    botonCierre.style.marginLeft = "30px";
    // Añadimor el botón al nuevo elemento
    nuevoLi.append(botonCierre);
    // Añadimos el EventListener para cerrar
    botonCierre.addEventListener("click", (event)=>{
        // Evitamos el coportamiento por defecto
        event.preventDefault();
        // Configuramos la acción de eliminar el elemento
        event.target.parentElement.remove();
    });
    
    // Devolvemos el nuevo elemento
    return nuevoLi;
}

// Añadimos el EventListener al botón de agregar
boton.addEventListener("click", (event)=>{
    // Evitamos el coportamiento por defecto
    event.preventDefault();
    // Si el campo de texto no está vacío, gregamos a la lista si no, lanzamos un mensaje
    if (texto.value) {
        lista.append(nuevoElemento());
    } else {
        alert("El elemento no puede estar vacío");
    }
    
})
