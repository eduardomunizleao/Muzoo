let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

function moveSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  document.querySelector('.carousel').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Função para fazer o carrossel mover automaticamente a cada 3 segundos
function autoSlide() {
  setInterval(() => {
    moveSlide(1);
  }, 3000); // Muda a cada 3 segundos
}

// Inicia a rotação automática
autoSlide();
