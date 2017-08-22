/**
 * Created by Gen on 6/25/2017.
 */


$('#nav').affix({
    offset: {
        top: $('#antique').offset().top
    }
});


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    // $(window).bind('resize', setImageHeight);
    // setImageHeight();

    setTimeout(function(){
        $('.animateText').css("visibility", "visible").addClass("animated fadeInDown");
    }, 500);
});

$(window).scroll(function(){
   $(".info-box").each(function(){
      if($(window).scrollTop() > $(this).offset().top - ($(window).height()/1.05)){
          $(this).css("visibility", "visible").addClass("animated zoomIn");
      }
   });
});