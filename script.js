
document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  const navLinks = document.querySelectorAll('.nav-link');

  // Add animation classes on load
  document.querySelectorAll('.hero-content > *').forEach((element, index) => {
    element.classList.add('fade-in');
    element.classList.add(`delay-${index}`);
  });

  // Scroll event for header
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMobile.classList.toggle('active');
  });

  // Close mobile menu when clicking a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navMobile.classList.remove('active');
      
      // Update active link
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Set active nav link based on scroll position
  function setActiveNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Initial set of active nav
  setActiveNavOnScroll();
  
  // Update active nav on scroll
  window.addEventListener('scroll', setActiveNavOnScroll);

  // Animate elements on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.team-card, .project-card, .platform-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('fade-in');
      }
    });
  };

  // Run animation on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Initial animation check
  animateOnScroll();
});
