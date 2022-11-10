if(document.getElementById("#btn-login")){

var button = document.getElementById("#btn-login");
var body = document.getElementsByTagName("body");
var cerrar = document.getElementById("#atras");
var ventana = document.getElementsByClassName(".container-flex")




button.onclick = () => {
    ventana.style.display = "flex";
}

cerrar.onclick = () => {
    ventana.style.display = "none";

}
}

