// ===========================
// Mobile Navigation Toggle
// ===========================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===========================
// Smooth Scroll for Navigation
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Navbar Background on Scroll
// ===========================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ===========================
// Scroll Reveal Animation
// ===========================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation class to sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealOnScroll.observe(section);
});

// Add revealed class styles
const style = document.createElement('style');
style.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===========================
// Skill Cards Stagger Animation
// ===========================
const skillCards = document.querySelectorAll('.skill-category');
skillCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// ===========================
// Project Cards Hover Effect
// ===========================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.querySelector('.project-placeholder')?.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.1)' }
        ], {
            duration: 300,
            fill: 'forwards',
            easing: 'ease-out'
        });
    });

    card.addEventListener('mouseleave', function () {
        this.querySelector('.project-placeholder')?.animate([
            { transform: 'scale(1.1)' },
            { transform: 'scale(1)' }
        ], {
            duration: 300,
            fill: 'forwards',
            easing: 'ease-out'
        });
    });
});

// ===========================
// Typing Effect for Code Window
// ===========================
const codeContent = document.querySelector('.code-content code');
if (codeContent) {
    const originalContent = codeContent.innerHTML;

    // Optional: Add more animated typing effect
    // This is a placeholder for more complex animation
}

// ===========================
// Form Handling
// ===========================
const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Show success animation
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalContent = submitBtn.innerHTML;

    submitBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 6L9 17l-5-5"/>
        </svg>
        <span>Надіслано!</span>
    `;
    submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)';

    // Reset form
    this.reset();

    // Restore button after delay
    setTimeout(() => {
        submitBtn.innerHTML = originalContent;
        submitBtn.style.background = '';
    }, 3000);

    // Here you would typically send the data to a server
    console.log('Form submitted:', { name, email, message });
});

// ===========================
// Active Navigation Link
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Active link style
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-link.active {
        color: var(--accent-secondary) !important;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(activeStyle);

// ===========================
// Parallax Effect for Background Glows
// ===========================
document.addEventListener('mousemove', (e) => {
    const glows = document.querySelectorAll('.bg-glow');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    glows.forEach((glow, index) => {
        const speed = (index + 1) * 20;
        const xPos = (x - 0.5) * speed;
        const yPos = (y - 0.5) * speed;

        glow.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// ===========================
// Update Footer Year
// ===========================
const footerYear = document.querySelector('.footer-year');
if (footerYear) {
    footerYear.textContent = `© ${new Date().getFullYear()}`;
}

// ===========================
// Console Easter Egg
// ===========================
console.log(`
%c ╔═══════════════════════════════════════════════╗
 ║                                               ║
 ║   👋 Привіт! Цікаво заглянути під капот?      ║
 ║                                               ║
 ║   🔒 Cybersecurity & Data Analysis            ║
 ║   💻 github.com/Nailuy                        ║
 ║   🐦 x.com/yulianvakh                         ║
 ║                                               ║
 ╚═══════════════════════════════════════════════╝
`, 'color: #8b5cf6; font-family: monospace; font-size: 12px;');
