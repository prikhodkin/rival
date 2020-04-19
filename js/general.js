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
$('.catalog__btn').on('click', function (evt) {
  evt.preventDefault();
  $('.overlay').fadeIn();
  var top = $(window).scrollTop() + $('.modal--item').height();
  $('.modal--item').css({
    'transform': 'translate(-50%, -50%)',
    'top': top
  });
  $('.modal--item').fadeIn();
});
$('.overlay').on('click', function () {
  $('.modal--item').fadeOut();
  $('.overlay').fadeOut();
});
$('.modal__close').on('click', function () {
  $('.modal--item').fadeOut();
  $('.overlay').fadeOut();
});
$('.modal__button--close').on('click', function (evt) {
  evt.preventDefault();
  $('.modal--item').fadeOut();
  $('.overlay').fadeOut();
});
$('.catalog__filter-button').click(function (evt) {
  evt.preventDefault();
  $('.filter').removeClass('filter--hide');
  $('body').addClass('fixed');
});
$('.filter__close').click(function () {
  $('.filter').addClass('filter--hide');
  $('body').removeClass('fixed');
});
var filter = document.querySelector('.filter__form');

if (filter) {
  filter.addEventListener('click', function (evt) {
    var target = evt.target.closest('.filter__header');

    if (!target) {
      return;
    } else {
      if ($(target).hasClass('filter__header--active')) {
        $(target).removeClass('filter__header--active');
      } else {
        $(target).addClass('filter__header--active');
      }
    }
  });
}

$('.warranty').slick({
  slidesToShow: 3,
  infinite: true,
  prevArrow: ".about__button--left",
  nextArrow: ".about__button--right",
  responsive: [{
    breakpoint: 770,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
});
$(function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    });
    return false;
  });
});
//# sourceMappingURL=maps/general.js.map
