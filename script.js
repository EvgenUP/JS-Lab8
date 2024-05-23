document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');
    const slides = document.getElementById('slides');
    const indicators = document.getElementById('indicators');
    let currentIndex = 0;

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    const updateCarousel = (index) => {
        slides.style.transform = `translateX(-${index * 100}%)`;
        document.querySelector('.indicator.active').classList.remove('active');
        indicators.children[index].classList.add('active');
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.children.length;
        updateCarousel(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
        updateCarousel(currentIndex);
    };

    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);

    for (let i = 0; i < slides.children.length; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel(currentIndex);
        });
        indicators.appendChild(indicator);
    }

    setInterval(nextSlide, 3000);
});
