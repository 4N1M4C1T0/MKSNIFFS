document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar el contenido del header y footer
    function loadContent(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                
                // Si se carga el footer, actualizar el año
                if (elementId === 'footer') {
                    updateFooterYear();
                }

                // Añadir animaciones de visibilidad a las secciones
                const topSection = document.querySelector('.top-section');
                const middleSection = document.querySelector('.middle-section');
                if (topSection && middleSection) {
                    topSection.classList.add('visible');
                    middleSection.classList.add('visible');
                }
            })
            .catch(error => console.error('Error al cargar el archivo:', error));
    }

    // Función para actualizar el año en el footer
    function updateFooterYear() {
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            const currentYear = new Date().getFullYear();
            yearSpan.textContent = currentYear;
        }
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
    loadContent('../../template/head.html', 'header');
    loadContent('../../template/foot.html', 'footer');
});