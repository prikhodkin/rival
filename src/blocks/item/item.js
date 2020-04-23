$('.item__gallery-list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.item__arrow--left',
  nextArrow: '.item__arrow--right',
  fade: true,
  // asNavFor: '.item__gallery-sublist',
  infinite: true,
});
$('.item__gallery-sublist').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.item__gallery-list',
  infinite: true,
  dots: false,
  vertical: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        vertical: false,
      }
    },
  ]
});

$('#responsiveTabsDemo').responsiveTabs({
  startCollapsed: 'accordion',
});

$('.item__show').click((evt)=> {
  evt.preventDefault();
  $('.item__show').toggleClass('item__show--active');
  $('.item__hide-content').slideToggle();
})
