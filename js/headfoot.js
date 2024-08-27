// Función para inicializar Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'es,en,fr,de,it,pt',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

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

                // Inicializar Google Translate después de cargar el header
                if (elementId === 'header') {
                    initializeTranslateWidget();
                }
            })
            .catch(error => console.error('Error al cargar el archivo:', error));
    }

    // Función para inicializar el widget de traducción
    function initializeTranslateWidget() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);

        // Configurar eventos después de cargar el contenido del header
        script.onload = function() {
            var translateLink = document.getElementById('translateLink');
            var googleTranslateElement = document.getElementById('google_translate_element');

            translateLink.addEventListener('mouseover', function() {
                googleTranslateElement.style.display = 'block';
            });

            translateLink.addEventListener('mouseout', function() {
                googleTranslateElement.style.display = 'none';
            });

            googleTranslateElement.addEventListener('mouseover', function() {
                googleTranslateElement.style.display = 'block';
            });

            googleTranslateElement.addEventListener('mouseout', function() {
                googleTranslateElement.style.display = 'none';
            });
        };
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
    loadContent('template/header.html', 'header');
    loadContent('template/footer.html', 'footer');
});