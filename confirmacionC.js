document.addEventListener('DOMContentLoaded', () => {
    const productosConfirmados = document.getElementById('productos-confirmados');
    const totalConfirmado = document.getElementById('total-confirmado');

    // Obtener productos del Local Storage
    const productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];

    // Función para calcular y mostrar el total
    function actualizarTotal() {
        const total = productosEnCarrito.reduce((acc, producto) => acc + producto.precio, 0);
        totalConfirmado.textContent = `Total: Q. ${total.toFixed(2)}`;
    }

    // Función para agregar un producto al carrito
    function agregarProductoAlCarrito(producto) {
        productosEnCarrito.push(producto);
        localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
    }

    // Función para quitar un producto del carrito
    function quitarProductoDelCarrito(producto) {
        const indice = productosEnCarrito.findIndex(item => item.nombre === producto.nombre);
        if (indice !== -1) {
            productosEnCarrito.splice(indice, 1);
            localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
        }
    }

    // Mostrar productos confirmados en la página
    productosEnCarrito.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto-confirmado');

        const imagenProducto = document.createElement('img');
        imagenProducto.src = producto.imagen;
        imagenProducto.alt = producto.nombre;
        imagenProducto.className = 'imagen-producto-confirmado';

        const nombreProducto = document.createElement('p');
        nombreProducto.textContent = producto.nombre;
        nombreProducto.classList.add('nombre-producto');

        // Crear el elemento <span> para el texto "Precio:"
        const textoPrecio = document.createElement('span');
        textoPrecio.textContent = 'Precio: ';
        textoPrecio.classList.add('precio-texto');


        const precioProducto = document.createElement('span');
        precioProducto.textContent = `Q. ${producto.precio.toFixed(2)}`;
        precioProducto.classList.add('precio-producto');

        const botonAgregar = document.createElement('button');
        botonAgregar.textContent = '+';
        botonAgregar.className = 'boton-agregar';
        botonAgregar.addEventListener('click', () => {
            agregarProductoAlCarrito(producto);
            actualizarTotal();
        });

        const botonQuitar = document.createElement('button');
        botonQuitar.textContent = '-';
        botonQuitar.className = 'boton-quitar';
        botonQuitar.addEventListener('click', () => {
            quitarProductoDelCarrito(producto);
            actualizarTotal();
        });

        productoDiv.appendChild(imagenProducto);
        productoDiv.appendChild(nombreProducto);
        productoDiv.appendChild(textoPrecio);
        productoDiv.appendChild(precioProducto);
        productoDiv.appendChild(botonQuitar);
        productoDiv.appendChild(botonAgregar);

        productosConfirmados.appendChild(productoDiv);
    });

    actualizarTotal();
});
