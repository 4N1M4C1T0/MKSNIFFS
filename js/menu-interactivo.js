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