$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header__body").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".header__bg__layer").removeClass("active");
      }
  });
});