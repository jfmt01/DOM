const wel = document.querySelector("#bienvenida");

nombre = window.localStorage.getItem("Nombre");

wel.innerHTML = nombre;


const task = document.querySelector("#tarea"),
    btnAñadir = document.querySelector("#btn_añadir"),
    lista= document.querySelector("#agregar");

    let agregarTarea = function () {
        let tarea = task.value,
        nuevaT = document.createElement("li"),
        ancla = document.createElement("a");
        content = document.createTextNode(tarea);

        if (tarea === "" || tarea === null) {
            task.placeholder = "La tarea es muy corta";
            task.style.background = "darkred";
            return false;
        };

        ancla.appendChild(content);
        ancla.setAttribute("href", "#");
        nuevaT.appendChild(ancla);
        lista.appendChild(nuevaT);

        task.value ="";

        for (let i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener("click", function () {
                this.parentNode.removeChild(this);
            });
            
        };
    };

    let validar = function () {
        this.style.background = "";
        this.placeholder = "Agrega tu tarea";
    };
 

btnAñadir.addEventListener("click", agregarTarea);

task.addEventListener ("click",validar);
