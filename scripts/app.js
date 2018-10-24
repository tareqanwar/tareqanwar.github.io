$(document).ready(function() {
    var scrollStart = 0;
    var scrollEnd = 0;
    var hOffset = $('#start-navbar-dark').offset();
    var aOffset = $('#start-about-animation').offset();
    // Optimization flags so that it doesnt run every scroll
    var headerAnimate = true;
    var aboutAnimate = true;
    var educationAnimate = true;

    $(document).scroll(function() {
        scrollStart = $(this).scrollTop();
        scrollEnd = scrollStart + $(window).height();
        if (scrollStart > hOffset.top && headerAnimate) {
            $('.navbar').css('background', '#373737');
            $('.navbar').css('color', '#fff');
            headerAnimate = false;
        } else if (scrollStart === hOffset.top) {
            $('.navbar').css('color', '#fff');
            $('.navbar').css('background', 'none');
            headerAnimate = true;
        } else if (scrollEnd > aOffset.top && aboutAnimate) {
            $('.about p, .about h4').addClass('animated fadeInUp');
            $('.about h3').addClass('animated fadeInDown');
            $('.profilepic').addClass('animated fadeInUp');
            aboutAnimate = false;
        }
    });

    $('.about-nav').click(function() {
        $('html, body').animate({
            scrollTop: $('.about-section').offset().top
        }, 1300);
    });

    $('.contact-nav').click(function() {
        $('html, body').animate({
            scrollTop: $('.contact').offset().top
        }, 1300);
    });

  /* Color Wheel */
  var canvas = document.getElementById("picker");
  var context = canvas.getContext("2d");
  var x = canvas.width / 2;
  var y = canvas.height / 2;
  var radius = 100;
  var counterClockwise = false;
  
  for(var angle=0; angle<=360; angle+=1){
      var startAngle = (angle-2)*Math.PI/180;
      var endAngle = angle * Math.PI/180;
      context.beginPath();
      context.moveTo(x, y);
      context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
      context.closePath();
      var gradient = context.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0,'hsl('+angle+', 10%, 100%)');
      gradient.addColorStop(1,'hsl('+angle+', 100%, 50%)');
      context.fillStyle = gradient;
      context.fill();
  }

 /* Brain.JS */
 var net = new brain.NeuralNetwork();

 net.train([
    { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
    { input: { r: 0.1, g: 0.84, b: 0.72 }, output: { light: 1 } },
    { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
    { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
    { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
    { input: {r: 1, g: 0.99, b: 0}, output: { light: 1 } },
    { input: {r: 1, g: 0.42, b: 0.52}, output: { dark: 1 } },
    { input: {r: 0.33, g: 0.66, b: 1}, output: { dark: 1 } },
  ]);
    function formatRGB(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";

        return {
            r: Math.floor(r / 2.55) / 100,
            g: Math.floor(g / 2.55)/ 100,
            b: Math.floor(b / 2.55) / 100
        }
    }

    function formatRGBA(r, g, b, a) {
        if (r > 255 || g > 255 || b > 255 || a > 100)
            throw "Invalid color component";

        return {
            r: Math.floor(r / 2.55) / 100,
            g: Math.floor(g / 2.55)/ 100,
            b: Math.floor(b / 2.55) / 100,
            a: a / 100
        }
    }

    function rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    }
  
  $('#picker').click(function(e) {
    var rect = this.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    var coord = "x=" + x + ", y=" + y;
    var c = this.getContext('2d');
    var p = c.getImageData(x, y, 1, 1).data;
    var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    var rgb = formatRGB(p[0], p[1], p[2]);
    var rgba = formatRGBA(p[0], p[1], p[2], 50);
    console.log(rgb);

    const result = brain.likely(rgb, net)

    var aboutOffset = $('.about-section').offset();
    scrollEnd = scrollStart + $(window).height();
    if (scrollEnd > aboutOffset.top){
        $(".about-section").css("background-color", hex);
        if(result == 'dark')
            $(".about-section").css("color", "#fff");
        else
            $(".about-section").css("color", "#000");
    }
    else {
        $("header").css("background-color", rgba);
        if(result == 'dark')
            $("header").css("color", "#fff");
        else
            $("header").css("color", "#000");
    }
  });

  if('serviceWorker' in navigator) {
    try {
        navigator.serviceWorker.register('/serviceworker.js');
        console.log(`SW registered`);
    } catch(error) {
        console.log(`SW reg failed`);
    }
  }
  
  /* Console Messages */
  console.log("Hi, this is Tareq :)");
  console.log("Nice to meet you.");
});
