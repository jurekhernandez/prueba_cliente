
$(document).ready(function(){
    $(window).keydown(function(event){
        if(event.keyCode == 13) {
        event.preventDefault();
        buscar($("#keyword").val());
        }
    });
    $("#search").click(function(){
        buscar($("#keyword").val());
    })
});

function buscar(keyword){ 
    var obj = { "keyword":keyword};
    $(".producto").remove();
    $.ajax({
        type: "post",
        url: "http://localhost/prueba_wb/public/search",
      //  url:"http://35.202.228.28/prueba_wb/public/search",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            var datos = data[0];
            var cantidadDatos=datos.length;
            var cantidadIteraciones = Math.ceil(datos.length/3);
            var elementos = "";
            var contadorGeneral=0;
            for(var i =1 ; i<= cantidadIteraciones; i++){
                if(contadorGeneral==cantidadDatos){
                    break;
                }
                elementos += "<div class='w3-row-padding producto'>";
                for(var x=1 ; x<=3 ; x++){
                   elementos += "<div class='w3-third w3-container w3-margin-bottom'>";
                   elementos += "<img src='"+datos[contadorGeneral]['imagen']+"' alt='Norway' style='width:100%' class='w3-hover-opacity'>";
                   elementos += "<div class='w3-container w3-white'>";
                   elementos += "<p><b>"+datos[contadorGeneral]['titulo']+"  (precio : "+datos[contadorGeneral]['precio']+")</b></p>";
                   elementos += "<p>"+datos[contadorGeneral]['descripcion']+".</p>";
                   elementos += "</div>";
                   elementos += "</div>";
                   contadorGeneral++;
                   if(contadorGeneral==cantidadDatos){
                       break;
                   }
                }
                elementos +="</div>";
            }
            $("#contenedor").append(elementos);
        },
        failure: function(errMsg) {
            $("#aca").html("<h4> Algo salio mal</h4>");
            console.log(errMsg);
        }
    });
}

