fetch('/api/usuarios')
.then(response => response.json())
.then(usuarios => {
  // Recorre los usuarios y agrega filas a la tabla
  const table = document.getElementById('usuarios-table');
  usuarios.forEach(usuario => {
    const row = table.insertRow();
    row.insertCell().textContent = usuario.id;
    row.insertCell().textContent = usuario.nombre;
    row.insertCell().textContent = usuario.email;
  });
})
.catch(error => {
  console.error('Error al obtener los usuarios:', error);
});