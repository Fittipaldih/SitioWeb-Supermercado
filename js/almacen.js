     document.addEventListener('DOMContentLoaded', () => {

     // Variables
     
        const baseDeDatos = 
        [{id: 1 , nombre:'aceite',  precio: 700, imagen:src="img/aceiteCocinero.png"},
        {id:  2 ,nombre:'vinagre',  precio:250, imagen:src="img/vinagre.png" }, 
        {id:  3 ,nombre:'cafe',     precio:1055,imagen:src="img/cafeVirginia.png"}, 
        {id:  4 ,nombre:'doritos',  precio:458,imagen:src="img/Doritos.png"}, 
        {id:  5 ,nombre:'lays',     precio:420,imagen:src="img/papasLays.png"}, 
        {id:  6 ,nombre:'milkauot', precio:790,imagen:src="img/dulceMilkaut.png"}, 
        {id:  7 ,nombre:'harina',   precio:205,imagen:src="img/harina.png"}, 
        {id:  8 ,nombre:'kitkat',  precio:189,imagen: src="img/kitkat.png"}, 
        {id:  9 ,nombre:'hellmans', precio:390,imagen:src="img/mayonesa.png"}, 
        {id: 10 ,nombre:'natura',  precio:385,imagen:src="img/ketchup.png"}, 
        {id: 11 ,nombre:'savora',  precio:380,imagen:src="img/savora.png"}, 
        {id: 12 ,nombre:'mermelada', precio:585,imagen: src="img/mermelada.png"}, 
        {id: 13 ,nombre:'oreo',    precio:212,imagen:src="img/oreo.png"}, 
        {id: 14 ,nombre:'bimbo',   precio:455,imagen:src="img/panBimbo.png"}, 
        {id: 15 ,nombre:'playadito', precio:750,imagen:src="img/yerbaPlayadito.png"}];


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
                    miBoton.classList.add('btn');
                    miBoton.textContent = 'X';
                    miBoton.style.marginLeft = '1rem';
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
