$(document).ready(function(){  
      
    $('.slider1').bxSlider({
    
    slideWidth: 300,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 10,
    responsive:false,
    pager:false,
    nextSelector: '.slider1-left',
    prevSelector: '.slider1-right',
    nextText: '<img src="images/arrow_left.png">',
     prevText: '<img src="images/arrow_right.png">'    
  });
  
  
   $('.slider2').bxSlider({
   
    slideWidth: 300,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 10,
    responsive:false,
    pager:false,
    nextSelector: '.slider2-left',
    prevSelector: '.slider2-right',
     nextText: '<img src="images/arrow_left.png">',
     prevText: '<img src="images/arrow_right.png">'
    

  });
  
  $('.slider3').bxSlider({
   
    slideWidth: 200,
    minSlides: 2,
    maxSlides: 2,
    moveSlides: 1,
    slideMargin: 10,
    pager:false,
    nextSelector: '.slider3-right',
    prevSelector: '.slider3-left',
     nextText: '<img src="images/arrow_right.png">',
     prevText: '<img src="images/arrow_left.png">'
    

  });

  
  
  
 

$('.w-lightbox-close').click(function() {
	$('#kobra-contestWrap').hide();
	});

$('.button').click(function() {
	$('#kobra-contestWrap').css('display', 'block');
	});

$( ".firstvideo" ).click(function() {
  $( ".iframeWrap" ).replaceWith('<div class="iframeWrap"> <iframe width="100%" height="100%" src="http://www.nick.de/embed/?type=local_playlist&token=b18ca4370909a7d2fbc2&mrss=http%3A%2F%2Fapi.mtvnn.com%2Fv2%2Fmrss.xml%3Furi%3Dmgid%3Asensei%3Avideo%3Amtvnn.com%3Alocal_playlist-b18ca4370909a7d2fbc2&image=http://images.mtvnn.com/35ab6d2dffc79c629f68b51cd09e65993%2F640x" allowfullscreen frameborder="0"></iframe> </div>' );
});



$( ".secondvideo" ).click(function() {
  $( ".iframeWrap" ).replaceWith('<div class="iframeWrap"> <iframe width="100%" height="100%" src="http://www.nick.de/embed/?type=local_playlist&token=d759b11cf72b273aa990&mrss=http%3A%2F%2Fapi.mtvnn.com%2Fv2%2Fmrss.xml%3Furi%3Dmgid%3Asensei%3Avideo%3Amtvnn.com%3Alocal_playlist-d759b11cf72b273aa990&image=http://images.mtvnn.com/35ab6d2dffc79c629f68b51cd09e65993%2F640x" allowfullscreen frameborder="0"></iframe> </div>' );
});

$( ".thirdvideo" ).click(function() {
  $( ".iframeWrap" ).replaceWith('<div class="iframeWrap"> <iframe width="100%" height="100%" src="http://www.nick.de/embed/?type=local_playlist&token=9614f44fea50bcf746f5&mrss=http%3A%2F%2Fapi.mtvnn.com%2Fv2%2Fmrss.xml%3Furi%3Dmgid%3Asensei%3Avideo%3Amtvnn.com%3Alocal_playlist-9614f44fea50bcf746f5&image=http://images.mtvnn.com/%2F2cd2ff48fc75c9a1fe486cb94fe076950%2F640x" allowfullscreen frameborder="0"></iframe> </div>' );
});




$( ".fourthvideo" ).click(function() {
  $( ".iframeWrap" ).replaceWith('<div class="iframeWrap"> <iframe width="100%" height="100%" src="http://www.nick.de/embed/?type=local_playlist&token=2fd3388033f7f613f2cf&mrss=http%3A%2F%2Fapi.mtvnn.com%2Fv2%2Fmrss.xml%3Furi%3Dmgid%3Asensei%3Avideo%3Amtvnn.com%3Alocal_playlist-2fd3388033f7f613f2cf&image=http://images.mtvnn.com/%2F855609467428259eb28f076b67bf0b570%2F640x" allowfullscreen frameborder="0"></iframe> </div>' );
});

$( ".fifthvideo" ).click(function() {
  $( ".iframeWrap" ).replaceWith('<div class="iframeWrap"> <iframe width="100%" height="100%" src="http://www.nick.de/embed/?type=local_playlist&token=ce2d0010dca491e7d80e&mrss=http%3A%2F%2Fapi.mtvnn.com%2Fv2%2Fmrss.xml%3Furi%3Dmgid%3Asensei%3Avideo%3Amtvnn.com%3Alocal_playlist-ce2d0010dca491e7d80e&image=http://images.mtvnn.com/%2Fb80a1da4a0f9b32b4c8bfc9e8ddf57d63%2F640x" allowfullscreen frameborder="0"></iframe> </div>' );
});




        
         });  
			
