$(window).on("load resize", function () {
  var windowSize = $(window).width();

  if (windowSize < 768) {
    $(".footer-links-wrapper h3").on("click", function () {
      $(this).next().slideToggle();
      $(this).toggleClass("expanded");
    });
  } else {
    $(".footer-links-wrapper ul").removeAttr("style");
     $(".footer-links-wrapper h3").off("click");
  }
});

// if (window.innerWidth <= 768 && e.type == "click") {
//   $(e.target).toggleClass("expanded");
//   $(e.target).next().slideToggle(1000);
// } else if (window.innerWidth > 768 && e.type == "resize") {
//   $(".col-sm-12 ul").show();
// }

//  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
//   <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
//   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
