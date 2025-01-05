document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const track = document.querySelector(".slider-track");
    const slides = Array.from(document.querySelectorAll(".slide"));
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;
    const totalSlides = slides.length;

    let isAnimating = false;

    function updateSliderPosition() {
        const translateX = -currentIndex * 100;
        track.style.transform = `translateX(${translateX}%)`;

        isAnimating = true;
        setTimeout(() => {
            isAnimating = false;
        }, 400); // Deve corresponder à duração da transição em ms
    }

    function goToNextSlide() {
        if (isAnimating) return; // Bloqueia se ainda estiver animando
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSliderPosition();
    }

    function goToPrevSlide() {
        if (isAnimating) return; // Bloqueia se ainda estiver animando
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSliderPosition();
    }


    // Eventos para botões
    function addButtonListeners() {
        if (nextBtn && prevBtn) {
            nextBtn.addEventListener("click", goToNextSlide);
            prevBtn.addEventListener("click", goToPrevSlide);

            // Para dispositivos touchscreen, garantir que os botões respondam
            nextBtn.addEventListener("touchend", goToNextSlide, { passive: true });
            prevBtn.addEventListener("touchend", goToPrevSlide, { passive: true });
        } else {
            console.error("Botões de navegação não encontrados!");
        }
    }

    let startX = 0;
    let endX = 0;

    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        endX = startX; // Garante que o início e fim sejam iguais no início
    });

    slider.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", () => {
        const deltaX = startX - endX;

        // Garante que só será considerado um swipe válido com deslocamento mínimo de 50px
        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                goToNextSlide(); // Swipe para a esquerda, avança o slide
            } else {
                goToPrevSlide(); // Swipe para a direita, volta o slide
            }
        }
    });


    // Ajuste automático ao redimensionar a tela
    window.addEventListener("resize", () => {
        updateSliderPosition();
    });

    // Inicializa a posição correta do slider e eventos
    updateSliderPosition();
    addButtonListeners();
});
