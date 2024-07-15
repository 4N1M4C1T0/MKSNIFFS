document.getElementById('seleccionar-categoria').addEventListener('change', function() {
    const categoria = this.value;
    const cards = document.querySelectorAll('.contenedor-card');

    cards.forEach(card => {
        if (categoria === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = card.getAttribute('data-category') === categoria ? 'block' : 'none';
        }
    });
});
