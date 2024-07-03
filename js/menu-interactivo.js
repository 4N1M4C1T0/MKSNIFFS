document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuDesplegable = document.querySelector('.menu-desplegable');
    const submenuItems = document.querySelectorAll('.menu-desplegable ul li a');
    const caja12 = document.querySelector('.caja12');

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