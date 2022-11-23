
let hola = JSON.parse(localStorage.getItem("MiUsuario"))

console.log(hola)

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
        mensajeDeError+= "Email invalido" 
    }    
    
    if(contraseña1.value!==contraseña2.value){
        error=true;
        
        mensajeDeError += "<p>Las contraseñas no son iguales</p>"
    }
    if(error){
        document.querySelector("#ErroresAlRegistrarse").innerHTML=mensajeDeError;
    }else{
        guardarUsuario();
        formRegistrarse.submit();
    }
}
const email = document.querySelector("#registrarseEmail");
const nombre = document.querySelector("#nombre")
const apellido = document.getElementById("apellido");
const contraseña1 = document.getElementById("contraseña1");

function guardarUsuario(){
const usuario =[
    {
    "email": email.value,
    "nombre": nombre.value,
    "apellido": apellido.value,
    "contraseña1": contraseña1.value,    
    }
]
let MiUsuario = JSON.stringify(usuario);
localStorage.setItem("MiUsuario",MiUsuario)

}



const formIniciarSesion = document.querySelector(".formulario-iniciar-sesion");
let nombreUsuarioIngresado = document.getElementById("nombre-usuario");
let contraseniaIngresada = document.getElementById("contraseña");


    formIniciarSesion.addEventListener("submit", (e) => {
        e.preventDefault();
        validarUsuario();
    })

function validarUsuario(){
    let errores = false;
    let mensajeDeErrores = " ";
   usuarioValidar = JSON.parse(localStorage.getItem("MiUsuario"))

   usuarioValidar.forEach(usuario => {
        usuario.nombre
        usuario.contraseña1

        if (usuario.nombre==nombreUsuarioIngresado.value && usuario.contraseña1==contraseniaIngresada.value){
            formIniciarSesion.submit()
            cerrarPopUp()
       }
       if (usuario.nombre!=nombreUsuarioIngresado.value){
        errores= true
        mensajeDeErrores+="El nombre de usuario no existe "
       } 
       if (usuario.contrasenia1!=contraseniaIngresada.value){
        errores= true
        mensajeDeErrores+="<p>La contraseña es incorrecta </p>"
       } 
       
       if (errores){
        document.querySelector("#ErroresAlIniciarSesion").innerHTML=mensajeDeErrores;
       }
   })
  
}

