document.addEventListener('DOMContentLoaded', () => {

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


          // Inicio
          cargarCarritoDeLocalStorage();
          renderizarProductos();
          renderizarCarrito();
          
      });