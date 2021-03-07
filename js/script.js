$(document).ready (function(){

    $('[data-toggle="tooltip"]') .tooltip();
 $(".navbar a, footer a[href ='#mypage']") .on ('click' ,function(event){

    if (this.hash ! == "") {
        event.preventDefault();

        var hash = this.hash ;

     $('html,body') .animate ({
         scrollTop : $(hash) .offset () .top
     }, 900 ,function () {
         window.location.hash =hash ;
     });     
    }
 });
  $(".slideanimate").each(function(){
      $(this).stop().delay(1000).addClass("slide");
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
    
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
    });
  
});