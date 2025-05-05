// Espera 60 segundos (60000 ms) y luego reemplaza la carta con un mensaje
setTimeout(() => {
  const carta = document.getElementById('carta');
  const mensaje = document.getElementById('mensaje');
  
  carta.style.display = 'none';
  mensaje.classList.remove('oculto');
}, 60000); // 60,000 ms = 60 segundos
