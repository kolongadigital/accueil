// Chargement des composants
function loadComponents() {
    // Charger le header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            initHeader();
        })
        .catch(error => console.error('Erreur chargement header:', error));

    // Charger le footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
            initFooter();
        })
        .catch(error => console.error('Erreur chargement footer:', error));
}

// Initialiser le header après chargement
function initHeader() {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Header scroll effect avec parallaxe
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Effet de réduction du header au scroll
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
            
            // Effet de disparition/apparition au scroll
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        } else {
            header.classList.remove('scrolled');
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Mobile menu toggle amélioré
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = nav.classList.contains('nav-expanded');
            
            if (isExpanded) {
                // Fermer le menu avec animation
                nav.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    nav.classList.remove('nav-expanded');
                    mobileMenuBtn.classList.remove('active');
                }, 300);
            } else {
                // Ouvrir le menu avec animation
                nav.classList.add('nav-expanded');
                mobileMenuBtn.classList.add('active');
                setTimeout(() => {
                    nav.style.transform = 'translateX(0)';
                }, 10);
            }
        });

        // Fermer le menu en cliquant sur un lien
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    nav.classList.remove('nav-expanded');
                    mobileMenuBtn.classList.remove('active');
                }, 300);
            });
        });

        // Fermer le menu en cliquant à l'extérieur
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('nav-expanded') && 
                !nav.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)) {
                nav.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    nav.classList.remove('nav-expanded');
                    mobileMenuBtn.classList.remove('active');
                }, 300);
            }
        });
    }

    // Animation des liens de navigation au survol
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialiser le footer après chargement
function initFooter() {
    // Update year in footer
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
        const currentYear = new Date().getFullYear();
        footerBottom.innerHTML = `&copy; ${currentYear} Kolonga Digital Africa. Tous droits réservés.`;
    }

    // Newsletter form submission avec feedback visuel
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const submitBtn = this.querySelector('button[type="submit"]');
            const email = emailInput.value;
            
            // Validation améliorée
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email && emailRegex.test(email)) {
                // Animation de succès
                submitBtn.innerHTML = '<i class="fas fa-check"></i>';
                submitBtn.style.backgroundColor = '#28a745';
                
                // Message temporaire
                const originalText = submitBtn.innerHTML;
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.backgroundColor = '';
                    this.reset();
                }, 2000);
                
                // Simuler l'envoi (remplacer par votre API)
                console.log('Email inscrit:', email);
            } else {
                // Animation d'erreur
                emailInput.style.borderColor = '#dc3545';
                setTimeout(() => {
                    emailInput.style.borderColor = '';
                }, 2000);
            }
        });
    }

    // Animation des icônes sociales
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(5deg)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0)';
        });
    });
}

// Fade-in animation on scroll améliorée
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = function() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.classList.add('visible');
        }
    });
};

// Counter animation for stats améliorée
const animateCounters = function() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // 2 secondes
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
                
                // Ajouter un effet de pulse à la fin
                counter.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    counter.style.transform = 'scale(1)';
                }, 300);
            }
        };
        
        updateCounter();
    });
};

