$(document).ready(function(){
    estadistica();

    $("#cargar").click(function(){
        cargarCSV();
    })

})

function estadistica(){
    $(".producto").remove();
    $.ajax({
        type: "post",
          url:"http://35.202.228.28/prueba_wb/public/estadistica",
          cache: false,
        dataType: "json",
    }).done(function(data){
        for(var i =0 ; i< data.length; i++){
            var elementos = "";
            elementos+="<tr class'producto'>";
            elementos+="<th scope='row'>"+data[i].id_producto+"</th>"; 
            elementos+="<td>"+data[i].titulo+"</td>";
            elementos+="<td>"+data[i].cantidad+"</td>";
            elementos+="<td>"+data[i].palabras+"</td>";
            elementos+="</tr>";
            $("#filas").append(elementos);
        }
    }).fail(function(error){
        console.log("algo salio mal:");
        console.log(error);
    });
}

/*
    function cargarCSV(){
        var formData = new FormData(document.getElementById("formuploadajax"));
        formData.append("dato", "valor");
        $.ajax({
            url: "http://localhost/prueba_wb/public/cargar",
            type: "post",
            dataType: "html",
            data: formData,
            cache: false,
            contentType: false,
            processData: false
        })
        .done(function(res){
            $("#mensaje").html("Respuesta: " + res);
        });
    }
    */
