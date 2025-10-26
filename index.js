document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }, breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });
});


basicElements = document.querySelector('.basic');
basicElement = document.querySelector('.basic-item');
premiumElement = document.querySelector('.premium-item');
premiumElements = document.querySelector('.premium');
basicElement.addEventListener("click", function (e) {
    premiumElement.classList.remove('active');
    basicElement.classList.add('active');
    premiumElements.classList.add('d-none');
    premiumElements.classList.remove('d-flex');
    basicElements.classList.remove('d-none');
    basicElements.classList.add('d-flex');
});
premiumElement.addEventListener("click", function (e) {
    premiumElement.classList.add('active');
    basicElement.classList.remove('active');

    premiumElements.classList.remove('d-none');
    premiumElements.classList.add('d-flex');
    basicElements.classList.remove('d-flex');
    basicElements.classList.add('d-none');
});

