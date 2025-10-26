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
    let lang = localStorage.getItem('siteLang') || 'en';
    function applyLang(currentLang) {
        document.querySelectorAll('[data-lang]').forEach(el => {
            if (el.getAttribute('data-lang') === currentLang) {
                el.classList.remove('d-none');

            } else {
                el.classList.add('d-none');
            }
        });
    }
    applyLang(lang);
    window.toggleLang = function () {
        lang = (lang === 'en') ? 'ar' : 'en';
        localStorage.setItem('siteLang', lang);
        applyLang(lang);
        if (lang == 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
            bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.rtl.min.css';
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', 'en');
            bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css';
        }
    };

})();


basicMonthlyElements = document.querySelector('.basic-monthly');
basicYearlyElements = document.querySelector('.basic-yearly');
premiumMonthlyElements = document.querySelector('.premium-monthly');
premiumYearlyElements = document.querySelector('.premium-yearly');
basicYearlyElement = document.querySelector('.basic-item-yearly');
basicMonthlyElement = document.querySelector('.basic-item-monthly');
premiumYearlyElement = document.querySelector('.premium-item-yearly');
premiumMonthlyElement = document.querySelector('.premium-item-monthly');
monthlyElement = document.querySelector('.tabs-monthly');
yearlyElement = document.querySelector('.tabs-yearly');
switchelement = document.querySelector("#flexSwitchCheckDefault");
basicMonthlyElement.addEventListener("click", function () {
    premiumMonthlyElement.classList.remove('active');
    basicMonthlyElement.classList.add('active');
    premiumMonthlyElements.classList.add('d-none');
    premiumMonthlyElements.classList.remove('d-flex');
    basicMonthlyElements.classList.remove('d-none');
    basicMonthlyElements.classList.add('d-flex');
});
basicYearlyElement.addEventListener("click", function () {
    premiumYearlyElement.classList.remove('active');
    basicYearlyElement.classList.add('active');
    premiumYearlyElements.classList.add('d-none');
    premiumYearlyElements.classList.remove('d-flex');
    basicYearlyElements.classList.remove('d-none');
    basicYearlyElements.classList.add('d-flex');
});
premiumMonthlyElement.addEventListener("click", function () {
    premiumMonthlyElement.classList.add('active');
    basicMonthlyElement.classList.remove('active');
    premiumMonthlyElements.classList.remove('d-none');
    premiumMonthlyElements.classList.add('d-flex');
    basicMonthlyElements.classList.remove('d-flex');
    basicMonthlyElements.classList.add('d-none');
});
premiumYearlyElement.addEventListener("click", function () {
    premiumYearlyElement.classList.add('active');
    basicYearlyElement.classList.remove('active');
    premiumYearlyElements.classList.remove('d-none');
    premiumYearlyElements.classList.add('d-flex');
    basicYearlyElements.classList.remove('d-flex');
    basicYearlyElements.classList.add('d-none');
});

switchelement.addEventListener("click", function () {
    monthlyElement.classList.toggle('d-none');
    monthlyElement.classList.toggle('d-flex');
    yearlyElement.classList.toggle('d-none');
    yearlyElement.classList.toggle('d-flex');
});

