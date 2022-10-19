
(function($) {

	$( document ).ready( function() {

		/* VIEWPORT FIXES (http://timkadlec.com/2013/01/windows-phone-8-and-device-width/) */
		if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		  var msViewportStyle = document.createElement('style');
		  msViewportStyle.appendChild(
		    document.createTextNode(
		      '@-ms-viewport{width:auto!important}'
		    )
		  );
		  document.querySelector('head').appendChild(msViewportStyle);
		}

		//javascript code hier
//colorpicker
        $(function() {
	//bg color selector
  $(".color").click(function(){
		var color = $(this).attr("data-value");
    $(".mynameis").css("background-color", color);
	});
  
  //add color picker if supported
  if (Modernizr.inputtypes.color) {
    $(".picker").css("display", 'inline-block');
    var c = document.getElementById('colorpicker');
    c.addEventListener('change', function(e) {
      //d.innerHTML = c.value;
      var color = c.value;
      $(".mynameis").css("background-color", color);
		}, false);
  }
});
function pickColor() {
  $("#colorpicker").click();
};
        

        
//size slider
  $('#fontfield').on('change', function () {
    var v = $(this).val();
    $('.name').css('font-size', v + 'px')
});     
        
// directe input
       $(document).ready(function(){
    $("#namefield").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();
        
        // Setting the Div content
        $(".name").text(currentText);
    });
});
        

//reset met reload page in button

        
	} );

})(jQuery);
