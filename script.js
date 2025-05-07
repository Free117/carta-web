document.addEventListener('DOMContentLoaded', function() {
  const btnEmpezar = document.getElementById('btn-empezar');
  const inicio = document.getElementById('inicio');
  const contenidoPrincipal = document.getElementById('contenido-principal');
  const sobreCerrado = document.getElementById('sobre-cerrado');
  const sobreAbierto = document.getElementById('sobre-abierto');
  const contenedorCarta = document.getElementById('contenedor-carta');
  const mensaje = document.getElementById('mensaje');
  
  // Crear corazones flotantes
  function crearCorazones() {
    const corazonesContainer = document.querySelector('.corazones');
    for (let i = 0; i < 25; i++) {
      const corazon = document.createElement('div');
      corazon.className = 'corazon';
      corazon.innerHTML = ['❤️', '💖', '💗', '💘', '💓'][Math.floor(Math.random() * 5)];
      corazon.style.left = Math.random() * 100 + 'vw';
      corazon.style.animationDuration = (Math.random() * 10 + 5) + 's';
      corazon.style.animationDelay = Math.random() * 5 + 's';
      corazon.style.fontSize = (Math.random() * 1 + 1.5) + 'em';
      corazonesContainer.appendChild(corazon);
    }
  }
  
  // Iniciar experiencia
  btnEmpezar.addEventListener('click', function() {
    this.classList.add('animate__animated', 'animate__pulse');
    
    setTimeout(() => {
      inicio.style.opacity = '0';
      setTimeout(() => {
        inicio.style.display = 'none';
        contenidoPrincipal.style.display = 'block';
        setTimeout(() => {
          contenidoPrincipal.classList.add('animate__animated', 'animate__fadeIn');
          crearCorazones();
        }, 100);
      }, 800);
    }, 500);
  });
  
  // Abrir sobre y revelar carta
  sobreCerrado.addEventListener('click', function() {
    this.classList.add('animate__animated', 'animate__zoomOut');
    
    setTimeout(() => {
      this.classList.add('oculto');
      sobreAbierto.classList.remove('oculto');
      sobreAbierto.classList.add('animate__animated', 'animate__zoomIn');
      
      // Crear la imagen dinámicamente después de 1 segundo
      setTimeout(() => {
        const img = document.createElement('img');
        img.src = 'imagen.png';
        img.alt = 'Carta de amor';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '8px';
        contenedorCarta.appendChild(img);
        
        // Mostrar con animación
        setTimeout(() => {
          contenedorCarta.classList.remove('oculto');
          contenedorCarta.classList.add('mostrar');
          
          // Mostrar mensaje después
          setTimeout(() => {
            mensaje.classList.remove('oculto');
            mensaje.classList.add('mostrar');
          }, 500);
        }, 300);
      }, 1000);
    }, 500);
  });
  
  // Efecto hover en el botón
  btnEmpezar.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1) rotate(-3deg)';
  });
  
  btnEmpezar.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
  });
});
