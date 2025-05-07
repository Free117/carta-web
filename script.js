document.addEventListener('DOMContentLoaded', function() {
  const btnEmpezar = document.getElementById('btn-empezar');
  const inicio = document.getElementById('inicio');
  const contenidoPrincipal = document.getElementById('contenido-principal');
  const sobreCerrado = document.getElementById('sobre-cerrado');
  const sobreAbierto = document.getElementById('sobre-abierto');
  
  // Crear corazones flotantes
  function crearCorazones() {
    const corazonesContainer = document.querySelector('.corazones');
    for (let i = 0; i < 20; i++) {
      const corazon = document.createElement('div');
      corazon.className = 'corazon';
      corazon.innerHTML = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍'][Math.floor(Math.random() * 9)];
      corazon.style.left = Math.random() * 100 + 'vw';
      corazon.style.animationDuration = (Math.random() * 10 + 5) + 's';
      corazon.style.animationDelay = Math.random() * 5 + 's';
      corazon.style.fontSize = (Math.random() * 1 + 1.5) + 'em';
      corazonesContainer.appendChild(corazon);
    }
  }
  
  // Iniciar experiencia
  btnEmpezar.addEventListener('click', function() {
    this.classList.add('animate__animated', 'animate__heartBeat');
    
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
  
  // Abrir sobre
  sobreCerrado.addEventListener('click', function() {
    this.classList.add('animate__animated', 'animate__hinge');
    
    setTimeout(() => {
      this.classList.add('oculto');
      sobreAbierto.classList.remove('oculto');
      sobreAbierto.classList.add('animate__animated', 'animate__zoomIn');
    }, 1500);
  });
  
  // Efectos hover
  btnEmpezar.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1) rotate(-5deg)';
  });
  
  btnEmpezar.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
  });
});
