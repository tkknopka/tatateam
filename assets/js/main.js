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

