 // Cargar el contenido de main.html
 fetch('../../template/main.html')
 .then(response => {
     if (!response.ok) {
         throw new Error('Error al cargar main.html');
     }
     return response.text();
 })
 .then(data => {
     // Crear un div temporal para manipular el HTML cargado
     const tempDiv = document.createElement('div');
     tempDiv.innerHTML = data;

     // Extraer el contenido del main
     const mainContent = tempDiv.querySelector('main');

     // Insertar el contenido del main en el contenedor de destino
     if (mainContent) {
         document.getElementById('main-container').appendChild(mainContent);
     } else {
         console.error('No se encontró un elemento <main> en main.html');
     }
 })
 .catch(error => console.error('Error al cargar el main:', error));