// Observer pour les animations
const observerOptions = {
    root: null,
    threshold: 0.3,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stats')) {
                animateCounters();
            }
            
            // Animation spécifique pour chaque section
            entry.target.classList.add('section-visible');
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer toutes les sections principales
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Hero Slider Functionality améliorée
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.slider-prev');
        this.nextBtn = document.querySelector('.slider-next');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.slideDuration = 6000; // Augmenté à 6 secondes
        this.isAnimating = false;
        
        if (this.slides.length > 0) {
            this.init();
        }
    }
    
    init() {
        // Précharger les images pour un défilement plus fluide
        this.preloadImages();
        
        this.startSlideShow();
        this.addEventListeners();
        this.addSlideProgress();
    }
    
    preloadImages() {
        this.slides.forEach(slide => {
            const bgImage = slide.style.backgroundImage;
            if (bgImage) {
                const img = new Image();
                img.src = bgImage.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
            }
        });
    }
    
    addEventListeners() {
        // Navigation
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.navigate('prev'));
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.navigate('next'));
        }
        
        // Navigation par dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Navigation au clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.navigate('prev');
            if (e.key === 'ArrowRight') this.navigate('next');
        });
        
        // Pause au survol
        const slider = document.querySelector('.hero-slider');
        if (slider) {
            slider.addEventListener('mouseenter', () => this.pauseSlideShow());
            slider.addEventListener('mouseleave', () => this.startSlideShow());
            
            // Swipe sur mobile
            this.addSwipeSupport(slider);
        }
    }
    
    addSwipeSupport(slider) {
        let startX = 0;
        let endX = 0;
        
        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        slider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }
    
    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.navigate('next');
            } else {
                this.navigate('prev');
            }
        }
    }
    
    navigate(direction) {
        if (this.isAnimating) return;
        
        this.pauseSlideShow();
        
        if (direction === 'next') {
            this.nextSlide();
        } else {
            this.prevSlide();
        }
        
        this.startSlideShow();
    }
    
    startSlideShow() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, this.slideDuration);
        
        this.startProgressAnimation();
    }
    
    pauseSlideShow() {
        clearInterval(this.slideInterval);
        this.pauseProgressAnimation();
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
        if (this.isAnimating || index === this.currentSlide) return;
        
        this.pauseSlideShow();
        this.currentSlide = index;
        this.updateSlides();
        this.startSlideShow();
    }
    
    updateSlides() {
        this.isAnimating = true;
        
        // Animation de transition
        this.slides.forEach((slide, index) => {
            slide.style.transition = 'opacity 0.8s ease-in-out';
            slide.classList.toggle('active', index === this.currentSlide);
        });
        
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
        
        // Réinitialiser et redémarrer la barre de progression
        this.resetProgressAnimation();
        this.startProgressAnimation();
        
        // Animation du texte
        const currentSlideText = this.slides[this.currentSlide].querySelector('.hero-text');
        if (currentSlideText) {
            currentSlideText.style.animation = 'none';
            setTimeout(() => {
                currentSlideText.style.animation = 'slideInUp 0.8s ease-out';
            }, 10);
        }
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 800);
    }
    
    addSlideProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'slide-progress';
        progressBar.innerHTML = '<div class="slide-progress-bar"></div>';
        document.querySelector('.slider-controls').appendChild(progressBar);
    }
    
    startProgressAnimation() {
        const progressBar = document.querySelector('.slide-progress-bar');
        if (progressBar) {
            progressBar.style.animation = `progress ${this.slideDuration}ms linear`;
        }
    }
    
    pauseProgressAnimation() {
        const progressBar = document.querySelector('.slide-progress-bar');
        if (progressBar) {
            progressBar.style.animationPlayState = 'paused';
        }
    }
    
    resetProgressAnimation() {
        const progressBar = document.querySelector('.slide-progress-bar');
        if (progressBar) {
            progressBar.style.animation = 'none';
        }
    }
}

// Smooth scrolling for anchor links amélioré
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Service cards hover effect enhancement
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.03)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        
        // Animation de l'icône
        const icon = this.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '';
        
        // Réinitialiser l'icône
        const icon = this.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0)';
        }
    });
});

// Animation des statistiques au survol
const statItems = document.querySelectorAll('.stat-item');
statItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
        const icon = this.querySelector('.stat-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2)';
            icon.style.color = '#FF9A1F';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        const icon = this.querySelector('.stat-icon');
        if (icon) {
            icon.style.transform = 'scale(1)';
            icon.style.color = '';
        }
    });
});

// Loading animation améliorée
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">
                <img src="images/logo/logo.png" alt="Kolonga Digital Africa">
            </div>
            <div class="loader-spinner"></div>
        </div>
    `;
    document.body.appendChild(loader);
    
    // Cacher le loader après le chargement
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
}

// Gestion des erreurs de chargement d'images
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'images/placeholder.jpg';
            this.alt = 'Image non disponible';
        });
    });
}

// Performance optimization - Lazy loading
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Animation au scroll pour les éléments
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => elementObserver.observe(el));
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    showLoadingAnimation();
    loadComponents();
    handleImageErrors();
    initLazyLoading();
    initScrollAnimations();
    
    window.addEventListener('scroll', fadeInOnScroll);
    window.addEventListener('load', fadeInOnScroll);
    
    // Initialiser le slider après un court délai
    setTimeout(() => {
        new HeroSlider();
    }, 500);
});

// Gestion du rechargement de la page
window.addEventListener('beforeunload', function() {
    // Sauvegarder la position de scroll
    sessionStorage.setItem('scrollPosition', window.scrollY);
});

// Restaurer la position de scroll
window.addEventListener('load', function() {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition');
    }
});
