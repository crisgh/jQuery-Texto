//*************** Forma 1 *****************//
$(document).ready(function() {
   // ***** elementos dt en faq  ****** //
  $("#faq dt").click(function() {
   	$(this).fadeOut("slow", function(){
        $("h3").html("click aqui para volverlo a mostrar");
   	});
  });
    $("#faq dd").click(function() {
     	$(this).fadeOut("slow", function(){
     	  // quito los dd de h3 -- los difumino
     	});
  });
    $("h3").click(function() {
	      $("dt").fadeIn("slow");
        $("dt").click(function() {
          $("dd").fadeIn("slow");
        });
      });
});

//*************** Forma 2 *****************//
/*
jQuery(document).ready(function(){
  $("#faq dt").click(function() {
    var nodo = $(this);
    $(this).fadeOut("slow");
    $("h3").click(funcion(){
    $(this) = nodo
      $(this).fadeIn("slow");
    });
});
*/
