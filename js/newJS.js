$(document).ready(function() {
    $('ul.red').bxSlider({

        slideWidth: 300,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 10,
        responsive: true,
        pager: false,
        nextSelector: '.slider1-next',
        prevSelector: '.slider1-prev',
        prevText: '<img src="images/arrow_left.png">',
        nextText: '<img src="images/arrow_right.png">'
    });

    $('ul.blue').bxSlider({
        slideWidth: 300,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 10,
        responsive: true,
        pager: false,
        nextSelector: '.slider2-next',
        prevSelector: '.slider2-prev',
        prevText: '<img src="images/arrow_left.png">',
        nextText: '<img src="images/arrow_right.png">'
    });
});