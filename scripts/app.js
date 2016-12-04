$(document).ready(function () {
  var scrollStart = 0;
  var scrollEnd = 0;
  var hOffset = $('#start-navbar-dark').offset();
  // Optimization flags so that it doesnt run every scroll
  var headerAnimate = true;

  $(document).scroll(function () {
    scrollStart = $(this).scrollTop();
    scrollEnd = scrollStart + $(window).height();
    if (scrollStart > hOffset.top && headerAnimate) {
      $('.navbar').css('background', '#373737');
      headerAnimate = false;
    } else if (scrollStart === hOffset.top) {
      $('.navbar').css('background', 'none');
      headerAnimate = true;
    }
  });
});
