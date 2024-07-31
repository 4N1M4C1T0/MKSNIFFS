$(document).ready(function() {
    // Inicializar select2
    $('#mySelect').select2({
        dropdownAutoWidth: true, /* Permite el ajuste automático del ancho del desplegable */
        width: '250px' /* Ancho del select */
    });

    const optionSelect = document.getElementById('mySelect');
    const contentImage = document.getElementById('contentImage');
    const contentH1 = document.getElementById('contentH1');
    const contentH2 = document.getElementById('contentH2');
    const contenedorInferior = document.getElementById('contenedorInferior');
    const contentSpan1 = document.getElementById('contentSpan1');
    const contentSpan2 = document.getElementById('contentSpan2');

    const contentData = {
        option1: {
            imgSrc: '../../img/vistas/politica_nacional.jpg',
            h1Text: 'Título 1',
            h2Text: 'Subtítulo 1',
            h3Text1: ['asdasasfjasfh ajshajshjashjasf jahsdjhasdjafsjasd ajfhjsfhasjhdjsadf asjfhasjhdajsd ajfhasjdsjdhjh asdasdasdasdas asda sd asd asd asd asdasdasdasdasdas asdasdasd asdasdasdas dasd asdasdas asdasdasdasd asdasdas dasdas asd asf adfdsad assad', 'Encabezado 1.2', 'Encabezado 1.3', 'Encabezado 1.4', 'Encabezado 1.5', 'Encabezado 1.6'],
            h3Text2: ['asdasasfjasfh ajshajshjashjasf jahsdjhasdjafsjasd ajfhjsfhasjhdjsadf asjfhasjhdajsd ajfhasjdsjdhjh asdasdasdasdas asda sd asd asd asd asdasdasdasdasdas asdasdasd asdasdasdas dasd asdasdas asdasdasdasd asdasdas dasdas asd asf adfdsad assad', 'Encabezado 1.2.2', 'Encabezado 1.3.3', 'Encabezado 1.4.4', 'Encabezado 1.5.5', 'Encabezado 1.6.6'],
            pText: ['asdasasfjasfh ajshajshjashjasf jahsdjhasdjafsjasd ajfhjsfhasjhdjsadf asjfhasjhdajsd ajfhasjdsjdhjh asdasdasdasdas asda sd asd asd asd asdasdasdasdasdas asdasdasd asdasdasdas dasd asdasdas asdasdasdasd asdasdas dasdas asd asf adfdsad assad', 'Parrafo 1.2', 'Parrafo 1.3', 'Parrafo 1.4', 'Parrafo 1.5', 'Parrafo 1.6'],
            spanText1: 'Fuente: DGGCFFS - SERFOR ©',
            spanText2: 'Datos 2024'
        },
        option2: {
            imgSrc: '../../img/vistas/politica_nacional.jpg',
            h1Text: 'Título 2',
            h2Text: 'Subtítulo 2',
            h3Text1: ['Encabezado 2.1', 'Encabezado 2.2', 'Encabezado 2.3', 'Encabezado 2.4', 'Encabezado 2.5', 'Encabezado 2.6'],
            h3Text2: ['Encabezado 2.1.1', 'Encabezado 2.2.2', 'Encabezado 2.3.3', 'Encabezado 2.4.4', 'Encabezado 2.5.5', 'Encabezado 2.6.6'],
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

        // Limpiar el contenedor antes de actualizarlo
        contenedorInferior.innerHTML = '';

        // Crear elementos en base a los datos seleccionados
        for (let i = 0; i < data.h3Text1.length; i++) {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <div class="subitem1"><h3>${data.h3Text1[i]}</h3></div>
                <div class="subitem2"><p>${data.pText[i]}</p></div>
                <div class="subitem3"><h3>${data.h3Text2[i]}</h3></div>
            `;
            contenedorInferior.appendChild(item);
        }

        contentSpan1.textContent = data.spanText1;
        contentSpan2.textContent = data.spanText2;
    }

    // Manejar el cambio de selección
    $('#mySelect').on('change', function() {
        const selectedOption = $(this).val();
        updateContent(selectedOption);
    });

    // Inicializar contenido con la opción 1 seleccionada por defecto
    updateContent('option1');
});