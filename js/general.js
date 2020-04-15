"use strict";

$('.menu__btn').click(function () {
  $('.menu__hamburger').toggleClass('menu__hamburger--active');
  $('.header__menu-wrapper').fadeToggle('slow');
  $('body').toggleClass('fixed');
});
$('.promo__list').slick({
  dots: true,
  adaptiveHeight: true,
  nextArrow: '.promo__arrow--right',
  prevArrow: '.promo__arrow--left',
  responsive: [{
    breakpoint: 1199,
    settings: {
      arrows: false
    }
  }]
});
$('[data-fancybox]').fancybox({
  loop: true,
  infobar: false,
  animationEffect: "fade",
  buttons: ['close']
});
$('.m-reviews__list').slick({
  dots: false,
  infinite: true,
  speed: 300,
  prevArrow: '.m-reviews__arrow--left',
  nextArrow: '.m-reviews__arrow--right',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1199,
    settings: {
      centerMode: false,
      centerPadding: '0'
    }
  }]
});
$('.m-reviews__count--small').html($(".m-reviews__list").slick("getSlick").slideCount);
$(".m-reviews__list").on("afterChange", function (event, slick, currentSlide, nextSlide) {
  $(".m-reviews__count--current").html(currentSlide + 1);
});
//# sourceMappingURL=maps/general.js.map
