// ===========================
// Navigation Scroll Effect
// ===========================
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow when scrolled
  if (currentScroll > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ===========================
// Mobile Menu Toggle
// ===========================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    
    // Toggle body scroll
    document.body.classList.toggle('menu-open');
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// ===========================
// Smooth Scrolling for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const navHeight = nav.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===========================
// Intersection Observer for Fade-in Animations
// ===========================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll(
  '.research-card, .publication-card, .timeline-item, .education-card, .skill-category, .contact-card'
);

animatedElements.forEach(el => {
  observer.observe(el);
});

// ===========================
// Active Navigation Link Highlighting
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollPos = window.pageYOffset + nav.offsetHeight + 100;
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinksArray.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===========================
// Copy Email to Clipboard (Optional Enhancement)
// ===========================
const emailLink = document.querySelector('a[href^="mailto:"]');

if (emailLink) {
  emailLink.addEventListener('click', (e) => {
    const email = emailLink.href.replace('mailto:', '');
    
    // Try to copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        // Create a temporary tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Email copied to clipboard!';
        tooltip.style.cssText = `
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #10b981;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          z-index: 10000;
          animation: slideDown 0.3s ease-out;
        `;
        
        document.body.appendChild(tooltip);
        
        setTimeout(() => {
          tooltip.style.animation = 'slideUp 0.3s ease-out';
          setTimeout(() => tooltip.remove(), 300);
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy email:', err);
      });
    }
  });
}

// ===========================
// Add Animation Keyframes Dynamically
// ===========================
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
  }
  
  @media (max-width: 768px) {
    .nav-links {
      display: none;
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background: white;
      flex-direction: column;
      padding: 2rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      gap: 1.5rem;
      z-index: 999;
    }
    
    .nav-links.active {
      display: flex;
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
      opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
    
    body.menu-open {
      overflow: hidden;
    }
  }
  
  .nav-links a.active {
    color: var(--primary-color);
  }
  
  .nav-links a.active::after {
    width: 100%;
  }
`;
document.head.appendChild(style);

// ===========================
// Performance: Lazy Load Images (if you add any)
// ===========================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===========================
// Console Easter Egg
// ===========================
console.log(
  '%cHello, fellow developer! 👋',
  'font-size: 20px; font-weight: bold; color: #2563eb;'
);
console.log(
  '%cInterested in LLM reliability, uncertainty quantification, or sequential inference? Let\'s chat!',
  'font-size: 14px; color: #475569;'
);
console.log(
  '%cEmail: ericmodesitt89@gmail.com',
  'font-size: 14px; color: #2563eb; font-weight: bold;'
);

// ===========================
// Page Load Animation
// ===========================
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease-in';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// ===========================
// Prevent FOUC (Flash of Unstyled Content)
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.visibility = 'visible';
});

