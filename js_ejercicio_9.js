// Seleccionamos el campo de texto, la lista y los botones
const textoTarea = document.getElementById("tarea");
const listaTareas = document.getElementById("listaTareas");
const listaElementos = listaTareas.getElementsByTagName("li"); // Este método devuelve un HTMLCollection que es live y no es necesario actualizarlo
const botonAgregar = document.getElementById("agregar");
const botonLimpiar = document.getElementById("limpiar");

// Creamos una función que guarda la lista en LocalStorage
function guardaTareas(tareas){
    // Transformamos el HTMLCollection en array para que sea más manejable
    let arrayTareas = [...tareas];
    // LocoalStorage solo admite objeto literales así que habra que crear objetos literales a partir de los elementos HTML
    let tareasStorage = arrayTareas.map(elem=>elem.innerHTML);
    // Guardamos el array en LocalStorage
    localStorage.setItem("listaTarea",JSON.stringify(tareasStorage));
}

// Creamos una función que carga la lista desde LocalStorage
function cargaLista(lista){
    // SI hay una lista cargada en LocalStorage añade la tareas a la página
    if (localStorage.getItem("listaTarea")) {
        // Decodifica el array
        let arrayTareas = JSON.parse(localStorage.getItem("listaTarea"));
        // Añadimos los elementos a la lista
        arrayTareas.map((elem)=>{
            let nuevoLi = document.createElement("li");
            nuevoLi.innerHTML = elem;
            // Añadimos el EventListener al checkBox
            nuevoLi.getElementsByTagName("input")[0].addEventListener("click",(event)=>{
                event.target.setAttribute("checked",true);
                guardaTareas(listaElementos);
            });
            // Colgamos el elemento a la lista
            lista.append(nuevoLi);
        });
    }
}

// Creamos una función para crear un nuevo elemento cun su estructura, texto y checkBox
function nuevoElemento(lista) {
    // Creamos el li
    let nuevoLi = document.createElement("li");
    // Añadimos el texto al nuevo elemento
    nuevoLi.textContent=textoTarea.value;
    // Creamos el nuevo checkBox
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkbox");
    // Damos un mínimo de estilo
    checkBox.style.display = "inline-block";
    checkBox.style.marginLeft = "30px";
    // Añadimos el EventListner al checkBox
    checkBox.addEventListener("click",(event)=>{
        event.target.setAttribute("checked",true);
        guardaTareas(listaElementos);
    });
    // Añadimor el checkBox al nuevo elemento
    nuevoLi.append(checkBox);    
    // Colgamos el nuevo elemento a la lista
    lista.append(nuevoLi);
}

// Creamos una función que comprueba si algún elemento tiene el checkBox marcado y en tal caso lo elimina
function EliminaTareasCompletadas(arrayTareas){
    arrayTareas.map((elem)=>{
        // Si el elemento tiene el checkBox marcado lo elimina
        if(elem.getElementsByTagName("input")[0].checked){
            elem.remove();
        }
    })
}


// Aplicación Principal

// Comprobamos si hay alguna tarea guardada en LocalStorage y en tal caso las cargamos
cargaLista(listaTareas);

// Añadimos el EventListener a los botones
botonAgregar.addEventListener("click",(even)=>{
    nuevoElemento(listaTareas);
    guardaTareas(listaElementos);
});

botonLimpiar.addEventListener("click",()=>{
    EliminaTareasCompletadas([...listaElementos]);
    guardaTareas(listaElementos);
})

