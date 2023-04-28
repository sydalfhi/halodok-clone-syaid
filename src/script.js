$(document).ready(function () {
  $("#menu_toggle").click(function () {
    $(".menu").addClass("duration-300");
    $(".menu").toggleClass("translate-x-[500px]");
    $(".menu").addClass("transition-all");
  });
});
