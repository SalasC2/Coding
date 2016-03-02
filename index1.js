$(document).ready(function() { 
  $('#write').on('keyup', function(event) { 
//	console.log(event);
        console.log(event.keyCode); 
        console.log("<span>" + String.fromCharCode(event.keyCode) + "</span>");
        $('.text-container').append("<span>"+String.fromCharCode(event.keyCode) + "</span>"); 
  $('#target').on('click', function(event) { 
     $('.text-container').html("");  
});  	
   }); 
 
         
}); 
