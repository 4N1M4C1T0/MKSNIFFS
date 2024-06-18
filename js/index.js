document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar el contenido del header y footer
    function loadContent(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                // Ajustar la altura de la middle-section basado en la altura de la top-section
                adjustMiddleSectionHeight();
            })
            .catch(error => console.error('Error al cargar el archivo:', error));
    }

    // Variables para manejar el desplazamiento
    let lastScrollTop = 0;

    // Ocultar top-section y middle-section al hacer scroll hacia abajo
    // Mostrar top-section y middle-section al hacer scroll hacia arriba
    window.addEventListener('scroll', function() {
        const topSection = document.querySelector('.top-section');
        const middleSection = document.querySelector('.middle-section');
        const bottomSection = document.querySelector('.bottom-section');
        const scrollPosition = window.scrollY;
        
        if (topSection && middleSection && bottomSection) {
            let currentScrollTop = window.scrollY;
            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                topSection.classList.remove('visible');
                topSection.classList.add('hidden');
                middleSection.classList.remove('visible');
                middleSection.classList.add('hidden');
                bottomSection.classList.add('fixed');
            } else {
                // Scrolling up
                topSection.classList.remove('hidden');
                topSection.classList.add('visible');
                middleSection.classList.remove('hidden');
                middleSection.classList.add('visible');
                bottomSection.classList.remove('fixed');
            }
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
        }
    });

    // Cargar el contenido del header y footer
    loadContent('../template/header.html', 'header');
    loadContent('../template/footer.html', 'footer');
});
