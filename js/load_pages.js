//utilizamos ready para trabajar sobre el DOM apenas esté listo
$(document).ready(function(){
  crearLinks();

  $.ajax({ url: "inicio.php",
  cache:true,
  success: function(respuesta) {
    $("#maincontent").html(respuesta);
  }
  });

});

function crearLinks() {
  // Recorro todos los h3 dentro del sidebar1
  var opciones = $(".menu li");

  //genero la accion del clic por cada uno
  opciones.click(function(){
    //utilizo el id de cada h3 como nombre de la sección
    mostrarseccion(this.id);
  });
}

function mostrarseccion(nombre) {
    $.ajax({ url: nombre+".php",
    cache:true,
    success: function(respuesta) {
      $("#maincontent").html(respuesta);
    }
    });
}
