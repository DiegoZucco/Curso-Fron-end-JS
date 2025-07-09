Este proyecto es parte del curso de FrontEnd.JS
El mismo sera sobre un libro de recetas personal.
Se dividira en secciones de acuerdo al tipo de comida(al menos 3)
Encontraremos imagenes, videos, referencias a cocineros y sobre todo el paso a paso que realizo para cada una de las recetas que seran incluidas.

Queda por mejorar la presentacion de la barra de navegacion para celular y resoluciones chicas. Hacerlo mas estetico.
Arrglar el menu desplegable, o sacarlo, ya que la funcionalidad es la misma que la del indice, para el item secciones.
Alinear el formulario de contacto con la imagen del libro de recetas. Esta ultima quedo mas pequeña.

agregar boton de volver al indice o al inicio en cada seccion.
paleta de colores

#b6bec0
#b47846
#dabc98
#8d685f
#38181d



#54595a
#958f80
#e2ddc7
#cd9d8d
#dd9166

submenu desplegable

.submenu {
    display: block; /* Cambia a block para poder animar los hijos */
    position: absolute;
    top: 100%;
    left: 10%;
    background-color: #cd9d8d80;
    list-style: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    pointer-events: none; /* Evita que se pueda hacer hover si no está visible */
    opacity: 0;
    transition: opacity 0.2s;
    padding: 0%;
    
}

.menu li:hover .submenu {
    pointer-events: auto;
    opacity: 1;
    transition: opacity 0.2s;
}

.submenu li {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s, transform 0.3s;
}

/* Efecto progresivo usando nth-child */
.menu li:hover .submenu li:nth-child(1) {
    transition-delay: 0.1s;
    opacity: 1;
    transform: translateY(0);
}
.menu li:hover .submenu li:nth-child(2) {
    transition-delay: 0.2s;
    opacity: 1;
    transform: translateY(0);
}
.menu li:hover .submenu li:nth-child(3) {
    transition-delay: 0.3s;
    opacity: 1;
    transform: translateY(0);
}