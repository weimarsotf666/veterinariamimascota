
$(document).ready(function() {
  $('#consultarHora').submit(function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    const idRegistroLocal = localStorage.getItem("dato");

    consultar(idRegistroLocal); // Llamada a la API para autenticar el Email
  });
});

function consultar(idRegistroLocal) {
  // Solicitud a la API para autenticar el inicio de sesión
  fetch(`http://localhost:8080/ConsultaAgeda?idRegistro=${idRegistroLocal}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
.then(res => res.json())
.then(datos => {
   if (datos.length === 0) {
     alert("usuario no existe ");
    } else {
       var dato = datos[0];
       var date = new Date(dato.fecha);
       var dia = date.getDate();
       var mes = date.getMonth() + 1; // Se suma 1 ya que los meses en JavaScript comienzan en 0
       var anio = date.getFullYear();

// Formatea la fecha en el formato dd/MM/yyyy
var fechaFormateada = dia.toString().padStart(2, '0') + '/' + mes.toString().padStart(2, '0') + '/' + anio;
      
       $("#especialidad").val(dato.id_Servicio);
       $("#especialista").val(dato.id_Especialista);
       $("#fechas").val(fechaFormateada);
       $("#horas").val(dato.hora);
      }
  });
 
}



