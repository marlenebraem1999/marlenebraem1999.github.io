      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 145 || document.documentElement.scrollTop > 145) {
          document.getElementById("myBtn").style.display = "block";
        } else {
          document.getElementById("myBtn").style.display = "none";
        }
      }

      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }


      //scroll show text 
$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          console.log("werkt")
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).removeClass('hideme');
              $(this).addClass('showme');

                  
          }
          
      }); 
  
  });
  
});

//scroll down arrow
$(function() {
$('a[href*=#]').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
});
});


//popup cv
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;
captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
modal.style.display = "none";
}
   