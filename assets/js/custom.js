// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     var box = $('.hero-bg').height();
//     var header = $('header').height();
    
// if (box) {
//     if (scroll >= box - header ) {        
//       $(".header__body").addClass("background-header");
//     } else {
//       $(".header__body").removeClass("background-header");
//     }
// }else{
//   if(scroll >= header){
//     $(".header__body").addClass("header-position");
//   }
//   else{
//     $(".header__body").removeClass("header-position");
//   }
// }

// });


var owlClass = document.querySelector('.owl-carousel')

if (owlClass) {


  jQuery(document).ready(function ($) {
    var owl = $('.owl-carousel');
    owl.on('initialize.owl.carousel initialized.owl.carousel ' +
      'initialize.owl.carousel initialize.owl.carousel ' +
      'resize.owl.carousel resized.owl.carousel ' +
      'refresh.owl.carousel refreshed.owl.carousel ' +
      'update.owl.carousel updated.owl.carousel ' +
      'drag.owl.carousel dragged.owl.carousel ' +
      'translate.owl.carousel translated.owl.carousel ' +
      'to.owl.carousel changed.owl.carousel',
      function (e) {
        $('.' + e.type)
          .removeClass('secondary')
          .addClass('success');
        window.setTimeout(function () {
          $('.' + e.type)
            .removeClass('success')
            .addClass('secondary');
        }, 500);
      });
    owl.owlCarousel({
      loop: false,
      // center: true,
      nav: true,
      lazyLoad: true,
      margin: 150,
      video: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 3,
          nav: true,
        },
        960: {
          items: 4,
        },
        1200: {
          items: 5
        }
      }
    });

  });

}
