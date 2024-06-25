document.getElementById('category-select').addEventListener('change', function() {
    const category = this.value;
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = card.getAttribute('data-category') === category ? 'block' : 'none';
        }
    });
});
