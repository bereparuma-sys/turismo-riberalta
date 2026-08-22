// Ejemplo de cómo debe quedar tu función de carga:
fetch('./datos.json')
  .then(response => response.json())
  .then(data => {
    // Renderiza tus lugares
    mostrarLugares(data.lugares);
    // Renderiza tus hoteles
    mostrarHoteles(data.hoteles);
  })
  .catch(error => console.error('Error al cargar los datos:', error));