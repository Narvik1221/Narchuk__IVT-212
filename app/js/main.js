const swiper = new Swiper('.news__swiper', {

    loop: true,
    slidesPerView: 1,
    spaceBetween: 64,
    navigation: {
        nextEl: '.swiper-button-next',

    },
    breakpoints: {
        320:{
            slidesPerView: 1,
            spaceBetween: 32,
        },
        1700:{
            slidesPerView: 1.5,
            spaceBetween: 64,
        }

    }


});
const swiper1 = new Swiper('.advice__swiper', {

    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },



});
const swiper2 = new Swiper('.showcase__swiper', {

    loop: true,
    slidesPerView: 1,
    slidesPerColumn: 3,
    grid: {
        rows: 3,
    },
    slidesPerGroup:1,
    spaceBetween: 32,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    breakpoints: {
        320: {
            slidesPerView: 1,

        },
        1024: {
            slidesPerView: 2,

        },
        1900:{
            slidesPerView: 3,


        }
    }


});


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');

}

const iconMenu = document.querySelector('.menu__icon');
const menu = document.querySelector('.header__menu');
const header = document.querySelector('.header__inner');
iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle('_active');
    menu.classList.toggle('_active');
    header.classList.toggle('_active');
})
