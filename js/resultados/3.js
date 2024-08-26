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
            h1Text: 'FORTALECIMIENTO',
            h2Text: 'INSTITUCIONAL GOREs',
            h3Text1: ['Avance Global Programado Junio 2024', 'Avance Fisico Programado Junio 2024', 'Las actividades presupuestales con mejor desempeño presupuestal hasta junio 2024 fueron; la 5006322 (control transporte) y 5005174 (información) con un', 'Avance Global Ejecutado Junio 2024', 'Avance Fisico Ejecutado Junio 2024', 'La actividad presupuestal con menor desempeño presupuestal fue la 5000276 (gestión del programa)'],
            h3Text2: ['Del presupuesto asignado', 'Del presupuesto asignado', 'De avance en su ejecución presupuestal', 'Del presupuesto asignado', 'Del presupuesto asignado', 'De avance en su ejecución presupuestal'],
            pText: ['44%', '35%', '56% y 52%', '34%', '22%', '16%'],
            spanText1: 'Fuente: DGGCFFS - SERFOR ©',
            spanText2: 'Datos 2024'
        },
        option2: {
            imgSrc: '../../img/vistas/politica_nacional.jpg',
            h1Text: 'INTERVENCIONES EN',
            h2Text: 'MATERIA FORESTAL Y DE FAUNA SILVESTRE',
            h3Text1: ['Número de intervenciones que dirige el SERFOR', 'Número de intervenciones que se ejecutan', 'Intervenciones que se encuentran alineadas a las PNFFS', 'Número de intervenciones que dirige y participa el SERFOR'],
            h3Text2: ['Intervenciones', 'Intervenciones', 'Intervención', 'Intervenciones'],
            pText: ['43', '24', '1', '57'],
            spanText1: 'Fuente: DGGCFFS - SERFOR ©',
            spanText2: 'Datos 2023'
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