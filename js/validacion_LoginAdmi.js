
$(document).ready(function() {
    $('#loginForm').submit(function(event) {
      event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
      const username = $("#usermail").val();
      const password = $('#password').val();
      
      if (username === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      login(username, password); // Llamada a la API para autenticar el inicio de sesión
    });
  });
  
  function login(username, password) {
    // Solicitud a la API para autenticar el inicio de sesión
    fetch(`http://localhost:8080/Registro?email=${username}&contrasena=${password}`, {
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
         console.log(datos);
         if (dato.administrador == 1){
             window.location.href = "admi.html";
             window.location.replace('admi.html');  
         } else {
            alert ("Usted no es administrador");
         }
        }
    });

      function login(username, password) {
    // Solicitud a la API para autenticar el inicio de sesión
    fetch(`http://localhost:8080/Registro?email=${username}&contrasena=${password}`, {
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
         console.log(datos);
         if (dato.administrador == 1){
             window.location.href = "admi.html";
             window.location.replace('admi.html');  
         } else {
            alert ("Usted no es administrador");
         }
        }
    });
  } 
  