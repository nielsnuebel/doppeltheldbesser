var count = 0;
var maxTrial = 2;
var p = 0;
var u =0;
$( function() {
    $( ".droppable" ).draggable({
        revert : function(event, ui) {

            $(this).data("uiDraggable").originalPosition = {
                top : 0,
                left : 0
            };
            // return boolean
            return !event;
            // that evaluate like this:
            // return event !== false ? false : true;
        }
    });

    $( ".rightDropzone" ).droppable({

        drop: function ( event, ui ) {
            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } );
            ++count;
            var res = maxTrial - count;
            var currentId = $(ui.draggable).attr('myval');

            if(currentId == "x"){
                ++p;
            }

            if (p == 2 ) {
                $('.greyLightLeft').hide();
                $('.greyLightRight').hide();
                $('.greenLightLeft').show();
                $('.greenLightRight').show();
                setTimeout(function (){

                    //..animate the description div by changing it's left position to it's width (but as negative number)...
                    $('.description').animate({'left': -1*$(this).width()});

                    //...animate the 2 curtain images to width of 50px with duration of 2 seconds...
                    $('.curtainLeft').animate({ left: '-900px' },{duration: 2000});
                    $('.curtainRight').animate({ right: '-900px' },{duration: 2000});

                    //...show the content behind the curtains with fadeIn function (2 seconds)
                    $('.content').fadeIn(2000);


                    $('#p').css('opacity', '0');
                    $('#o').css('opacity', '0');


                    $('.greenLightLeft').hide();
                    $('.greenLightRight').hide();

                }, 2000);

                setTimeout(function (){

                    $('.contentTextWrap').css('z-index', '3');

                }, 3000);



            }

            if ( p < 2 && res==0 ){
                $('.greyLightLeft').hide();
                $('.greyLightRight').hide();
                $('.redLightLeft').show();
                $('.redLightRight').show();
                setTimeout(function (){
                    $('.again').show();
                }, 2000);

                setTimeout(function (){
                    location.reload('http://doppelt.nick.de/#Game');
                }, 8000);
            }
        }
    });

    $( ".leftDropzone" ).droppable({
        drop: function ( event, ui ) {
            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } );
            ++count;
            var res = maxTrial - count;
            var currentId = $(ui.draggable).attr('myval');
            if(currentId == "x"){
                ++p;
            }
            if (p == 2 ) {
                $('.greyLightLeft').hide();
                $('.greyLightRight').hide();
                $('.greenLightLeft').show();
                $('.greenLightRight').show();
                setTimeout(function (){
                    //..animate the description div by changing it's left position to it's width (but as negative number)...
                    $('.description').animate({'left': -1*$(this).width()});

                    //...animate the 2 curtain images to width of 50px with duration of 2 seconds...
                    $('.curtainLeft').animate({ left: '-900px' },{duration: 2000});
                    $('.curtainRight').animate({ right: '-900px' },{duration: 2000});

                    //...show the content behind the curtains with fadeIn function (2 seconds)
                    $('.content').fadeIn(2000);
                    $('#p').css('opacity', '0');
                    $('#o').css('opacity', '0');
                    $('.greenLightLeft').hide();
                    $('.greenLightRight').hide();
                }, 2000);
                setTimeout(function (){

                    $('.contentTextWrap').css('z-index', '3');

                }, 3000);
            }
            if ( p < 2 && res == 0 ){
                $('.greyLightLeft').hide();
                $('.greyLightRight').hide();
                $('.redLightLeft').show();
                $('.redLightRight').show();
                setTimeout(function (){
                    $('.again').show();
                }, 2000);
                setTimeout(function (){
                    location.reload('http://doppelt.nick.de/#Game');
                }, 8000);
            }
        }
    });
} );
