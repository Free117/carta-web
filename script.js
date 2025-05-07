document.addEventListener('DOMContentLoaded', function() {
  const btnEmpezar = document.getElementById('btn-empezar');
  const inicio = document.getElementById('inicio');
  const contenidoPrincipal = document.getElementById('contenido-principal');
  const sobreCerrado = document.getElementById('sobre-cerrado');
  const sobreAbierto = document.getElementById('sobre-abierto');
  
  // Crear flores flotantes
  function crearFlores() {
    const floresContainer = document.querySelector('.flores');
    for (let i = 0; i < 15; i++) {
      const flor = document.createElement('div');
      flor.className = 'flor';
      flor.innerHTML = ['🌹', '🌸', '🌷', '💐', '🌺'][Math.floor(Math.random() * 5)];
      flor.style.left = Math.random() * 100 + 'vw';
      flor.style.animationDuration = (Math.random() * 10 + 5) + 's';
      flor.style.animationDelay = Math.random() * 5 + 's';
      floresContainer.appendChild(flor);
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
          contenidoPrincipal.style.opacity = '1';
          crearFlores();
        }, 100);
      }, 500);
    }, 1000);
  });
  
  // Abrir sobre
  sobreCerrado.addEventListener('click', function() {
    this.classList.add('animate__animated', 'animate__flipOutY');
    
    setTimeout(() => {
      this.classList.add('oculto');
      sobreAbierto.classList.remove('oculto');
      sobreAbierto.classList.add('animate__animated', 'animate__fadeIn');
    }, 500);
  });
  
  // Efecto al pasar el mouse sobre el botón de inicio
  btnEmpezar.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
  });
  
  btnEmpezar.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
});
