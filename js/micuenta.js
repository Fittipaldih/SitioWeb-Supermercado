
const ventanaNuevaDireccion = document.querySelector(".ventanaNuevaDireccion")

const abrirDireccion = () => {
    ventanaNuevaDireccion.showModal();
}

const cerrarDireccion = () => {
    ventanaNuevaDireccion.close();
};

const ventanaNuevaTarjeta = document.querySelector(".ventanaNuevaTarjeta");

const abrirTarjeta = () => {
    ventanaNuevaTarjeta.showModal();
}

const cerrarTarjeta = () => {
    ventanaNuevaTarjeta.close();
}





// Validar formulario nueva  dirección

const form=document.getElementById("formulario-direccion");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validarDireccion();
});

function validarDireccion(){
    let mensajesError='';
    let error=false;
    
    const alias = document.getElementsByName("Alias");
    const direccion=document.getElementsByName("Direccion");
    const provincia = document.getElementById("selectProvincia")
    const localidad= document.getElementById("selectLocalidad");
    const telefono = document.getElementById("Telefono");
    const piso = document.getElementsByName("Piso");
    const departamento = document.getElementsByName("Dto");
    
    if(alias.value==""){
        error=true;
        mensajesError+="<p>El campo alias es obligatorio</p>";
    }
    if(provincia.value==0){
        error=true;
        mensajesError+="<p>El campo provincia es obligatorio</p>"
    }
    if(localidad.value==0){
        error=true;
        mensajesError+="<p>El campo localidad es obligatorio</p>"
    }
    if(direccion.value==""){
        error=true;
        mensajesError+="<p>Debe ingresar una direccion</p>"
    }
    /*if(telefono.value==""){
        error=true;
        mensajesError+="<p></p>"
    }
    Es necesario validar el ingreso de algun telefono??? lo mismo con piso y departamento
    */
    if(error){
        document.querySelector("#erroresAgregarDireccion").innerHTML=mensajesError;
    }else{
        form.submit();
    }
}

// formulario metodos de pago

const formTarjeta = document.querySelector("#form-tarjeta");

formTarjeta.addEventListener("submit", (e) => {
    e.preventDefault();
    validarTarjeta();
});

function validarTarjeta() {

    let numTarjeta = document.getElementById("numero-tarjeta");

    let error = false;

    let mensajesError = '';
    let sumaValores = 0;
    let arrayTarjeta = numTarjeta.value.toString().split("");
    console.log(arrayTarjeta);

    for (i = 0; i < arrayTarjeta.length-1; i++) {
        let numero = parseInt(arrayTarjeta[i])
        sumaValores += numero
    }
    console.log(sumaValores);
console.log(arrayTarjeta.length);
    if (arrayTarjeta.length != 10) {
        error = true;
        mensajesError += " <p>Cantidad de caracteres incorrectos</p>"
    } else {

        if ((!(arrayTarjeta[9]) % 2 == 0 && sumaValores % 2 == 1) || (!(arrayTarjeta[9]) % 2 == 1 && sumaValores % 2 == 0)) {
                error = true
                mensajesError += "<p>El numero de tarjeta no es valido</p>"
            } 
    }
    if (error) {
        document.querySelector("#erroresNuevaTarjeta").innerHTML = mensajesError;
        } else {
            formTarjeta.submit();
    }
}





