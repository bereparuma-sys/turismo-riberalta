document.addEventListener('DOMContentLoaded', () => {
  fetch('./datos.json')
    .then(response => {
      if (!response.ok) throw new Error('Error al cargar JSON');
      return response.json();
    })
    .then(data => {
      if (data.lugares) mostrarLugares(data.lugares);
      if (data.hoteles) mostrarHoteles(data.hoteles);
    })
    .catch(error => console.error('Error:', error));
});

function mostrarLugares(lugares) {
  const contenedor = document.getElementById('lugares-container') || document.querySelector('#lugares');
  if (!contenedor) return;
  
  contenedor.innerHTML = lugares.map(lugar => `
    <div class="tarjeta">
      <h3>${lugar.nombre}</h3>
      <p>${lugar.descripcion}</p>
    </div>
  `).join('');
}

function mostrarHoteles(hoteles) {
  const contenedor = document.getElementById('hoteles-container') || document.querySelector('#hoteles');
  if (!contenedor) return;

  contenedor.innerHTML = hoteles.map(hotel => `
    <div class="tarjeta">
      <h3>${hotel.nombre}</h3>
      <p>${hotel.descripcion}</p>
    </div>
  `).join('');
}