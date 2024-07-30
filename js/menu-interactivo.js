document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuDesplegable = document.querySelector('.menu-desplegable');
    const submenuItems = document.querySelectorAll('.menu-desplegable ul li a');
    const rightcontent = document.querySelector('.right-content');
    const iframecontainer = document.querySelector('.iframe-container');

    menuToggle.addEventListener('click', function() {
        menuDesplegable.classList.toggle('collapsed');
        rightcontent.classList.toggle('collapsed');
        iframecontainer.classList.toggle('collapsed');
    });

    submenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                e.preventDefault();
                submenu.classList.toggle('active');
                this.querySelector('.arrow-icon').classList.toggle('collapsed');
            }
        });
    });
});

function showContent(event) {
    event.preventDefault();

    // Ocultar todos los divs
    let contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // Mostrar el div correspondiente al enlace seleccionado
    let target = event.target.getAttribute('data-target');
    if (target !== 'default') {
        document.getElementById('default').classList.remove('active');
    }
    document.getElementById(target).classList.add('active');
}

const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();
fechaActual.setMonth(fechaActual.getMonth() - 1);
const mesAnterior = fechaActual.toLocaleString('es-ES', { month: 'long' });
document.getElementById('referencia').textContent = `Datos de ${mesAnterior} del ${añoActual}  © SERFOR - Dirección de Seguimiento`;

// Obtener todos los enlaces
var enlaces = document.querySelectorAll('a[data-target]');

// Obtener todos los encabezados
var encabezados = document.querySelectorAll('h4[data-target]');

// Añadir evento de clic a cada enlace
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        // Obtener el contenido del enlace clicado
        var contenidoEnlace = enlace.innerText;

        // Asignar el contenido a cada encabezado
        encabezados.forEach(function(encabezado) {
            encabezado.innerText =`Gobierno Regional `+contenidoEnlace+` (a Junio del ${añoActual})`;
        });
    });
});

