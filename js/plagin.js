(function($){

     $.fn.carouselList = function(){
       
        var elLeft = $('.carousel-arrow-left');
     	var elRight = $('.carousel-arrow-right');
     	var values = 0;
     	
        elLeft.on('click', function(){
              
               values += 125; 
               $('.carousel-list').animate({"margin-left" : values + "px"}, 500);
        });



        elRight.on('click', function(){
        	values -=125;
            $('.carousel-list').animate({"margin-left" : values + "px"}, 500);

        })
 


     };



})(jQuery);