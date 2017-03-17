
$(document).ready(function() { // $(document) : objeto, una variable

    $("a").click(function() { // se ejecuta cuando este el dom cargado


  var r = confirm("¿quieres continuar?");
  if (r == true){
    alert("Hola !! Sigamos..");
  }else{
      event.preventDefault();
  }
  //event.preventDefault -- > no te abre el enlace
    });
});


/*

 var dom = $(document); --> llamamos a la bilbioteca $ con el objeto document
 dom.ready(ready_funct) --> despues de guardarlo y lo ejecutamos.

funcion mensaje(){
    alert("Hola !");
}
function ready_funct(){
  $("a").click(function() { // $("a") => var elemt_a  = $("a")
                               elemt_a.click(mensaje); -- > sin parentesis para que no se ejecute
      alert("Hola");
  });
}
*/


// $ es y la variable que apunta a jquery- que exporta la variable global jquery y la asigna a $ : $ = jQuery
// Por tanto $ es igual que si pusieramos jquery (como variable o funcion)
