const baseDeDatos = 

// PRODUCTOS ALMACEN
[{id: 1 ,categoria: 'almacen', nombre:'Aceite',  precio: 700, imagen:src="img/aceiteCocinero.png"},
{id:  2 ,categoria: 'almacen',nombre:'Vinagre',  precio:250, imagen:src="img/vinagre.png" }, 
{id:  3 ,categoria: 'almacen',nombre:'Cafe',     precio:1055,imagen:src="img/cafeVirginia.png"}, 
{id:  4 ,categoria: 'almacen',nombre:'Doritos',  precio:458,imagen:src="img/Doritos.png"}, 
{id:  5 ,categoria: 'almacen',nombre:'Lays',     precio:420,imagen:src="img/papasLays.png"}, 
{id:  6 ,categoria: 'almacen',nombre:'Milkauot', precio:790,imagen:src="img/dulceMilkaut.png"}, 
{id:  7 ,categoria: 'almacen',nombre:'Harina',   precio:205,imagen:src="img/harina.png"}, 
{id:  8 ,categoria: 'almacen',nombre:'Kitkat',  precio:189,imagen: src="img/kitkat.png"}, 
{id:  9 ,categoria: 'almacen',nombre:'Hellmans', precio:390,imagen:src="img/mayonesa.png"}, 
{id: 10 ,categoria: 'almacen',nombre:'Natura',  precio:385,imagen:src="img/ketchup.png"}, 
{id: 11 ,categoria: 'almacen',nombre:'Savora',  precio:380,imagen:src="img/savora.png"}, 
{id: 12 ,categoria: 'almacen',nombre:'Mermelada', precio:585,imagen: src="img/mermelada.png"}, 
{id: 13 ,categoria: 'almacen',nombre:'Oreo',    precio:212,imagen:src="img/oreo.png"}, 
{id: 14 ,categoria: 'almacen',nombre:'Bimbo',   precio:455,imagen:src="img/panBimbo.png"}, 
{id: 15 ,categoria: 'almacen',nombre:'Playadito', precio:750,imagen:src="img/yerbaPlayadito.png"},

// PRODUCTOS BEBIDAS
{id: 16 ,categoria: 'bebidas', nombre:'7up',precio:457,imagen: src="img/7up.png"},
{id: 17 ,categoria: 'bebidas', nombre:'AquariusM',precio:350,imagen:src="img/AquariosManzana.png"}, 
{id: 18 ,categoria: 'bebidas', nombre:'AquariusPe',precio:340,imagen:src="img/AquariosPera.png"}, 
{id: 19 ,categoria: 'bebidas', nombre:'AquariusPo',precio:346,imagen:src="img/AquariusPomelo.png"}, 
{id: 20 ,categoria: 'bebidas', nombre:'Bombay',precio:5900,imagen:src="img/bombay.png"}, 
{id: 21 ,categoria: 'bebidas', nombre:'Cepita M',precio:332,imagen:src="img/cepitaMulti.png"}, 
{id: 22 ,categoria: 'bebidas', nombre:'Cepita N',precio:340,imagen:src="img/CepitaNaranja.png"}, 
{id: 23 ,categoria: 'bebidas', nombre:'Brahma',precio:310,imagen:src="img/cervezaBrahama.png"}, 
{id: 24 ,categoria: 'bebidas', nombre:'CocaCola',precio:480,imagen:src="img/CocaOriginal.png"}, 
{id: 25 ,categoria: 'bebidas', nombre:'CocaZero',precio:475,imagen:src="img/CocaSinAzucar.png"}, 
{id: 26 ,categoria: 'bebidas', nombre:'Fernet',precio:1510,imagen:src="img/fernetBuhero.png"}, 
{id: 27 ,categoria: 'bebidas', nombre:'PoweradeA',precio:207,imagen:src="img/PoweradeCeleste.png"}, 
{id: 28 ,categoria: 'bebidas', nombre:'PoweradeR',precio:207,imagen:src="img/PoweradeRojo.png"}, 
{id: 29 ,categoria: 'bebidas', nombre:'Pritty',precio:310,imagen:src="img/pritty.png"}, 
{id: 30 ,categoria: 'bebidas', nombre:'Trumpeter',precio:1740,imagen:src="img/trumpeter.png"},

//PRODUCTOS FRUTAS
{id: 48 ,categoria: 'frutas',nombre:'Banana',precio:350,imagen:src="img/banana.png"},
{id: 49 ,categoria: 'frutas',nombre:'Limon',precio:200,imagen:src="img/limon.png"}, 
{id: 50 ,categoria: 'frutas',nombre:'Kiwi',precio:500,imagen:src="img/kiwi.png"}, 
{id: 51 ,categoria: 'frutas',nombre:'Mandarina',precio:250,imagen:src="img/mandarina.png"}, 
{id: 52 ,categoria: 'frutas',nombre:'Manzana',precio:250,imagen:src="img/manzana.png"}, 
{id: 53 ,categoria: 'frutas',nombre:'Palta',precio:500,imagen:src="img/palta.png"},

// PRODUCTOS HIGIENE
{id: 31 ,categoria: 'higieneLimpieza',nombre:'Alcohol',precio:472,imagen: src="img/alcoholetilico.png"},
{id: 32 ,categoria: 'higieneLimpieza',nombre:'Algodon',precio:879,imagen:src="img/algodon.png"}, 
{id: 33 ,categoria: 'higieneLimpieza',nombre:'Ayudin',precio:460,imagen:src="img/ayudin.png"}, 
{id: 34 ,categoria: 'higieneLimpieza',nombre:'Dermaglos',precio:1050,imagen:src="img/dermaglos.png"}, 
{id: 35 ,categoria: 'higieneLimpieza',nombre:'Elvive',precio:465,imagen:src="img/Elvive.png"}, 
{id: 36 ,categoria: 'higieneLimpieza',nombre:'Eucerin',precio:3580,imagen:src="img/Eucerin.png"}, 
{id: 37 ,categoria: 'higieneLimpieza',nombre:'Finish',precio:1045,imagen:src="img/Finish.png"}, 
{id: 38 ,categoria: 'higieneLimpieza',nombre:'Higienol',precio:684,imagen:src="img/Higienol.png"}, 
{id: 39 ,categoria: 'higieneLimpieza',nombre:'Magistral',precio:1059,imagen:src="img/Magistral.png"}, 
{id: 40 ,categoria: 'higieneLimpieza',nombre:'Cif',precio:480,imagen:src="img/Cif.png"}, 
{id: 41 ,categoria: 'higieneLimpieza',nombre:'Sensodyne',precio:605,imagen:src="img/Sensodyne.png"},

//PRODUCTOS LACTEOS
{id: 54 ,categoria: 'lacteos', nombre:'Danica',precio:510,imagen:src="img/danica.png"},
{id: 55 ,categoria: 'lacteos', nombre:'LecheSer',precio:310,imagen:src="img/lecheSerenisima.png"}, 
{id: 56 ,categoria: 'lacteos', nombre:'LecheTres',precio:280,imagen:src="img/lecheTresNiñas.png"}, 
{id: 57 ,categoria: 'lacteos', nombre:'Manteca',precio:350,imagen:src="img/manteca.png"}, 
{id: 58 ,categoria: 'lacteos', nombre:'Yogur',precio:410,imagen:src="img/yogurisimo.png"}, 
{id: 59 ,categoria: 'lacteos', nombre:'Ser',precio:100,imagen:src="img/yogurSer.png"},

//PRODUCTOS TECNOLOGIA
{id: 42 , categoria: 'tecnologia', nombre:'Iphone',precio:2450,imagen: src="img/Iphone.png"},
{id: 43 ,categoria: 'tecnologia', nombre:'LG',precio:4500,imagen:src="img/LG.png"}, 
{id: 44 ,categoria: 'tecnologia', nombre:'Mouse',precio:190,imagen:src="img/mouseGenius.png"}, 
{id: 45 ,categoria: 'tecnologia', nombre:'Notebook',precio:2790,imagen:src="img/notebook.png"}, 
{id: 46 ,categoria: 'tecnologia',nombre:'Samsung',precio:2290,imagen:src="img/samsungZFlip.png"}, 
{id: 47 ,categoria: 'tecnologia', nombre:'Xiaomi',precio:9800,imagen:src="img/xiaomi.png"},
];

