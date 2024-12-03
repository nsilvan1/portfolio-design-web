let currentIndex = 0;

function moveCarousel(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Atualizar índice
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Mover o carrossel
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
