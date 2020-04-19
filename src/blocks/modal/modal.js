$('.catalog__btn').on('click', (evt) => {
  evt.preventDefault();
  $('.overlay').fadeIn();
  const top = $(window).scrollTop() + $('.modal--item').height();
  $('.modal--item').css({
    'transform': 'translate(-50%, -50%)',
    'top': top
  });
  $('.modal--item').fadeIn();
});

$('.overlay').on('click', () => {
  $('.modal--item').fadeOut();
  $('.overlay').fadeOut();
})

$('.modal__close').on('click', () => {
  $('.modal--item').fadeOut();
  $('.overlay').fadeOut();
})

$('.modal__button--close').on('click', (evt) => {
  evt.preventDefault();
  $('.modal--item').fadeOut();
  $('.overlay').fadeOut();
})
