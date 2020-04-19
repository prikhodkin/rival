//= "../blocks/menu/menu.js"
//= "../blocks/promo/promo.js"
//= "../blocks/gallery/gallery.js"
//= "../blocks/m-reviews/m-reviews.js"
//= "../blocks/modal/modal.js"
//= "../blocks/filter/filter.js"
//= "../blocks/warranty/warranty.js"


$(function(){
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});
