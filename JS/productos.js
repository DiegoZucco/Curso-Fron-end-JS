async function cargarProductos() {
    try {
        const contenedorProductos = document.getElementById("contenedor-productos");
        
        const response = await fetch("/JS/productos.json");
        if (!response.ok) {
            throw new Error("Error al cargar los productos: " + response.statusText);
        }
        const productos = await response.json();
        contenedorProductos.innerHTML = ""; // Limpiar el contenedor antes de agregar productos
        productos.forEach(producto => {
            const productoDiv = document.createElement("div");
            productoDiv.className = "producto";
            productoDiv.id = "producto"; // Asignar el ID del producto al div
            productoDiv.innerHTML = `
                <h3>${producto.nombre_articulo}</h3>
                <p>Precio: ${producto.precio}</p>
                <img src="${producto.foto}" alt="${producto.nombre_articulo}" class="imagen-producto">
                <p>${producto.descripcion}</p>
                <button class="boton-agregar" id="boton-agregar">Agregar al carrito</button>
                `;
            contenedorProductos.appendChild(productoDiv);
        });
    } catch (error) {
        console.error("Error al cargar los productos:", error);
        const contenedorProductos = document.getElementById("contenedor-productos");
        contenedorProductos.innerHTML = "<p>Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.</p>";
    }

}
document.addEventListener("DOMContentLoaded", cargarProductos());
