'use strict'
// кастомные функции
jQuery(function ($) {
    // mobile menu
    $(document).ready(function () {
        $('.header__burger').click(function (event) {
            $('.header__burger, .mobile-menu').toggleClass('active');
            $('.container').toggleClass('lock');
        });
        $('.header__list').click(function (event) {
            $('.header__burger, .mobile-menu').removeClass('active');
            $('.container').removeClass('lock');
        });
    });
});
// Swiper
// document.addEventListener('DOMContentLoaded', function () {
//     /** clientele-slider */
//     let swiper2 = new Swiper('.clientele-slider', {
//         direction: 'horizontal',
//         slidesPerView: 5,
//         // Optional parameters
//         loop: true,
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false
//         },
//         speed: 1500,
//         breakpoints: { // условия для разных размеров окна браузера
//             320: {
//                 slidesPerView: 1,
//             },
//             479.98: { // при 479.98px и выше
//                 slidesPerView: 2,
//             },
//             768: { // при 768px и выше
//                 slidesPerView: 2,
//             },
//             1000: { // при 768px и выше
//                 slidesPerView: 3,
//             },
//             1280: { // при 768px и выше
//                 slidesPerView: 5,
//             }
//         },

//     });
// })