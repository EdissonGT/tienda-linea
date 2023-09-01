class ProductoInfo {
    constructor(nombre, imagen, precio) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}

const productoElement = document.getElementById('producto');
const carritoElement = document.getElementById('carrito');
const cantidadCarritoElement = document.getElementById('cantidad-carrito');

let productoInfo = null;

productoElement.addEventListener('dragstart', (event) => {
    productoInfo = new ProductoInfo(
        "TECLADO MECANICO GAMING PRO",
        "IMG/productos/periferico/logitech-teclado.jpeg",
        900
    );
});

const productoElement2 = document.querySelector('.producto-laptos:nth-child(2) img.cursor');
const productoElement3 = document.querySelector('.producto-laptos:nth-child(3) img.cursor');
const productoElement4 = document.querySelector('.producto-laptos:nth-child(4) img.cursor');
const productoElement5 = document.querySelector('.producto-laptos:nth-child(5) img.cursor');
const productoElement6 = document.querySelector('.producto-laptos:nth-child(6) img.cursor');
const productoElement7 = document.querySelector('.producto-laptos:nth-child(7) img.cursor');
const productoElement8 = document.querySelector('.producto-laptos:nth-child(8) img.cursor');
const productoElement9 = document.querySelector('.producto-laptos:nth-child(9) img.cursor');
const productoElement10 = document.querySelector('.producto-laptos:nth-child(10) img.cursor');


const productos = [
    {
        //producto 1
        nombre: "TECLADO MECANICO GAMING PRO",
        imagen: "IMG/productos/periferico/logitech-teclado.jpeg",
        precio: 900
    },
    {
        //producto 2
        nombre: "TECLADO GAMING HUNTSMAN V2",
        imagen: "IMG/productos/periferico/razer-teclado.jpg",
        precio: 1900
    },
    {
        //producto 3
        nombre: "AUDIFONOS GAMER KRAKEN KITTY V2",
        imagen: "IMG/productos/periferico/auricular-razer.jpg",
        precio: 1600
    },
    {
        //producto 4
        nombre: "AUDIFONOS GAMING A10",
        imagen: "IMG/productos/periferico/astros-a10..jpg",
        precio: 500
    },
    {
        //producto 5
        nombre: "MOUSE GAMING DEATHADDER",
        imagen: "IMG/productos/periferico/mouse-razer.jpg",
        precio: 700
    },
    {
        //producto 6
        nombre: "MOUSE WIRELESS GAMER COBRA",
        imagen: "IMG/productos/periferico/mouse-razer-negro.jpg",
        precio: 1070
    },
    {
        //producto 7
        nombre: "MICROFONO SEIREN EMOTE",
        imagen: "IMG/productos/periferico/micro-razer.jpg",
        precio: 1450
    },
    {
        //producto 8
        nombre: "MICROFONO CAPSULE BLACK AP-MUMIC-B1",
        imagen: "IMG/productos/periferico/micro-nzxt.jpg",
        precio: 1100
    },
    {
        //producto 9
        nombre: "CAMARA WEB BRIO 500 1080FPS",
        imagen: "IMG/productos/periferico/camara-logitech.jpg",
        precio: 1070
    },
    {
        //producto 10
        nombre: "CAMARA WEB KIYO X",
        imagen: "IMG/productos/periferico/camara-razer.jpg",
        precio: 650
    },
    // ... otros productos
];

productoElement2.addEventListener('dragstart', () => {
    productoInfo = productos[1];
});

productoElement3.addEventListener('dragstart', () => {
    productoInfo = productos[2];
});

productoElement4.addEventListener('dragstart', () => {
    productoInfo = productos[3];
});

productoElement5.addEventListener('dragstart', () => {
    productoInfo = productos[4];
});

productoElement6.addEventListener('dragstart', () => {
    productoInfo = productos[5];
});

productoElement7.addEventListener('dragstart', () => {
    productoInfo = productos[6];
});

productoElement8.addEventListener('dragstart', () => {
    productoInfo = productos[7];
});

productoElement9.addEventListener('dragstart', () => {
    productoInfo = productos[8];
});

productoElement10.addEventListener('dragstart', () => {
    productoInfo = productos[9];
});


carritoElement.addEventListener('dragover', (event) => {
    event.preventDefault();
});

carritoElement.addEventListener('drop', (event) => {
    event.preventDefault();

    if (productoInfo) {
        let productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
        productosEnCarrito.push(productoInfo);
        localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));

        const imagenProducto = document.createElement('img');
        imagenProducto.src = productoInfo.imagen;
        imagenProducto.alt = productoInfo.nombre;
        imagenProducto.className = 'icono-carro-nav';
        carritoElement.appendChild(imagenProducto);

        const cantidadActual = productosEnCarrito.length;
        cantidadCarritoElement.textContent = cantidadActual;

        const contenidoMensaje = document.createElement('div');
        const imagenMensaje = document.createElement('img');
        imagenMensaje.src = productoInfo.imagen;
        imagenMensaje.alt = productoInfo.nombre;
        imagenMensaje.style.maxWidth = '100px';
        contenidoMensaje.appendChild(imagenMensaje);
        contenidoMensaje.innerHTML += `<p>Nombre: ${productoInfo.nombre}</p><p>Cantidad: 1</p><p>Costo Total: Q. ${productoInfo.precio}</p>`;
        
        Swal.fire({
            title: 'Producto agregado al carrito',
            html: contenidoMensaje.innerHTML,
            icon: 'success'
        });

        productoInfo = null;
    }
});