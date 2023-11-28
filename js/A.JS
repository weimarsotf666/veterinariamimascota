
//console.log($(this).parents("tr").index() + 1);




$(document).ready(function(){




	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();
	
	// Agregar nuevo cliente - button click
    $(".add-new").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="ID" id="ID"></td>' +
            '<td><input type="text" class="form-control" name="NOMBRE Y APELLIDO" id="NOMBRE Y APELLIDO"></td>' +
            '<td><input type="text" class="form-control" name="FECHA" id="FECHA"></td>' +'<td><input type="text" class="form-control" name="MASCOTA" id="MASCOTA"></td>'+'<td><input type="text" class="form-control" name="SERVICIO" id="SERVICIO"></td>'
			+ '<td>' + actions + '</td>' +
        '</tr>';
    	$("table").append(row);		
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });

	// Export a Excel
    const $btnExportar = document.querySelector("#btnExportar"),
        $tabla = document.querySelector("#tabla");

    $btnExportar.addEventListener("click", function() {
        let tableExport = new TableExport($tabla, {
            exportButtons: false, // No queremos botones
            filename: "Reporte de prueba", //Nombre del archivo de Excel
            sheetname: "Reporte de prueba", //Título de la hoja
        });
        let datos = tableExport.getExportData();
        let preferenciasDocumento = datos.tabla.xlsx;
        tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
    });

	// Agregar  button click
	$(document).on("click", ".add", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true; 
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
		}		
    });
	// Editar button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });
	// Eliminar button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });
});
 

function llenarTabla() {
	// Solicitud a la API para autenticar el inicio de sesión
	fetch(`http://localhost:8080/Registros`) 
  .then((res) => res.json())
  .then((datos)=> {
	let tablaUsuarios = document.querySelector("#tabla tbody");

	for (const itemdatos of datos) {
		let tr = "<tr> <td>" + itemdatos.id_Registro +  "</td> <td>" + itemdatos.nombre +  "</td> <td>" + itemdatos.apellido +
		 "</td> <td>" + itemdatos.nombre_mascota  + "</td> <td>"  + itemdatos.fecha_nacimiento +
		  "</td> <td>" + itemdatos.nombreServicio + "</td></tr>"
	    
		tablaUsuarios.innerHTML += tr;
	}
  })

}



llenarTabla();
	