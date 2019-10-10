$(document).ready(function() {
  $(".parallax").parallax();
  var options = [{
    selector: '#staggeredList',
    offset: 300,
    callback: function(el) {
      Materialize.showStaggeredList($(el));
    }
  }, ];
  Materialize.scrollFire(options);

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    numVisible: 1,
  });


   // move next carousel
   $('.moveNextCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('next');
   });

   // move prev carousel
   $('.movePrevCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('prev');
   });

  // Scrolltop button
  $(window).scroll(function () {
    if ($(document).height() > 1000 && $(window).scrollTop() > $(".navbar-fixed").outerHeight()) {
      $("#scrolltop").fadeIn();
    } else {
      $("#scrolltop").fadeOut();
    }
  })
  $("#scrolltop").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
  });
});

function brokenImage(link, id) {
  var image = document.getElementById(id + 'new');
  var old = document.getElementById(id);
  sub = "<img src='" + link + "' alt='background picture showing a view of Vienna' />";
  image.innerHTML = sub;
  image.style.display = "inline";
  old.style.display = "none";
};