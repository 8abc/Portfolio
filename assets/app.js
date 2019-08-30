// Updates the link to be at the right location
window.addEventListener("hashchange", function() {
  scrollBy(0, -50);
});

$(".nav-link").click(function() {
  $(".nav-link").removeClass("active");
  // $(this).addClass("active");
  $("div.show").removeClass("show");
});
