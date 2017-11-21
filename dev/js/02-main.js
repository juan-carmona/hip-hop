// invoke the carousel
    $('#carouselExampleIndicators').carousel({
      interval: false
    });

$('body').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta /120 > 0) {
        $(this).carousel('prev');
    } else {
        $(this).carousel('next');
    }
});