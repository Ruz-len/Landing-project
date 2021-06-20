const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        },
        1200: {
          spaceBetween: 50
        }
    }
});

document.querySelector('.burger').addEventListener('click', () => {
    document.querySelectorAll('.burger, .navigation').forEach(item => item.classList.toggle('active'));
});

document.querySelectorAll('.navigation-item').forEach(item => {
    item.addEventListener('click', () => {
        item.querySelector('.navigation-sublist').classList.toggle('active');
    })
});