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
});

function brokenImage(link, id) {
  var image = document.getElementById(id + 'new');
  var old = document.getElementById(id);
  sub = "<img src='" + link + "' alt='background picture showing a view of Vienna' />";
  image.innerHTML = sub;
  image.style.display = "inline";
  old.style.display = "none";
};
