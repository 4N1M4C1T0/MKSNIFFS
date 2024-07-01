document.querySelectorAll('.dropdown-content a').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        var option = event.target.getAttribute('data-option');
        var text = '';

        switch(option) {
            case '1':
                text = 'Has seleccionado la Ecozona Costa.';
                break;
            case '2':
                text = 'Has seleccionado la Ecozona Sierra.';
                break;
            case '3':
                text = 'Has seleccionado la Ecozona Selva Alta Accesible.';
                break;
            case '4':
                text = 'Has seleccionado la Ecozona Selva Alta de Difícil Acceso.';
                break;
            case '5':
                text = 'Has seleccionado la Ecozona Selva Baja.';
                break;
            case '6':
                text = 'Has seleccionado la Ecozona Hidromórfica.';
                break;
            default:
                text = 'Ninguna opción seleccionada.';
        }

        document.getElementById('selected-text').innerText = text;
    });
});
