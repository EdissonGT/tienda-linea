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
        "HP VICTUS",
        "IMG/productos/laptop/hp-victus.png",
        7200
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
        nombre: "HP VICTUS",
        imagen: "IMG/productos/laptop/hp-victus.png",
        precio: 7200
    },
    {
        //producto 2
        nombre: "DELL G15RE",
        imagen: "IMG/productos/laptop/dell-g15re.avif",
        precio: 10000
    },
    {
        //producto 3
        nombre: "MSI KATANA 15",
        imagen: "IMG/productos/laptop/msi-katana.png",
        precio: 11000
    },
    {
        //producto 4
        nombre: "ASUS ROG ZEPHYRUS",
        imagen: "IMG/productos/laptop/asus-rog.png",
        precio: 11500
    },
    {
        //producto 5
        nombre: "ACER PREDATOR",
        imagen: "IMG/productos/laptop/acer-predator.png",
        precio: 11500
    },
    {
        //producto 6
        nombre: "DELL ALIENWARE M16",
        imagen: "IMG/productos/laptop/dell.png",
        precio: 27000
    },
    {
        //producto 7
        nombre: "LENOVO IDEAPAD 3",
        imagen: "IMG/productos/laptop/lenovo-ideadpad3.png",
        precio: 5000
    },
    {
        //producto 8
        nombre: "LENOVO V15 G3",
        imagen: "IMG/productos/laptop/lenovo-v15.webp",
        precio: 4700
    },
    {
        //producto 9
        nombre: "MACBOOK",
        imagen: "IMG/productos/laptop/macbook-pro.png",
        precio: 15000
    },
    {
        //producto 9
        nombre: "DELL INSPIRON 15-3520",
        imagen: "IMG/productos/laptop/Dell-15.png",
        precio: 7100
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
