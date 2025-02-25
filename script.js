let currentIndex = 0;

function moveSlide() {
  const images = document.querySelectorAll('.carousel-image');
  const totalImages = images.length;
  currentIndex = (currentIndex + 1) % totalImages; 
  const offset = -currentIndex * 100;

  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Autoplay: navega automaticamente a cada 3 segundos
setInterval(moveSlide, 2500); // 3000 milissegundos = 3 segundos