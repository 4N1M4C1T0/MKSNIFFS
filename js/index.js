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
                topSection.style.display = 'none';
                middleSection.style.display = 'none';
                bottomSection.classList.add('fixed');
            } else {
                // Scrolling up
                topSection.style.display = 'flex'; // Asegúrate de que las secciones sean flexibles
                middleSection.style.display = 'flex'; // Asegúrate de que las secciones sean flexibles
                bottomSection.classList.remove('fixed');
            }
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
        }
    });

    // Cargar el contenido del header y footer
    loadContent('../template/header.html', 'header');
    loadContent('../template/footer.html', 'footer');
});
