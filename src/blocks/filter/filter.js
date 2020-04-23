$('.catalog__filter-button').click((evt)=> {
  evt.preventDefault();
  $('.filter').removeClass('filter--hide');
  $('body').addClass('fixed');
});

$('.filter__close').click(()=> {
  $('.filter').addClass('filter--hide');
  $('body').removeClass('fixed');
})

const filter = document.querySelector('.filter__form');
if (filter) {
  filter.addEventListener('click', (evt) => {
    const target = evt.target.closest('.filter__header');
    if (!target) {
      return;
    } else {

      if($(target).hasClass('filter__header--active')) {
        $(target).removeClass('filter__header--active')
      } else {
        $(target).addClass('filter__header--active')
      }

    }
  })

}
