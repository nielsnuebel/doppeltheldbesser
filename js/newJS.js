var video_data = null;

function loadVideo(video) {
    var src = 'http://www.nick.de/embed/?type=local_playlist&token=' + video.id + '&mrss=' + encodeURIComponent(video.mrss) + '&image=' + encodeURIComponent(video.preview_image_url);
    $('.video_text .video_title').html(video.name);
    $('.video_text .video_desc').html(video.description);
    $('#video_player').attr('src', src);
}

function refreshIframe(index) {
    loadVideo(video_data[index]);
}


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

    var slider = $('div.slider3').bxSlider({
        slideWidth: 200,
        minSlides: 2,
        maxSlides: 2,
        moveSlides: 1,
        slideMargin: 10,
        pager:false,
        nextSelector: '.slider3-next',
        prevSelector: '.slider3-prev',
        prevText: '<img src="images/arrow_left.png">',
        nextText: '<img src="images/arrow_right.png">'
    });


    $.getJSON('http://localhost:3000/458.json',
        function(data) {
        var first_video = data.first_video;
        video_data = data.videos;
        loadVideo(first_video);
            var counter = 1;
            $.each(video_data, function (index, value) {
                $('.slider3').append("<div><a onClick=\"refreshIframe(" + index + "); var s=s_gi('rsid'); s.linkTrackVars='prop1'; s.linkTrackEvents='event1'; s.prop1='Video" + index +"'; s.events='event1'; s.tl(this,'o','Video" + index +"');\"><img src=\"" + value.preview_image_url + "\"></a></div>");
            })
            slider.reloadSlider();
        });





    $('.w-lightbox-close').click(function() {
        $('#kobra-contestWrap').hide();
    });

    $('.button').click(function() {
        $('#kobra-contestWrap').css('display', 'block');
    });
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 40
                }, 1000);
                return false;
            }
        }
    });
});