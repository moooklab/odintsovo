singleObjectSlider = new Swiper(document.querySelector('dialog[data-modal-name=object] div.swiper'), {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
        prevEl: document.querySelector('dialog[data-modal-name=object] div.swiper-navigation div.arrow:first-child'),
        nextEl: document.querySelector('dialog[data-modal-name=object] div.swiper-navigation div.arrow:last-child'),
    },
})