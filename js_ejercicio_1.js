// Seleccionamos los elementos button y body
const boton = document.getElementsByTagName("button")[0];
let pagina = document.getElementsByTagName("body")[0];

// Creamos una función que genera un color al azar y devuelve un string con el valor del respectivo color en CSS 
function generarColorAzar() {
    let rojo = Math.floor(Math.random() * 256);
    let verde = Math.floor(Math.random() * 256);
    let azul = Math.floor(Math.random() * 256);
    return `rgb(${rojo}, ${verde}, ${azul})`;
}

// Añadimos el EventListener añ botón
boton.addEventListener("click",(event)=>{
    // Paramos la ejecución por defecto del botón
    event.preventDefault();
    // Si el body ya tiene el atributo style.backgroundColor lo actualizamos con el nuevo color
    if(pagina.style.backgroundColor){
        pagina.style.backgroundColor=generarColorAzar();
        // Si no lo tiene lo configuramos con el nuevo color
    } else {
        pagina.setAttribute("style",`background-color: ${generarColorAzar()}`);
    }
})