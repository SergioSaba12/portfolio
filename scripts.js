// Animación de timeline cuando se hace scroll
window.addEventListener('scroll', function() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight) {
      item.classList.add('visible');
    }
  });
});
