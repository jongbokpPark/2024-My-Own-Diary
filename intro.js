$(function () {
  $("#intro")
    .delay(5500)
    .fadeOut(1000, function () {
      $("body").removeClass("before-load");
    });
});
