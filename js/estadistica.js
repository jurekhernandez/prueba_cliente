$(document).ready(function(){
    estadistica();
})

function estadistica(){
    $(".producto").remove();
    $.ajax({
        type: "post",
        url: "http://localhost/prueba_wb/public/estadistica",
     //   url:"http://35.202.228.28/prueba_wb/public/estadistica",
        dataType: "json",
        success: function(data){
            for(var i =1 ; i<= data.length; i++){
                var elementos = "";
                elementos+="<tr class'producto'>";
                elementos+="<th scope='row'>"+data[i].id_producto+"</th>"; 
                elementos+="<td>"+data[i].titulo+"</td>";
                elementos+="<td>"+data[i].cantidad+"</td>";
                elementos+="<td>"+data[i].palabras+"</td>";
                elementos+="</tr>";
                $("#filas").append(elementos);
            }
        },
        failure: function(errMsg) {
            console.log(errMsg);
        }
    });
}