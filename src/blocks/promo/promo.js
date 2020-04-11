import $ from "jquery";
import slick from "slick-carousel";
$('.promo__list').slick({
  dots: true,
  adaptiveHeight: true,
  nextArrow: '.promo__arrow--right',
  prevArrow: '.promo__arrow--left',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: false
      }
    },
  ]
});
