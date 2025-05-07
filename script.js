document.addEventListener('DOMContentLoaded', function() {
  const btnComenzar = document.getElementById('btn-comenzar');
  const pantallaInicial = document.getElementById('pantalla-inicial');
  const contenedorCarta = document.getElementById('contenedor-carta');
  const sobre = document.getElementById('sobre');
  const carta = document.getElementById('carta');

  // Paso 1: Mostrar el sobre
  btnComenzar.addEventListener('click', function() {
    pantallaInicial.style.opacity = '0';
    setTimeout(() => {
      pantallaInicial.style.display = 'none';
      contenedorCarta.style.display = 'block';
      setTimeout(() => {
        contenedorCarta.style.opacity = '1';
      }, 50);
    }, 500);
  });

  // Paso 2: Mostrar la carta
  sobre.addEventListener('click', function() {
    sobre.style.opacity = '0';
    setTimeout(() => {
      sobre.style.display = 'none';
      carta.style.display = 'block';
      setTimeout(() => {
        carta.style.opacity = '1';
      }, 50);
    }, 500);
  });
});
