$('.warranty').slick({
  slidesToShow: 3,
  infinite: true,
  prevArrow: ".about__button--left",
  nextArrow: ".about__button--right",
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
