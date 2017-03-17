        var count = 0;
        var maxTrial = 2;
        var p = 0;
        var u =0;
    $( function() {
    $( ".droppable" ).draggable();
 
    $( ".rightDropzone" ).droppable({
	     
	     
            drop: function ( event, ui ) {
	            
	            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } ); 
	            	                         ++count;
	           var res = maxTrial - count;
               var currentId = $(ui.draggable).attr('myval');
               
               
               
               if(currentId == "x"){
                   
	               $('.greyLightRight').delay( 2000 ).addClass('active');
	                 ++p;
	                 
	                 
                } 
                   
            
            if (p == 2 ) {
	            setTimeout(function (){
        
                                 //..animate the description div by changing it's left position to it's width (but as negative number)...  
            $('.description').animate({'left': -1*$(this).width()});  
      
            //...animate the 2 curtain images to width of 50px with duration of 2 seconds...  
            $('img.curtain').animate({ width: 0 },{duration: 2000});  
      
            //...show the content behind the curtains with fadeIn function (2 seconds)  
            $('.content').fadeIn(2000);  
            
                          
                          $('#o').hide();
                          $('#p').hide();


                         $('.rightSuccess').hide();
                         $('.leftSuccess').hide();  
                         $('.rightDropzone').hide();
                         $('.leftDropzone').hide(); 
                              

                          }, 2000);    
                          
                          
                           setTimeout(function (){
                          $('#kobra-contestWrap').css('display', 'block');
                          
                            }, 8000); 
                          
                                
                   }
                   
                   
                   
                   if ( p < 2 && res==0 ){
                 $('.again').show();  
                 
                 setTimeout(function (){
                 location.reload();
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
	                 
                     $('.greyLightLeft').addClass('active');

	                ++p;
	                
                 } 
	             if (p == 2 ) {
		             setTimeout(function (){
         //..animate the description div by changing it's left position to it's width (but as negative number)...  
            $('.description').animate({'left': -1*$(this).width()});  
      
            //...animate the 2 curtain images to width of 50px with duration of 2 seconds...  
            $('img.curtain').animate({ width: 0 },{duration: 2000});  
      
            //...show the content behind the curtains with fadeIn function (2 seconds)  
            $('.content').fadeIn(2000);  
                         $('#o').hide();
                          $('#p').hide();
                        $('.rightSuccess').hide();
                         $('.leftSuccess').hide();  
                         $('.rightDropzone').hide();
                         $('.leftDropzone').hide(); 
                            
                         }, 2000);     
                          setTimeout(function (){
                          $('#kobra-contestWrap').css('display', 'block');
                          
                            }, 8000); 
                         
                    }
                    if ( p < 2 && res == 0 ){
                 $('.again').show();  
                  setTimeout(function (){
                 location.reload();
                    	}, 8000);
                    	}       
             
          
      }
            
    });
    
  } );    
     