let carrito = [];
const divisa = ' $.-';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('.botonVaciar');
const miLocalStorage = window.localStorage;

const productosAlmacen = baseDeDatos.filter(function(almacen){
    return almacen.categoria=="almacen";
})

const productosBebidas = baseDeDatos.filter(function(bebidas){
    return bebidas.categoria=="bebidas";
})

const productosFrutas = baseDeDatos.filter(function(frutas){
    return frutas.categoria=="frutas";
})

const productosHigieneLimpieza = baseDeDatos.filter(function(higieneLimpieza){
    return higieneLimpieza.categoria=="higieneLimpieza";
})

const productosLacteos = baseDeDatos.filter(function(lacteos){
    return lacteos.categoria=="lacteos";
})

const productosTecnologia = baseDeDatos.filter(function(tecnologia){
    return tecnologia.categoria=="tecnologia";
})

            /* Evento para añadir un producto al carrito de la compra   */
            function anyadirProductoAlCarrito(evento) {
                // Anyadimos el Nodo a nuestro carrito
                carrito.push(evento.target.getAttribute('marcador'))
                // Actualizamos el carrito 
                renderizarCarrito();
                // Actualizamos el LocalStorage
                guardarCarritoEnLocalStorage();
            }

            /*Dibuja todos los productos guardados en el carrito   */
            function renderizarCarrito() {
                // Vaciamos todo el html
                DOMcarrito.textContent = '';
                // Quitamos los duplicados
                const carritoSinDuplicados = [...new Set(carrito)];
                // Generamos los Nodos a partir de carrito
                carritoSinDuplicados.forEach((item) => {
                    // Obtenemos el item que necesitamos de la variable base de datos
                    const miItem = baseDeDatos.filter((itemBaseDatos) => {
                        // ¿Coincide las id? Solo puede existir un caso
                        return itemBaseDatos.id === parseInt(item);
                    });
                    // Cuenta el número de veces que se repite el producto
                    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                        // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                        return itemId === item ? total += 1 : total;
                    }, 0);
                    // Creamos el nodo del item del carrito
                    const miNodo = document.createElement('li');
                    miNodo.classList.add('list-group-item');
                    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
                    // Boton de borrar
                    const miBoton = document.createElement('button');
                    miBoton.classList.add('btn-borrar');
                    miBoton.textContent = 'X';
                    miBoton.dataset.item = item;
                    miBoton.addEventListener('click', borrarItemCarrito);
                    // Mezclamos nodos
                    miNodo.appendChild(miBoton);
                    DOMcarrito.appendChild(miNodo);
                });
                // Renderizamos el precio total en el HTML
                DOMtotal.textContent = calcularTotal();
            }

            /* Evento para borrar un elemento del carrito  */
            function borrarItemCarrito(evento) {
                // Obtenemos el producto ID que hay en el boton pulsado
                const id = evento.target.dataset.item;
                // Borramos todos los productos
                carrito = carrito.filter((carritoId) => {
                    return carritoId !== id;
                });
                // volvemos a renderizar
                renderizarCarrito();
                // Actualizamos el LocalStorage
                guardarCarritoEnLocalStorage();

            }

            /* Calcula el precio total teniendo en cuenta los productos repetidos  */
            function calcularTotal() {
                // Recorremos el array del carrito 
                return carrito.reduce((total, item) => {
                    // De cada elemento obtenemos su precio
                    const miItem = baseDeDatos.filter((itemBaseDatos) => {
                        return itemBaseDatos.id === parseInt(item);
                    });
                    // Los sumamos al total
                    return total + miItem[0].precio;
                }, 0).toFixed(2);
            }

            /*Varia el carrito y vuelve a dibujarlo  */
            function vaciarCarrito() {
                // Limpiamos los productos guardados
                carrito = [];
                // Renderizamos los cambios
                renderizarCarrito();
                // Borra carrito del LocalStorage
                localStorage.removeItem("carrito");

            }

            function guardarCarritoEnLocalStorage () {
                miLocalStorage.setItem('carrito', JSON.stringify(carrito));
            }

            function cargarCarritoDeLocalStorage () {
                // ¿Existe un carrito previo guardado en LocalStorage?
                if (miLocalStorage.getItem('carrito') !== null) {
                // Carga la información
                carrito = JSON.parse(miLocalStorage.getItem('carrito'));
                }
            }

            // Eventos
            DOMbotonVaciar.addEventListener('click', vaciarCarrito);



            // buscador 
            var buscador = document.addEventListener("keyup", buscar);
            var areaBuscador = document.getElementById("areaBuscador");
            var buscada = areaBuscador.value ;

            function buscar(){
            
            if ( baseDeDatos.filter(buscado=> buscado.categoria.toUpperCase ==  buscada.toUpperCase)){
            
            }
           }
