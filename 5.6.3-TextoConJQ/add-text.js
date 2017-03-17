// añade texto en los "li" elementos de #orderedlist
// Cambia el texto cuando pasamos por encima el raton

$(document).ready(function() { // $ = jQuery

//******************** orderedlist *************************//
    $("#orderedlist").find("li").each(function(i) { //.each = iterador
      $(this).append( " Texto añadido con JQ - Numero en 'li' " + i );
    });
//********** orderedlist2 añado texto cuando entro/salgo ********//
    $("#orderedlist2 > li:last > ul > li").hover(function() { // .hover = manejador a todos los elementos que encuentra
    	$(this).append(" Hola!"); // añadimos mensaje
        },function(){
  	       $(this).append("Adios!");
         });
//.hover 1-{funcion anonima primer manejador(Entrada)} 2- {Funcio anonima,Segundo manejador(Salida)}
// .text : coge la variable para cada uno de los items
// ****** sobre dd de faq cambio el texto cuando paso sobre el ***** //
      var str; // la tenemos fuera se crea la referencia al objeto str en el heap
      $("#faq dd").hover(function() {
  	    str = $(this).html(); // la referencia queda visible, ya que es usada por la funcion aunque se encuentre en otro ambito (inactivo en otro momento)
  	    $(this).html("Cambio el html !");
        },function(){
  	      $(this).html(str); // sustituye
        });
});

// var str : es una etiqueta una referencia a una variable -- un objeto que se entcuentra en el heap
// en el que metemos el objeto que tenemos referenciado , tenemos dentro de una funcion anonima en la que tenemos la referencia
// a la que apunta fuera de ese ambito, por tanto es la misma referencia.
// las funciones recuerdan el entorno donde fueron declaradas.
// los objetos no se crean en la pila, tenemos unicamente las refencias en el heap que unicamente se mantendrar aquellas referencias activas
