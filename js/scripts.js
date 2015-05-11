$(document).ready(function() {

  //Hide navbar on scroll
  $(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() < 100) {
          $(".navbar").fadeIn();
        } else {
          $(".navbar").fadeOut();
        }
    });
  });

  $("#projects .circular-image:even").mouseenter(function() {
    $(this).animate({
    borderTopLeftRadius: 100,
    borderTopRightRadius: 300,
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 100 }, 350 );
    });

  $("#projects .circular-image:even").mouseleave(function() {
    $(this).animate({
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300,
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300}, 350 );
  });

  $("#projects .circular-image:odd").mouseenter(function() {
    $(this).animate({
    borderTopLeftRadius: 300,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 300 }, 350 );
    });

  $("#projects .circular-image:odd").mouseleave(function() {
    $(this).animate({
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300,
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300}, 350 );
  });
}); //end jQuery
