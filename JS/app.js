


document.getElementById('form-contacto').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre1 = document.getElementById('nombre').value;
    const email1 = document.getElementById('email').value;
    const contenido = "<strong>Nombre:</strong> " + nombre1 + "<br><strong>Email:</strong> " + email1; document.getElementById('contenido-pop-up').innerHTML = contenido;
    document.getElementById("contenido-pop-up").innerHTML = contenido;
    document.getElementById('pop-up').style.display = 'block';
    this.reset();

    document.getElementById('cerrar-pop-up').addEventListener('click', function () {
        document.getElementById('pop-up').style.display = 'none';
    });
});

