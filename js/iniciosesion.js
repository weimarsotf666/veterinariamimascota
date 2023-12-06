document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get user input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Simple validation (you may want to enhance this)
    if (username === 'usuario' && password === 'contraseña') {
      // If credentials are correct, redirect or show success message
      alert('Inicio de sesión exitoso');
      // Redirect to another page: window.location.href = 'dashboard.html';
    } else {
      // If credentials are incorrect, show error message
      var errorMessage = document.getElementById('error-message');
      errorMessage.textContent = 'Credenciales incorrectas. Inténtalo de nuevo.';
    }
  });
  