// Chargement des composants
function loadComponents() {
    // Charger le header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            initHeader();
        });

    // Charger le footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
            initFooter();
        });
}

// Initialiser le header après chargement
function initHeader() {
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}

// Initialiser le footer après chargement
function initFooter() {
    // Update year in footer
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
        footerBottom.innerHTML = `&copy; ${new Date().getFullYear()} Kolonga Digital Africa. Tous droits réservés.`;
    }

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email && email.includes('@')) {
                alert('Merci pour votre inscription à notre newsletter !');
                this.reset();
            } else {
                alert('Veuillez entrer une adresse email valide.');
            }
        });
    }
}

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = function() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

// Counter animation for stats
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const animateCounters = function() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
};

// Start counter animation when stats section is in view
const statsSection = document.querySelector('.stats');
const observerOptions = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

if (statsSection) {
    observer.observe(statsSection);
}

// Hero Slider Functionality
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.slider-prev');
        this.nextBtn = document.querySelector('.slider-next');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.slideDuration = 5000;
        
        if (this.slides.length > 0) {
            this.init();
        }
    }
    
    init() {
        this.startSlideShow();
        
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.pauseSlideShow();
                this.prevSlide();
                this.startSlideShow();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.pauseSlideShow();
                this.nextSlide();
                this.startSlideShow();
            });
        }
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.pauseSlideShow();
                this.goToSlide(index);
                this.startSlideShow();
            });
        });
        
        const slider = document.querySelector('.hero-slider');
        if (slider) {
            slider.addEventListener('mouseenter', () => this.pauseSlideShow());
            slider.addEventListener('mouseleave', () => this.startSlideShow());
        }
    }
    
    startSlideShow() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, this.slideDuration);
    }
    
    pauseSlideShow() {
        clearInterval(this.slideInterval);
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlides();
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlides();
    }
    
    updateSlides() {
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });
        
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
        
        const currentSlideText = this.slides[this.currentSlide].querySelector('.fade-in');
        if (currentSlideText && !currentSlideText.classList.contains('visible')) {
            currentSlideText.classList.add('visible');
        }
    }
}

// Smooth scrolling for anchor links
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

// Service cards hover effect enhancement
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
    window.addEventListener('scroll', fadeInOnScroll);
    window.addEventListener('load', fadeInOnScroll);
    new HeroSlider();
});