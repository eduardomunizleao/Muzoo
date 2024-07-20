const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
let isUserInteracting = false;
let startX = 0;
let currentTranslate = 0;

slidesContainer.addEventListener('mousedown', (e) => {
    isUserInteracting = true;
    startX = e.clientX;
    currentTranslate = parseFloat(
        getComputedStyle(slidesContainer).transform.match(/-?\d+/)[0]
    );
});

slidesContainer.addEventListener('mousemove', (e) => {
    if (isUserInteracting) {
        const deltaX = e.clientX - startX;
        slidesContainer.style.transform = `translateX(${currentTranslate + deltaX}px)`;
    }
});

slidesContainer.addEventListener('mouseup', () => {
    if (isUserInteracting) {
        isUserInteracting = false;
        const slideWidth = slides[0].clientWidth;
        const newTranslate = parseFloat(
            getComputedStyle(slidesContainer).transform.match(/-?\d+/)[0]
        );
        const newSlide = Math.round(newTranslate / slideWidth);
        slidesContainer.style.transform = `translateX(${newSlide * slideWidth}px)`;
    }
});
