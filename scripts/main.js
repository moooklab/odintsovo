header = document.querySelector('header')

window.addEventListener('scroll', event => {
    this.scrollY > 0 ? header.classList.add("sticky") : header.classList.remove("sticky")
})

const mainCounter = (swiper) => {
    const counter = document.querySelector('section.main div.swiper-counter')
    currentIndex = (swiper.activeIndex + 1).toString().padStart(2, '0')
    totalIndex = swiper.slides.length.toString().padStart(2, '0')
    counter.textContent = currentIndex + ' / ' + totalIndex
}

const mainSliderImages = new Swiper(document.querySelector('section.main div.swiper.images'), [])

const mainSliderTexts = new Swiper(document.querySelector('section.main div.swiper.texts'), {
    allowTouchMove: false,
    pagination: {
        el: document.querySelector('section.main div.swiper-pagination'),
        renderBullet: (index, className) => {
            return `<div class="${className}"><div class="progress"></div></div>`; // Example to show index number
        },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: mainSliderImages
    },
    on: {
        init: function(swiper) {
            mainCounter(swiper)
        },
        slideChange: function(swiper) {
            mainCounter(swiper)
        },
        autoplayTimeLeft(swiper, time, progress) {
            const bullets = document.querySelectorAll('div.swiper-pagination div.swiper-pagination-bullet')
            bullets[swiper.activeIndex].querySelector('div.progress').style.width = 100 - (progress * 100) + '%'
        }
    }
})

const clientSlider = new Swiper(document.querySelector('section.clients div.swiper'), {
    slidesPerView: 1.5,
    navigation: {
        prevEl: document.querySelector('section.clients div.swiper-navigation div.arrow:first-child'),
        nextEl: document.querySelector('section.clients div.swiper-navigation div.arrow:last-child'),
    },
    breakpoints: {
        1280: {
            slidesPerView: 4
        },
        960: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: 2.5
        }
    }
})

const documentSlider = new Swiper(document.querySelector('section.documents div.swiper'), {
    slidesPerView: 2,
    spaceBetween: 12,
    navigation: {
        prevEl: document.querySelector('section.documents div.swiper-navigation div.arrow:first-child'),
        nextEl: document.querySelector('section.documents div.swiper-navigation div.arrow:last-child'),
    },
    breakpoints: {
        1280: {
            slidesPerView: 8
        },
        960: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 4
        }
    }
})

const objectSlider = new Swiper(document.querySelector('section.objects div.swiper'), {
    slidesPerView: 1,
    spaceBetween: 20,
    // freeMode: true,
    breakpoints: {
        1280: {
            slidesPerView: 3
        },
        960: {
            slidesPerView: 2.5
        },
        640: {
            slidesPerView: 1.5
        }
    }
})

const teamSlider = new Swiper(document.querySelector('section.team div.swiper'), {
    slidesPerView: 1.6,
    spaceBetween: 10,
    navigation: {
        prevEl: document.querySelector('section.team div.swiper-navigation div.arrow:first-child'),
        nextEl: document.querySelector('section.team div.swiper-navigation div.arrow:last-child'),
    },
    pagination: {
        el: document.querySelector('section.team div.swiper-pagination'),
        type: 'progressbar'
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1280: {
            slidesPerView: 2
        },
    }
})

const testSliderCaption = new Swiper(document.querySelector('section.testing div.swiper.captions'), {
    slidesPerView: 1.65,
    spaceBetween: 10,
    breakpoints: {
        480: {
            slidesPerView: 2.5,
            spaceBetween: 10
        },
        960: {
            slidesPerView: 3.5,
            spaceBetween: 15
        },
        1280: {
            slidesPerView: 5
        },
    }
})
const testSliderContent = new Swiper(document.querySelector('section.testing div.swiper.contents'), {
    allowTouchMove: false,
    thumbs: {
        swiper: testSliderCaption
    }
})

const openProduct = (element) => {
    const product = element.closest('div.product')

    if( product.classList.contains('open') ) {
        product.classList.remove('open')
    } else {
        products = document.querySelectorAll('section.products div.product')
        products.forEach( product => { product.classList.remove('open') })
        product.classList.add('open')
    }
}

const upload = (element) => {
    file = element.files[0]
    console.log(element.files)
    if( file ) {
        element.nextElementSibling.innerHTML = element.files[0].name
        element.parentNode.classList.add("added")
    } else {
        element.parentNode.classList.remove("added")
    }
}

const resetUpload = (event, element) => {
    event.preventDefault()
    element.parentNode.classList.remove("added")
}

const headerMenu = (element) => {
    menu = document.querySelector('section.menu')
    element.classList.toggle('opened')
    menu.classList.toggle('opened')
}