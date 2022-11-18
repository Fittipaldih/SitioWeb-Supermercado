    const listaProductosAlmacen = 
        [{id:'1',nombre:'aceite',precio:700,imagen:'#'},
         {id:'2',nombre:'vinagre',precio:250,imagen:'#' }, 
         {id:'3',nombre:'cafe',precio:1055,imagen:'#' }, 
         {id:'4',nombre:'doritos',precio:458,imagen:'#' }, 
         {id:'5',nombre:'lays',precio:420,imagen:'#' }, 
         {id:'6',nombre:'milkauot',precio:790,imagen:'#' }, 
         {id:'7',nombre:'harina',precio:205,imagen:'#' }, 
         {id:'8',nombre:'kitkat',precio:189,imagen:'#' }, 
         {id:'9',nombre:'hellmans',precio:390,imagen:'#' }, 
         {id:'10',nombre:'savora',precio:380,imagen:'#' }, 
         {id:'11',nombre:'natura',precio:385,imagen:'#' }, 
         {id:'12',nombre:'oreo',precio:212,imagen:'#' }, 
         {id:'13',nombre:'mermelada',precio:585,imagen:'#' }, 
         {id:'14',nombre:'playadito',precio:750,imagen:'#' },      
         {id:'15',nombre:'bimbo',precio:455,imagen:'#' }, 
          ]
   
    const listaProductosBebidas = 
          [{id:'1',nombre:'7up',precio:457,imagen:'#'},
           {id:'2',nombre:'AquariusManzana',precio:350,imagen:'#' }, 
           {id:'3',nombre:'Aquarius Pera',precio:340,imagen:'#' }, 
           {id:'4',nombre:'Aquarius Pomelo',precio:346,imagen:'#' }, 
           {id:'5',nombre:'Bombay',precio:5900,imagen:'#' }, 
           {id:'6',nombre:'Cepita Multifruta',precio:332,imagen:'#' }, 
           {id:'7',nombre:'Cepita Naranja',precio:340,imagen:'#' }, 
           {id:'8',nombre:'Brahma',precio:310,imagen:'#' }, 
           {id:'9',nombre:'CocaCola',precio:480,imagen:'#' }, 
           {id:'10',nombre:'CocaZero',precio:475,imagen:'#' }, 
           {id:'11',nombre:'FernetBuhero',precio:1510,imagen:'#' }, 
           {id:'12',nombre:'Powerade Azul',precio:207,imagen:'#' }, 
           {id:'13',nombre:'Powerade Rojo',precio:207,imagen:'#' }, 
           {id:'14',nombre:'Pritty',precio:310,imagen:'#' }, 
           {id:'15',nombre:'Trumpeter',precio:1740,imagen:'#' }      
            ]

    const listaProductosHigiene = 
            [{id:'1',nombre:'Alcohol',precio:472,imagen:'#'},
             {id:'2',nombre:'Algodon',precio:879,imagen:'#' }, 
             {id:'3',nombre:'Ayudin',precio:460,imagen:'#' }, 
             {id:'4',nombre:'Dermaglos',precio:1050,imagen:'#' }, 
             {id:'5',nombre:'Elvive',precio:465,imagen:'#' }, 
             {id:'6',nombre:'Eucerin',precio:3580,imagen:'#' }, 
             {id:'7',nombre:'Finish',precio:1045,imagen:'#' }, 
             {id:'8',nombre:'Higienol',precio:684,imagen:'#' }, 
             {id:'9',nombre:'Magistral',precio:1059,imagen:'#' }, 
             {id:'10',nombre:'Cif',precio:480,imagen:'#' }, 
             {id:'11',nombre:'Sensodyne',precio:605,imagen:'#' }
        ]

    const listaProductosTecnologia = 
        [{id:'1',nombre:'Iphone',precio:24500,imagen:'#'},
         {id:'2',nombre:'LG',precio:4500,imagen:'#' }, 
         {id:'3',nombre:'Mouse',precio:190,imagen:'#' }, 
         {id:'4',nombre:'Notebook',precio:27900,imagen:'#' }, 
         {id:'5',nombre:'Samsung',precio:22900,imagen:'#' }, 
         {id:'6',nombre:'Xiaomi',precio:9800,imagen:'#' }] 

    const listaProductosFruta = 
         [{id:'1',nombre:'Banana',precio:350,imagen:'#'},
          {id:'2',nombre:'Limon',precio:200,imagen:'#' }, 
          {id:'3',nombre:'Kiwi',precio:500,imagen:'#' }, 
          {id:'4',nombre:'Mandarina',precio:250,imagen:'#' }, 
          {id:'5',nombre:'Manzana',precio:250,imagen:'#' }, 
          {id:'6',nombre:'Palta',precio:500,imagen:'#' }] 
    
    const listaProductosLacteos = 
          [{id:'1',nombre:'Danica',precio:510,imagen:'#'},
           {id:'2',nombre:'LecheSerenisima',precio:310,imagen:'#' }, 
           {id:'3',nombre:'LecheTresNiñas',precio:280,imagen:'#' }, 
           {id:'4',nombre:'Manteca',precio:350,imagen:'#' }, 
           {id:'5',nombre:'Yogur',precio:410,imagen:'#' }, 
           {id:'6',nombre:'Ser',precio:100,imagen:'#' }]


    agregarAlCarrito.addEventListener("click",()=>{
        var productoAAgregarAlCarrito = document.getElementsByClas
        var btnAgregar = document.getElementByClas("addToCart")
        carrito.push()
    });
            
    var carrito = new Carrito();
    
    document.addEventListener('DOMContentLoaded',function(){ 
        // detectamos cuando se carga la pagina y creamos el carrito vacio
        if(!localStorage.getItem("carrito")){
            localStorage.setItem('carrito','[]');
        }

    });   
    

    /* LOCAL STORAGE LOS ALMACENA COMO STRING, uso esto para convertir este array de datos de json en string  */
    localStorage.setItem("carrito", JSON.stringify(productos)) 
            
    /*Obtener bojeto */
    let productosObtenido=JSON.parse(localStorage.getItem("listaProductos"));

// esto sirve para el boton agregar o eliminar del carrito
            const agregar=document.querySelector("#agregar");
const eliminar=document.querySelector("#eliminar");
const lista=document.querySelector("#lista");

agregar.addEventListener("click",()=>{
    const elemento=lista.lastChild;
    const clon=elemento.cloneNode(true);
    lista.appendChild(clon); 
});
eliminar.addEventListener("click",()=>{
    lista.removeChild(lista.lastChild);
});