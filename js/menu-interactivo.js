document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuDesplegable = document.querySelector('.menu-desplegable');
    const submenuItems = document.querySelectorAll('.menu-desplegable ul li a');
    const caja12 = document.querySelector('.right-content');

    menuToggle.addEventListener('click', function() {
        menuDesplegable.classList.toggle('collapsed');
        caja12.classList.toggle('collapsed');
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

function showDiv(divId) {
    // Ocultar el div por defecto
    document.getElementById('default').style.display = 'none';

    // Ocultar todos los divs de contenido
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');

    // Mostrar el div correspondiente
    const selectedDiv = document.getElementById(divId);
    if (selectedDiv) {
        selectedDiv.style.display = 'block';
    }
}

const fechaActual = new Date();
      const añoActual = fechaActual.getFullYear();
      fechaActual.setMonth(fechaActual.getMonth() - 1);
      const mesAnterior = fechaActual.toLocaleString('es-ES', { month: 'long' });
      document.getElementById('referencia').textContent = `Datos de ${mesAnterior} del ${añoActual}  © SERFOR - Dirección de Seguimiento`;