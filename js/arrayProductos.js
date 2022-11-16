let productos=[
    {
        nombre: "aceite", 
        cantidad: 0,
        precio: 00
    }, 

    {
        nombre: "Oreo",
        cantidad: 2,
        precio: 200
    }
];

let productosNuevos = {
    nombre: "Fideos",
    cantidad: 4,
    precio : 150
} /*ahi agrego este */
productos.push(productosNuevos)

/* LOCAL STORAGE LOS ALMACENA COMO STRING, uso esto para convertir este array de datos de json en string  */
localStorage.setItem("listaProductos", JSON.stringify(productos)) 

/*Obtener bojeto */
let productosObtenido=JSON.parse(localStorage.getItem("listaProductos"));