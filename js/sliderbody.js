let slideIndex = 0;
initializeSlider();

function initializeSlider() {
    const slides = document.getElementsByClassName('slide');
    const dotsContainer = document.querySelector('.dots');
    dotsContainer.innerHTML = ''; // Clear existing dots

    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement('span');
        dot.className = 'dot';
        dot.setAttribute('onclick', `currentSlide(${i})`);
        dotsContainer.appendChild(dot);
    }

    showSlide(slideIndex);
}

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}
