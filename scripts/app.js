$(document).ready(function() {
    var scrollStart = 0;
    var scrollEnd = 0;
    var hOffset = $('#start-navbar-dark').offset();
    var aOffset = $('#start-about-animation').offset();
    var eOffset = $('#start-education-animation').offset();
    // Optimization flags so that it doesnt run every scroll
    var headerAnimate = true;
    var aboutAnimate = true;
    var educationAnimate = true;

    $(document).scroll(function() {
        scrollStart = $(this).scrollTop();
        scrollEnd = scrollStart + $(window).height();
        if (scrollStart > hOffset.top && headerAnimate) {
            $('.navbar').css('background', '#373737');
            headerAnimate = false;
        } else if (scrollStart === hOffset.top) {
            $('.navbar').css('background', 'none');
            headerAnimate = true;
        } else if (scrollEnd > aOffset.top && aboutAnimate) {
            $('.about p, .about h4').addClass('animated fadeInUp');
            $('.about h3').addClass('animated fadeInDown');
            $('.profilepic').addClass('animated fadeInUp');
            aboutAnimate = false;
        } else if (scrollEnd > eOffset.top && educationAnimate) {
            $('.education').addClass('animated fadeInUp');
            educationAnimate = false;
        } 
    });

    $('.about-nav').click(function() {
        $('html, body').animate({
            scrollTop: $('.about-section').offset().top
        }, 1300);
    });

    $('.education-nav').click(function() {
        $('html, body').animate({
            scrollTop: $('.education-section').offset().top
        }, 1300);
    });

    $('.contact-nav').click(function() {
        $('html, body').animate({
            scrollTop: $('.contact').offset().top
        }, 1300);
    });
  
  /* Console Messages */
  console.log("Hi, this is Tareq :)");
  console.log("Nice to meet you.");
});
