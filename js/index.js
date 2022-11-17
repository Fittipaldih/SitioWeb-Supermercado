
const ventanaIniciarSesion = document.querySelector(".iniciarSesion")
const boton = document.querySelector("#login");

const abrirPopUp = () => {
    ventanaIniciarSesion.showModal();
}
const cerrarPopUp = () => {
    ventanaIniciarSesion.close();
};


const registrarse = document.querySelector("#Registrarse");
const ventanaRegistrarse = document.querySelector(".ventanaRegistrarse")


const abrirRegistrarse = () => {
    ventanaRegistrarse.showModal();
}
const cerrarRegistrarse = () => {
    ventanaRegistrarse.close();
}

const formRegistrarse = document.querySelector("#formulario-registrarse");

formRegistrarse.addEventListener("submit", (e)=> {
    e.preventDefault();
    contraseñasIguales();
})

function contraseñasIguales(){

    let contraseña1 = document.getElementById("contraseña1");
    let contraseña2 = document.getElementById("contraseña2");
    let email = document.getElementById("registrarseEmail");
    


    let error = false;
    let mensajeDeError = "";

    if(email.value.length<5){
        error = true;
        mensajeDeError+= "email invalido" 
    }    
    
    if(contraseña1.value!==contraseña2.value){
        error=true;
        
        mensajeDeError += "<p>Las contraseña no son iguales</p>"
    }
    if(error){
        document.querySelector("#ErroresAlRegistrarse").innerHTML=mensajeDeError;
    }else{
        formRegistrarse.submit();
    }
}