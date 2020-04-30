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
$('.m-reviews__img-list').slick();
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
  $('.modal--thx').fadeOut();
  $('.overlay').fadeOut();
});
$('.modal__close').on('click', function () {
  $('.modal--item').fadeOut();
  $('.modal--thx').fadeOut();
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
$('.item__gallery-list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.item__arrow--left',
  nextArrow: '.item__arrow--right',
  fade: true,
  // asNavFor: '.item__gallery-sublist',
  infinite: true
});
$('.item__gallery-sublist').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.item__gallery-list',
  infinite: true,
  dots: false,
  vertical: true,
  focusOnSelect: true,
  responsive: [{
    breakpoint: 1199,
    settings: {
      vertical: false
    }
  }]
});
$('#responsiveTabsDemo').responsiveTabs({
  startCollapsed: 'accordion'
});
$('.item__show').click(function (evt) {
  evt.preventDefault();
  $('.item__show').toggleClass('item__show--active');
  $('.item__hide-content').slideToggle();
});
$('.cart__next--delivery').click(function () {
  $('.delivery').addClass('active');
  $('.cart__hide--payment').fadeToggle();
});
$('.cart__next--payment').click(function () {
  $('.payment').addClass('active');
  $('.cart__hide--contact').fadeToggle();
});
$('.cart__next--contact').click(function () {
  $('.contact').addClass('active');
});
$('.cart__flex--delivery').click(function () {
  if ($('.cart__radio--tk:checked').length !== 0) {
    $('.cart__row--city').css('display', 'none');
    $('.cart__row--tk').fadeIn();
  } else {
    $('.cart__row--tk').css('display', 'none');
    $('.cart__row--city').fadeIn();
  }
});
$('.cart__flex--payment').click(function () {
  if ($('.cart__radio--payment:checked').length !== 0) {
    $('.cart__row--payment').fadeIn();
  } else {
    $('.cart__row--payment').fadeOut();
  }
});
$('.cart__send').click(function (evt) {
  evt.preventDefault();
  $('.overlay').fadeIn();
  $('.modal--thx').fadeIn();
});
//# sourceMappingURL=maps/general.js.map
