
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect
  const header = document.querySelector('.header');
  const toggleMenu = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.nav');

  // Add scroll event to change header style
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (toggleMenu && mobileMenu) {
    toggleMenu.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      toggleMenu.classList.toggle('active');
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
        
        // Update active nav link
        document.querySelectorAll('.nav a').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
        
        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          toggleMenu.classList.remove('active');
        }
      }
    });
  });

  // Animate elements when they come into view
  const animateElements = document.querySelectorAll('.team-card, .project-card, .platform-card, .feature, .info-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(element => {
    observer.observe(element);
  });

  // Set active nav item based on scroll position
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', function() {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = '#' + section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === current) {
        link.classList.add('active');
      }
    });
  });
});
