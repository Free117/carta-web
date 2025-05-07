document.addEventListener('DOMContentLoaded', function() {
  const btnEmpezar = document.getElementById('btn-empezar');
  const inicio = document.getElementById('inicio');
  const contenidoPrincipal = document.getElementById('contenido-principal');
  const sobreCerrado = document.getElementById('sobre-cerrado');
  const sobreAbierto = document.getElementById('sobre-abierto');
  const contenedorImagen = document.getElementById('contenedor-imagen');
  const botonDescarga = document.getElementById('boton-descarga');
  
  // Iniciar experiencia
  btnEmpezar.addEventListener('click', function() {
    this.classList.add('animate__animated', 'animate__pulse');
    
    setTimeout(() => {
      inicio.style.opacity = '0';
      setTimeout(() => {
        inicio.style.display = 'none';
        contenidoPrincipal.style.display = 'block';
        contenidoPrincipal.classList.add('animate__animated', 'animate__fadeIn');
      }, 800);
    }, 500);
  });
  
  // Abrir sobre y mostrar imagen
  sobreCerrado.addEventListener('click', function() {
    this.classList.add('animate__animated', 'animate__zoomOut');
    
    setTimeout(() => {
      this.classList.add('oculto');
      sobreAbierto.classList.remove('oculto');
      sobreAbierto.classList.add('animate__animated', 'animate__zoomIn');
      
      // Crear y mostrar la imagen después de 1 segundo
      setTimeout(() => {
        const img = document.createElement('img');
        img.src = 'imagen.png';
        img.alt = 'Carta de amor';
        img.classList.add('animate__animated', 'animate__fadeIn');
        contenedorImagen.appendChild(img);
        contenedorImagen.style.display = 'block';
        
        // Configurar botón de descarga
        botonDescarga.href = 'imagen.png';
        botonDescarga.download = 'carta_de_amor.png';
        
        // Mostrar botón de descarga con animación
        setTimeout(() => {
          botonDescarga.classList.remove('oculto');
          botonDescarga.classList.add('mostrar');
        }, 500);
      }, 1000);
    }, 500);
  });
  
  // Efectos hover
  btnEmpezar.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
  });
  
  btnEmpezar.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
});
