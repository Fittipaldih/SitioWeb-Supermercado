document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [

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
        {id: 41 ,nombre:'Sensodyne',precio:605,imagen:src="img/Sensodyne.png"}];
        

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
                miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
                // Boton de borrar
                const miBoton = document.createElement('button');
                miBoton.classList.add('btn', 'btn-danger', 'mx-5');
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

        