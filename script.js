// Burger menu
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Slider 
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function turnSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    document.querySelector('.slider_inner').style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

function previous() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    document.querySelector('.slider_inner').style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

function next() {
    currentIndex = (currentIndex + 1) % totalSlides;
    document.querySelector('.slider_inner').style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.slider_indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

setInterval(turnSlide, 3000);
