// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//

$( document ).ready(function() {
      $( "#orderedlist" ).addClass( "blue" );
      $( "#orderedlist li" ).addClass("red");
      $("#orderedlist li").last().mouseover(function(event){
        $("#orderedlist li").last().addClass("green");
      });
      $("#orderedlist li").last().mouseout(function(event){
        $("#orderedlist li").last().removeClass("green");
      });
});
