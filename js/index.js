// Función para ajustar la altura de la middle-section
function adjustMiddleSectionHeight() {
    var topSection = document.querySelector('.top-section');
    var middleSection = document.querySelector('.middle-section');
    if (topSection && middleSection) {
        var topSectionHeight = topSection.offsetHeight;
        middleSection.style.height = (topSectionHeight / 32) + 'px';
    }
}

// Cargar el contenido del archivo header.html y footer.html
document.addEventListener('DOMContentLoaded', function() {
    fetch('../template/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#header').innerHTML = data;

            // Ajustar la altura de la sección middle-section después de cargar el header
            adjustMiddleSectionHeight();

            // Volver a ajustar la altura si las imágenes terminan de cargar más tarde
            var images = document.querySelectorAll('img');
            images.forEach(function(img) {
                img.addEventListener('load', adjustMiddleSectionHeight);
            });
        });

    fetch('../template/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#footer').innerHTML = data;
        });
});
