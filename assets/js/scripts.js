const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 50,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});