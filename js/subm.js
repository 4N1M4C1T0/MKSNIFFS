document.addEventListener('DOMContentLoaded', function() {
    fetch('../../index.html')
        .then(response => response.text())
        .then(html => {
            // Crear un documento temporal para parsear el HTML
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, 'text/html');
            
            // Seleccionar las etiquetas h3 específicas con una clase "titulo-tematica"
            let h3s = doc.querySelectorAll('h3.titulo-tematica');
            let enlaces = doc.querySelectorAll('a.enlace-titulo');
            
            // Referencia al contenedor del menú
            let tematicasMenu = document.getElementById('tematicas-menu');
            tematicasMenu.innerHTML = ''; // Limpiar el contenido

            // Llenar el menú con los textos de los h3 específicos y sus enlaces
            h3s.forEach((h3, index) => {
                if (enlaces[index]) {
                    let link = document.createElement('a');
                    link.textContent = h3.textContent;
                    link.href = `../.${enlaces[index].getAttribute('href')}`; // Añadir "../." al inicio del enlace
                    tematicasMenu.appendChild(link);
                }
            });
        })
        .catch(error => {
            console.error('Error al cargar la otra página:', error);
        });
});