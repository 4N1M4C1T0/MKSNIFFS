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

const maxLength = 150;

document.querySelectorAll('.textContainer').forEach(container => {
    const fullText = container.getAttribute('data-full-text');
    const shortText = fullText.substring(0, maxLength) + "...";
    
    const shortTextEl = container.querySelector('.shortText');
    const fullTextEl = container.querySelector('.fullText');
        
    shortTextEl.innerHTML = shortText + `<span class="viewMore" onclick="toggleText(this)"> Ver más</span>`;
    fullTextEl.innerHTML = fullText + `<span class="viewLess" onclick="toggleText(this)"> Ver menos</span>`;
        
    container.querySelector('.viewLess').style.display = 'none';
});

function toggleText(button) {
    const container = button.closest('.textContainer');
    const shortTextEl = container.querySelector('.shortText');
    const fullTextEl = container.querySelector('.fullText');
    const viewMoreEl = container.querySelector('.viewMore');
    const viewLessEl = container.querySelector('.viewLess');

    if (button.classList.contains('viewMore')) {
        shortTextEl.style.display = 'none';
        fullTextEl.style.display = 'inline';
        viewMoreEl.style.display = 'none';
        viewLessEl.style.display = 'inline';
    } else {
        shortTextEl.style.display = 'inline';
        fullTextEl.style.display = 'none';
        viewMoreEl.style.display = 'inline';
        viewLessEl.style.display = 'none';
    }
}