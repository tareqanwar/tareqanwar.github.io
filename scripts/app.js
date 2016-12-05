$(document).ready(function() {
    var scrollStart = 0;
    var scrollEnd = 0;
    var hOffset = $('#start-navbar-dark').offset();
    var aOffset = $('#start-about-animation').offset();
    // Optimization flags so that it doesnt run every scroll
    var aboutAnimate = true;
    var headerAnimate = true;

    $(document).scroll(function() {
        scrollStart = $(this).scrollTop();
        scrollEnd = scrollStart + $(window).height();
        if (scrollStart > hOffset.top && headerAnimate) {
            $('.navbar').css('background', '#373737');
            headerAnimate = false;
        } else if (scrollStart === hOffset.top) {
            $('.navbar').css('background', 'none');
            headerAnimate = true;
        }
        if (scrollEnd > aOffset.top && aboutAnimate) {
            $('.about p, .about h4').addClass('animated fadeInUp');
            $('.about h3').addClass('animated fadeInDown');
            aboutAnimate = false;
        }
    });

    $('.about-nav').click(function() {
        console.log("Clicked!");
        $('html, body').animate({
            scrollTop: $('.about-section').offset().top
        }, 1300);
    });
});
