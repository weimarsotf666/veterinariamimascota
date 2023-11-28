
$(document).ready(function() { //validacion Agendar hora cliente

$('#guardar').click(function()  {
var idRegistroLocal = localStorage.getItem("dato");

    const nombreEspecialidad = $('#especialidad').val();
    const idEspecialidad = document.getElementById("especialidad").selectedIndex;
    const idEspecialista = document.getElementById("especialista").selectedIndex;
    const nombreEspecialista = $('#especialista').val();
    const fechaAgenda = $('#fechaAgenda').val();
    const horaAgenda = $('#horaAgenda').val();
    const agendarService = new Services();
     
        
        if (fechaAgenda === "") {
          alert("Por favor, selecciona una fecha.");
          return;
        }
        
        if (horaAgenda === "") {
         alert("Por favor, selecciona una hora.");
            return;
          }
      
      agendarService.registroAgenda("2", nombreEspecialidad, nombreEspecialista, idRegistroLocal, fechaAgenda, horaAgenda, idEspecialidad, idEspecialista );
    });

    $('#mostraConsulta').click(function() {
      window.location.href = "consulta_reserva.html";
      window.location.replace('consulta_reserva.html'); 

    });

  });

   

    
    
