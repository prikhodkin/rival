$('.cart__next--delivery').click(()=> {
  $('.delivery').addClass('active');
  $('.cart__hide--payment').fadeToggle();
})

$('.cart__next--payment').click(()=> {
  $('.payment').addClass('active');
  $('.cart__hide--contact').fadeToggle();
})

$('.cart__next--contact').click(()=> {
  $('.contact').addClass('active');
})

$('.cart__flex--delivery').click(()=> {
  if($('.cart__radio--tk:checked').length !== 0) {
    $('.cart__row--city').css('display', 'none');
    $('.cart__row--tk').fadeIn();
  } else {
    $('.cart__row--tk').css('display', 'none');
    $('.cart__row--city').fadeIn();
  }
})

$('.cart__flex--payment').click(()=> {
  if($('.cart__radio--payment:checked').length !== 0) {
    $('.cart__row--payment').fadeIn();
  } else {
    $('.cart__row--payment').fadeOut();
  }
})

$('.cart__send').click((evt)=> {
  evt.preventDefault();
  $('.overlay').fadeIn();
  $('.modal--thx').fadeIn();
})
