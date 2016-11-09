$(document).ready(function (){
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          $(".active").removeClass( "active" );
          $(this).addClass( "active" );
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 800);
      }
  });

   

});


// <div class="videocontainer">
// <iframe src="https://www.youtube.com/embed/FbP_SxCVhmU"
// frameborder="0" allowfullscreen class="video"></iframe>
// </div>
