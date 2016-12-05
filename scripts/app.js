$(document).ready(function() {
    var scrollStart = 0;
    var scrollEnd = 0;
    var hOffset = $('#start-navbar-dark').offset();
    var aOffset = $('#start-about-animation').offset();
    var tOffset = $('#start-technologies-animation').offset();
    var pOffset = $('#start-projects').offset();
    // Optimization flags so that it doesnt run every scroll
    var headerAnimate = true;
    var aboutAnimate = true;
    var technologiesAnimate = true;
    var projectsAnimate = true;

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
            console.log(aOffset);
            $('.about p, .about h4').addClass('animated fadeInUp');
            $('.about h3').addClass('animated fadeInDown');
            $('.profilepic').addClass('animated fadeInUp');
            aboutAnimate = false;
        } else if (scrollEnd > tOffset.top && technologiesAnimate) {
            $('.techsquares img').addClass('animated fadeInUp');
            projectsAnimate = false;
        } else if (scrollEnd > pOffset.top && projectsAnimate) {
            $('.f3').addClass('animated fadeInUp');
            $('.s3').addClass('animated fadeInUp');
            projectsAnimate = false;
        }
    });

    $('.about-nav').click(function() {
        $('html, body').animate({
            scrollTop: $('.about-section').offset().top
        }, 1300);
    });

    $('.projects-nav').click(function() {
        $('html, body').animate({
            scrollTop: $('.projects').offset().top
        }, 1300);
    });
    
    $('.contact-nav').click(function() {
        $('html, body').animate({
            scrollTop: $('.contact').offset().top
        }, 1300);
    });
});
