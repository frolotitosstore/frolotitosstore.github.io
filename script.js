let currentSlide = 0;
const slides = document.querySelectorAll(".image-carousel");
const totalSlides = slides.length;

// Função para trocar o slide
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlidePosition();
}

// Atualiza a posição do slide
function updateSlidePosition() {
    const offset = -currentSlide * 100; // Desloca 100% por slide
    document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

// Alterna automaticamente a cada 3 segundos
setInterval(() => {
    changeSlide(1);
}, 3000);




