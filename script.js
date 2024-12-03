let indiceSlide = 0;
showSlide(indiceSlide);

function changeSlide(n) {
    showSlide(indiceSlide += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("image-carousel");
    if (n >= slides.length) {
        indiceSlide = 0;
    } else if (n < 0) {
        indiceSlide = slides.length - 1;
    } else {
        indiceSlide = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[indiceSlide].classList.add("active");
}



