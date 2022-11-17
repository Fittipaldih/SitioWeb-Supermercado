document.addEventListener('DOMContentLoaded', () => {

     // Variables
     
        const baseDeDatos = 

        // PRODUCTOS ALMACEN
        [{id: 1 , nombre:'Aceite',  precio: 700, imagen:src="img/aceiteCocinero.png"},
        {id:  2 ,nombre:'Vinagre',  precio:250, imagen:src="img/vinagre.png" }, 
        {id:  3 ,nombre:'Cafe',     precio:1055,imagen:src="img/cafeVirginia.png"}, 
        {id:  4 ,nombre:'Doritos',  precio:458,imagen:src="img/Doritos.png"}, 
        {id:  5 ,nombre:'Lays',     precio:420,imagen:src="img/papasLays.png"}, 
        {id:  6 ,nombre:'Milkauot', precio:790,imagen:src="img/dulceMilkaut.png"}, 
        {id:  7 ,nombre:'Harina',   precio:205,imagen:src="img/harina.png"}, 
        {id:  8 ,nombre:'Kitkat',  precio:189,imagen: src="img/kitkat.png"}, 
        {id:  9 ,nombre:'Hellmans', precio:390,imagen:src="img/mayonesa.png"}, 
        {id: 10 ,nombre:'Natura',  precio:385,imagen:src="img/ketchup.png"}, 
        {id: 11 ,nombre:'Savora',  precio:380,imagen:src="img/savora.png"}, 
        {id: 12 ,nombre:'Mermelada', precio:585,imagen: src="img/mermelada.png"}, 
        {id: 13 ,nombre:'Oreo',    precio:212,imagen:src="img/oreo.png"}, 
        {id: 14 ,nombre:'Bimbo',   precio:455,imagen:src="img/panBimbo.png"}, 
        {id: 15 ,nombre:'Playadito', precio:750,imagen:src="img/yerbaPlayadito.png"},

        // PRODUCTOS BEBIDAS
        {id: 16 ,nombre:'7up',precio:457,imagen: src="img/7up.png"},
        {id: 17 ,nombre:'AquariusM',precio:350,imagen:src="img/AquariosManzana.png"}, 
        {id: 18 ,nombre:'AquariusPe',precio:340,imagen:src="img/AquariosPera.png"}, 
        {id: 19 ,nombre:'AquariusPo',precio:346,imagen:src="img/AquariusPomelo.png"}, 
        {id: 20 ,nombre:'Bombay',precio:5900,imagen:src="img/bombay.png"}, 
        {id: 21 ,nombre:'Cepita M',precio:332,imagen:src="img/cepitaMulti.png"}, 
        {id: 22 ,nombre:'Cepita N',precio:340,imagen:src="img/CepitaNaranja.png"}, 
        {id: 23 ,nombre:'Brahma',precio:310,imagen:src="img/cervezaBrahama.png"}, 
        {id: 24 ,nombre:'CocaCola',precio:480,imagen:src="img/CocaOriginal.png"}, 
        {id: 25 ,nombre:'CocaZero',precio:475,imagen:src="img/CocaSinAzucar.png"}, 
        {id: 26 ,nombre:'Fernet',precio:1510,imagen:src="img/fernetBuhero.png"}, 
        {id: 27 ,nombre:'PoweradeA',precio:207,imagen:src="img/PoweradeCeleste.png"}, 
        {id: 28 ,nombre:'PoweradeR',precio:207,imagen:src="img/PoweradeRojo.png"}, 
        {id: 29 ,nombre:'Pritty',precio:310,imagen:src="img/pritty.png"}, 
        {id: 30 ,nombre:'Trumpeter',precio:1740,imagen:src="img/trumpeter.png"},

        //PRODUCTOS FRUTAS
        {id: 48 ,nombre:'Banana',precio:350,imagen:src="img/banana.png"},
        {id: 49 ,nombre:'Limon',precio:200,imagen:src="img/limon.png"}, 
        {id: 50 ,nombre:'Kiwi',precio:500,imagen:src="img/kiwi.png"}, 
        {id: 51 ,nombre:'Mandarina',precio:250,imagen:src="img/mandarina.png"}, 
        {id: 52 ,nombre:'Manzana',precio:250,imagen:src="img/manzana.png"}, 
        {id: 53 ,nombre:'Palta',precio:500,imagen:src="img/palta.png"},
    
        // PRODUCTOS HIGIENE
        {id: 31 ,nombre:'Alcohol',precio:472,imagen: src="img/alcoholetilico.png"},
        {id: 32 ,nombre:'Algodon',precio:879,imagen:src="img/algodon.png"}, 
        {id: 33 ,nombre:'Ayudin',precio:460,imagen:src="img/ayudin.png"}, 
        {id: 34 ,nombre:'Dermaglos',precio:1050,imagen:src="img/dermaglos.png"}, 
        {id: 35 ,nombre:'Elvive',precio:465,imagen:src="img/Elvive.png"}, 
        {id: 36 ,nombre:'Eucerin',precio:3580,imagen:src="img/Eucerin.png"}, 
        {id: 37 ,nombre:'Finish',precio:1045,imagen:src="img/Finish.png"}, 
        {id: 38 ,nombre:'Higienol',precio:684,imagen:src="img/Higienol.png"}, 
        {id: 39 ,nombre:'Magistral',precio:1059,imagen:src="img/Magistral.png"}, 
        {id: 40 ,nombre:'Cif',precio:480,imagen:src="img/Cif.png"}, 
        {id: 41 ,nombre:'Sensodyne',precio:605,imagen:src="img/Sensodyne.png"},

        //PRODUCTOS LACTEOS
        {id: 54 ,nombre:'Danica',precio:510,imagen:src="img/danica.png"},
        {id: 55 ,nombre:'LecheSer',precio:310,imagen:src="img/lecheSerenisima.png"}, 
        {id: 56 ,nombre:'LecheTres',precio:280,imagen:src="img/lecheTresNiñas.png"}, 
        {id: 57 ,nombre:'Manteca',precio:350,imagen:src="img/manteca.png"}, 
        {id: 58 ,nombre:'Yogur',precio:410,imagen:src="img/yogurisimo.png"}, 
        {id: 59 ,nombre:'Ser',precio:100,imagen:src="img/yogurSer.png"},

        //PRODUCTOS TECNOLOGIA
        {id: 42 ,nombre:'Iphone',precio:2450,imagen: src="img/Iphone.png"},
        {id: 43 ,nombre:'LG',precio:4500,imagen:src="img/LG.png"}, 
        {id: 44 ,nombre:'Mouse',precio:190,imagen:src="img/mouseGenius.png"}, 
        {id: 45 ,nombre:'Notebook',precio:2790,imagen:src="img/notebook.png"}, 
        {id: 46 ,nombre:'Samsung',precio:2290,imagen:src="img/samsungZFlip.png"}, 
        {id: 47 ,nombre:'Xiaomi',precio:9800,imagen:src="img/xiaomi.png"},
    
    
    ];


            let carrito = [];
            const divisa = ' $.-';
            const DOMitems = document.querySelector('#items');
            const DOMcarrito = document.querySelector('#carrito');
            const DOMtotal = document.querySelector('#total');
            const DOMbotonVaciar = document.querySelector('#boton-vaciar');
            const miLocalStorage = window.localStorage;

            /* Funciones
             Dibuja todos los productos a partir de la base de datos.   */
            function renderizarProductos() {
                baseDeDatos.forEach((info) => {
                    DOMitems.classList.add("items");
                    // Estructura
                    const miNodo = document.createElement('div');
                    miNodo.classList.add('contenedor-img-producto-grid');
                    // Entrada al producto
                    const miNodoEntrada = document.createElement('a');
                    miNodoEntrada.setAttribute('href', 'producto.html')
                    // Imagen
                     const miNodoImagen = document.createElement('img');
                     miNodoImagen.classList.add('imagenProducto');
                     miNodoImagen.setAttribute('src', info.imagen);
                    // Body
                    const miNodoCardBody = document.createElement('div');
                    miNodoCardBody.classList.add('contenedor-titulo-input-carrito');
                    // Precio
                    const miNodoPrecio = document.createElement('p');
                    miNodoPrecio.classList.add('precio-producto');
                    miNodoPrecio.textContent = `${info.precio}${divisa}`;
                    // Titulo
                    const miNodoTitle = document.createElement('label');
                    miNodoTitle.classList.add('titulo-producto');
                    miNodoTitle.textContent = info.nombre;
                    // Boton añadir
                    const miNodoBoton = document.createElement('button');
                    miNodoBoton.classList.add('btn');
                    miNodoBoton.textContent = '+';
                    miNodoBoton.setAttribute('marcador', info.id);
                    miNodoBoton.addEventListener('click', anyadirProductoAlCarrito); 
                    // Insertamos todos
                    miNodoEntrada.appendChild(miNodoImagen);
                    miNodo.appendChild(miNodoEntrada);
                    miNodo.appendChild(miNodoPrecio);
                    miNodoCardBody.appendChild(miNodoTitle);
                    miNodoCardBody.appendChild(miNodoBoton);
                    miNodo.appendChild(miNodoCardBody);
                    DOMitems.appendChild(miNodo);
                });
            }

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
                    miBoton.textContent = 'Eliminar';
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
                // Borra LocalStorage
                localStorage.clear();

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

            // Inicio
            cargarCarritoDeLocalStorage();
            renderizarProductos();
            renderizarCarrito();
        });