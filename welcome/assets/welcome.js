const wel = document.querySelector("#bienvenida");

nombre = window.localStorage.getItem("Nombre");

wel.innerHTML = nombre;

const form = document.querySelector("#form"),
    task = document.querySelector("#tarea"),
    añadir = document.querySelector("#añadir"),
    agregar= document.querySelector("#agregar");

form.addEventListener("submit", (e)=>{
    if (task.value.length > 0) {
        agregar.innerHTML = task.value;
    }else{
        task.style.background = "red";
    }
})

