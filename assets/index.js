const form = document.querySelector("#form"),
 name = document.querySelector("#nombre"),
 apellido = document.querySelector("#apellido"),
 email = document.querySelector("#correo"),
 pass = document.querySelector("#pssw"),
 tel = document.querySelector("#tel"),
 enviar = document.querySelector("#enviar");

form.addEventListener ("submit", function (e) {

    if (name.value === "" || name.value === null || name.value.length < 3) {
        e.preventDefault();
        name.style.background ="darkred";
        name.placeholder = "El nombre es muy corto";         
    }
    if (apellido.value === "" || apellido.value === null || apellido.value.length < 3) {
        e.preventDefault();
        apellido.style.background ="darkred";
        apellido.placeholder = "El apellido es muy corto";    
    }
    if (email.value === "" || email.value === null ) {
        e.preventDefault();
        email.style.background ="darkred";
        email.placeholder = "Ingrese un e-mail válido";     
    }

    if (pass.value === "" || pass.value === null || pass.value.length < 8) {
        e.preventDefault();
        pass.style.background ="darkred";
        pass.placeholder = "Contraseña muy corta";
    }
    if (tel.value === "" || tel.value === null || tel.value.length < 7) {
        e.preventDefault();
        tel.style.background ="darkred";
        tel.placeholder = "El teléfono no es válido"; 
    }
    window.localStorage.setItem("Nombre", name.value);
})




