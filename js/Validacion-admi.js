
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

    // Eliminar button click
	$(document).on("click", ".delete", function(){
    console.log($(this).parents("tr").index() );
    const index = $(this).parents("tr").index();
    let tablaUsuarios = document.querySelector("#tabla tbody");
    var row = tablaUsuarios.rows[index];
    // Obtener el elemento con el idRegistro
    // Seleccionar el elemento <td> con el atributo "idRegistro"
    var idRegistroElement = row.querySelector('tr td[id="idRegistro"]');
    // Obtener el valor del atributo "idRegistro"
    var idRegistroValue = idRegistroElement.textContent;
    $(this).parents("tr").remove();
    eliminarRegistro(idRegistroValue);
  });

})

function llenarTabla() {
	// Solicitud a la API para autenticar el inicio de sesión
	fetch(`http://localhost:8080/Registros`) 
  .then((res) => res.json())
  .then((datos)=> {
	let tablaUsuarios = document.querySelector("#tabla tbody");

	for (const itemdatos of datos) {
    var date = new Date(itemdatos.fecha_nacimiento);
    var dia = date.getDate();
    var mes = date.getMonth() + 1; // Se suma 1 ya que los meses en JavaScript comienzan en 0
    var anio = date.getFullYear();

// Formatea la fecha en el formato dd/MM/yyyy
var fechaFormateada = dia.toString().padStart(2, '0') + '/' + mes.toString().padStart(2, '0') + '/' + anio;
   
		let tr = "<tr> <td id='idRegistro'>" + itemdatos.id_Registro  + "</td> <td>"+ itemdatos.nombre +  "</td> <td>" + itemdatos.apellido + "</td> <td>"  + fechaFormateada +
		 "</td> <td>" + itemdatos.nombre_mascota + "</td> <td>" + itemdatos.tipo_mascota + "</td> <td><a class='delete' title='Delete' data-toggle='tooltip'><i class='bi bi-trash'></i></a>"+ "</td></tr>"
	    
		tablaUsuarios.innerHTML += tr;
	}
  })

}

llenarTabla();
	
function eliminarRegistro(idRegistro) {
  // Solicitud a la API para autenticar el inicio de sesión
  fetch(`http://localhost:8080/deleteRegistro?idRegistro=${idRegistro}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    }
  })
.then(res => res.json())
.then(response => {
  if (response.ok) {
    // La solicitud fue exitosa
    console.log('Registro eliminado correctamente');
    alert("Registro eliminado con Exito"); 
  } 
      
  });
}