

$(document).ready(function() { //validacion registro cliente

 $('#guardar').click(function() {

const email = $("#email").val();
const nombre = $('#nombre').val();
const apellido = $('#apellido').val();
const telefono = $('#telefono').val();
const password = $('#password').val();
const nombreMascota = $('#nombreMascota').val();
const tipoMascota = $('#tipoMascota').val();
const fechaNacimiento = $('#fechaNacimiento').val();
const raza = $('#raza').val();
const registroService = new Services();

       if (email.trim().trim().length === 0) {
            alert("Debe ingresar un Correo Electronico");
         }

        if (email.trim().indexOf('@', 0) == -1 || email.trim().indexOf('.', 0) == -1) {
            alert('El correo electrónico introducido no es correcto.');
            return false;
        }

        if (nombre.trim().length === 0) {
            alert("Debe ingresar un Nombre");
        }
        if (apellido.trim().length === 0) {
            alert("Debe ingresar un Apellido");
        }

        if (telefono.trim().length === 0) {
            alert("Debe ingresar un Telefono");
        }
       
        if (password.trim().length===0)
        {
           alert("Debe ingresar una Contraseña ");
        }

        if ($("#validatePassword").val().trim().length===0)
        {
           alert("Debe ingresar la misma Contraseña ");

        }
        if (password.trim() != $("#validatePassword").val().trim() )
        {
            alert("Contraseñas No coinciden ");
         }

        if (nombreMascota.trim().length === 0) { // validacion datos mascota
            alert("Debe ingresar un Nombre de la Mascota");
        }
        if (tipoMascota.trim().length === 0) {
            alert("Debe ingresar tipo de Mascota");
        }

        if (raza.trim().length === 0) {
            alert("Debe ingresar raza de la mascota");
        } 
    
        registroService.registro("100", email, nombre, apellido, password, telefono, nombreMascota, tipoMascota, fechaNacimiento, raza); 
      
    });

});


