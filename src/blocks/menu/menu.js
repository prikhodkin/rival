import $ from "jquery";

$('.menu__btn').click(() => {
    $('.menu__hamburger').toggleClass('menu__hamburger--active');
    $('.header__menu-wrapper').fadeToggle('slow');
    $('body').toggleClass('fixed');
});


