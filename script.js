
// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.technology-card, .platform-card, .feature-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
      }
    });
  }, { threshold: 0.1 });
  
  animateElements.forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
