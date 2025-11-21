// Seleccionamos los elementos button y p con id contador
const boton = document.getElementsByTagName("button")[0];
let contador = document.getElementById("contador");

// Declaramos e inicializamos la variable numero de click
let numeroClick = 0;

// Creamos una función que incrementa los clicks y los enseñe
function actualizaClick() {
    numeroClick++;
    let nuevoTexto=`Clics: ${numeroClick}`;
    contador.textContent=nuevoTexto;
}

// Añadimos el EventListener añ botón
boton.addEventListener("click",(event)=>{
    // Paramos la ejecución por defecto del botón
    event.preventDefault();
    // Lanzamos la función  para incrementar el número y enseñar el nuevo total
    actualizaClick();
})