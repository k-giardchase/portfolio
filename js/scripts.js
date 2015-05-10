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

  $("#projects i").mouseenter(function() {
    $(this).addClass("work-hover");
  });

  $("#projects i").mouseleave(function() {
    $(this).removeClass("work-hover");
  });
}); //end jQuery
