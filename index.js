$(document).ready(function() {
  $(".parallax").parallax();
  var options = [
      {selector: '#staggeredList', offset: 300, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
    ];
    Materialize.scrollFire(options);
});
