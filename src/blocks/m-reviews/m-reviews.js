
$('.m-reviews__list').slick({
  dots: false,
  infinite: true,
  speed: 300,
  prevArrow: '.m-reviews__arrow--left',
  nextArrow: '.m-reviews__arrow--right',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        centerMode: false,
        centerPadding: '0',
      }
    }
  ]
});

$('.m-reviews__count--small').html($(".m-reviews__list").slick("getSlick").slideCount)
$(".m-reviews__list").on("afterChange", function(event, slick, currentSlide, nextSlide){
  $(".m-reviews__count--current").html(currentSlide + 1);
});

$('.m-reviews__img-list').slick();
