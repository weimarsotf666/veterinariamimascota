
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
       var registro = JSON.stringify(dato);
      localStorage.setItem("dato", dato.id_Registro);
       window.location.href = "agenda_horas.html";
       window.location.replace('agenda_horas.html');  
      }
  });
 
}



