document.addEventListener("DOMContentLoaded", function() {
    const optionSelect = document.getElementById('optionSelect');
    const contentImage = document.getElementById('contentImage');
    const contentH1 = document.getElementById('contentH1');
    const contentH2 = document.getElementById('contentH2');
    const contentH3_1 = document.getElementById('contentH3_1');
    const contentH3_2 = document.getElementById('contentH3_2');
    const contentP_1 = document.getElementById('contentP_1');
    const contentSpan1 = document.getElementById('contentSpan1');
    const contentSpan2 = document.getElementById('contentSpan2');
    const contenedorInferior = document.getElementById('contenedorInferior');

    const contentData = {
        option1: {
            imgSrc: '../../img/vistas/politica_nacional.jpg',
            h1Text: 'Título 1',
            h2Text: 'Subtítulo 1',
            h3Text1: ['Encabezado 1.1', 'Encabezado 1.2', 'Encabezado 1.3', 'Encabezado 1.4','Encabezado 1.5', 'Encabezado 1.6'],
            h3Text2: ['Encabezado 1.1.1', 'Encabezado 1.2.2', 'Encabezado 1.3.3', 'Encabezado 1.4.4','Encabezado 1.5.5', 'Encabezado 1.6.6'],
            pText: ['Parrafo 1.1', 'Parrafo 1.2', 'Parrafo 1.3', 'Parrafo 1.4', 'Parrafo 1.5', 'Parrafo 1.6'],
            spanText1: 'Fuente: DGGCFFS - SERFOR ©',
            spanText2: 'Datos 2024'
        },
        option2: {
            imgSrc: '../../img/vistas/politica_nacional.jpg',
            h1Text: 'Título 2',
            h2Text: 'Subtítulo 2',
            h3Text1: ['Encabezado 2.1', 'Encabezado 2.2', 'Encabezado 2.3', 'Encabezado 2.4','Encabezado 2.5', 'Encabezado 2.6'],
            h3Text2: ['Encabezado 2.1.1', 'Encabezado 2.2.2', 'Encabezado 2.3.3', 'Encabezado 2.4.4','Encabezado 2.5.5', 'Encabezado 2.6.6'],
            pText: ['Parrafo 2.1', 'Parrafo 2.2', 'Parrafo 2.3', 'Parrafo 2.4', 'Parrafo 2.5', 'Parrafo 2.6'],
            spanText1: 'Fuente: DGGCFFS - SERFOR ©',
            spanText2: 'Datos 2024'
        }
    };

    function updateContent(selectedOption) {
        const data = contentData[selectedOption];
        contentImage.src = data.imgSrc;
        contentH1.textContent = data.h1Text;
        contentH2.textContent = data.h2Text;
        
        const items = contenedorInferior.getElementsByClassName('item');
        for (let i = 0; i < items.length; i++) {
            const h3_1 = items[i].querySelector('.subitem1 h3');
            const h3_2 = items[i].querySelector('.subitem3 h3');
            const p = items[i].querySelector('.subitem2 p');
            
            h3_1.textContent = data.h3Text1[i];
            h3_2.textContent = data.h3Text2[i];
            p.textContent = data.pText[i];
        }
        
        contentSpan1.textContent = data.spanText1;
        contentSpan2.textContent = data.spanText2;
    }

    optionSelect.addEventListener('change', function() {
        const selectedOption = optionSelect.value;
        updateContent(selectedOption);
    });

    // Clonar el div de clase 'item' cinco veces
    const itemTemplate = document.querySelector('.item');
    for (let i = 1; i < 6; i++) {
        const clone = itemTemplate.cloneNode(true);
        clone.querySelector('.subitem1 h3').id = `contentH3_1_${i+1}`;
        clone.querySelector('.subitem2 p').id = `contentP_${i+1}`;
        clone.querySelector('.subitem3 h3').id = `contentH3_2_${i+1}`;
        contenedorInferior.appendChild(clone);
    }

    // Inicializar contenido con la opción 1 seleccionada por defecto
    updateContent('option1');
});
