
let quantity_a = $('.swiper-container.swiper-slide').length > 3;

function checkWidth() {
    return ($(window).width() < 1221);
}

$(document).ready(function () {
    $(window).resize(function () {
        if (checkWidth() | quantity_a) {
            swiper_f.enable()
        }
        else {
            swiper_f.disable();
        }
    });
});
    let swiper_f = new Swiper('.first_swiper', {
        slidesPerView: 1,
        spaceBetween: 70,
        slidesPerGroup: 1,
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            851: {
                slidesPerView: 2,
            },
            1221: {
                slidesPerView: 3,
            }
        }

    });
    swiper_f.disable();

if (checkWidth() | quantity_a) {
    swiper_f.enable()
}
else {
    swiper_f.disable();
}
let swiper_s = new Swiper('.second_swiper', {
    slidesPerView: 1,
    spaceBetween: 70,
    slidesPerGroup: 1,
    grabCursor: true,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 500,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination_feedback',
        clickable: true,
    },
});
let swiper_t = new Swiper('.third-swiper', {
    slidesPerView: 1,
    spaceBetween: 70,
    slidesPerGroup: 1,
    grabCursor: true,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 500,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination-mentors',
        clickable: true,
    },
});
