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

    // Ajustar la altura de la middle-section basado en la altura de la top-section
    function adjustMiddleSectionHeight() {
        const topSection = document.querySelector('.top-section');
        const middleSection = document.querySelector('.middle-section');
        if (topSection && middleSection) {
            middleSection.style.height = (topSection.offsetHeight / 64) + 'px';
        }
    }

    // Ocultar top-section y middle-section al hacer scroll
    window.addEventListener('scroll', function() {
        const topSection = document.querySelector('.top-section');
        const middleSection = document.querySelector('.middle-section');
        const bottomSection = document.querySelector('.bottom-section');
        const scrollPosition = window.scrollY;

        if (topSection && middleSection && bottomSection) {
            if (scrollPosition > 0) {
                topSection.style.display = 'none';
                middleSection.style.display = 'none';
                bottomSection.classList.add('fixed');
            } else {
                topSection.style.display = 'flex'; // Asegúrate de que las secciones sean flexibles
                middleSection.style.display = 'flex'; // Asegúrate de que las secciones sean flexibles
                bottomSection.classList.remove('fixed');
            }
        }
    });

    // Cargar el contenido del header y footer
    loadContent('../template/header.html', 'header');
    loadContent('../template/footer.html', 'footer');
});
