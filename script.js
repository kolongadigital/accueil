/* script.js - Kolonga Digital Africa
   Version: 2.3.0
   Objectifs:
   - Menu mobile déroulant avec overlay et blocage du scroll
   - Loader optimisé
   - Chargement header/footer avec cache
   - Lazy loading, IntersectionObserver animations
   - Hero slider et animations de pages
   - Système d'animations partagées entre pages
   - Accessibilité (ARIA), performance, UX
   - Pages Réalisations et Contact intégrées
*/

/* ===========================
   Configuration & Helpers
   =========================== */
const CONFIG = {
    slideDuration: 6000,
    throttleDelay: 100,
    loaderMinMs: 800,
    headerCacheKey: 'kolonga_header_html_v1',
    footerCacheKey: 'kolonga_footer_html_v1',
};

// Utility functions
const qs = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => Array.from((ctx || document).querySelectorAll(sel));
const safeSetHTML = (el, html) => { if (el) el.innerHTML = html; };

/* ===========================
   Utility: Throttle & Debounce
   =========================== */
function throttle(fn, wait = 100) {
    let last = 0;
    let timeout = null;
    return function (...args) {
        const now = Date.now();
        const remaining = wait - (now - last);
        if (remaining <= 0) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            last = now;
            fn.apply(this, args);
        } else if (!timeout) {
            timeout = setTimeout(() => {
                last = Date.now();
                timeout = null;
                fn.apply(this, args);
            }, remaining);
        }
    };
}

function debounce(fn, wait = 100) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), wait);
    };
}

/* ===========================
   Loader System
   =========================== */
function showLoader() {
    if (qs('.page-loader')) return;
    
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.setAttribute('role', 'status');
    loader.setAttribute('aria-live', 'polite');
    loader.innerHTML = `
        <div class="loader-content" aria-hidden="false">
            <div class="loader-logo">
                <img src="images/logo/logo.png" alt="Kolonga Digital Africa" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="loader-spinner" aria-hidden="true"></div>
        </div>
    `;
    
    document.documentElement.style.overflow = 'hidden';
    document.body.appendChild(loader);

    const start = Date.now();
    window.addEventListener('load', () => {
        const elapsed = Date.now() - start;
        const remaining = Math.max(0, CONFIG.loaderMinMs - elapsed);
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
                document.documentElement.style.overflow = '';
            }, 400);
        }, remaining);
    });
}

/* ===========================
   Components Loading with Cache
   =========================== */
async function fetchWithCache(url, cacheKey) {
    try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) return cached;
    } catch (e) {
        // localStorage could be disabled
    }

    const resp = await fetch(url, { cache: 'no-store' });
    if (!resp.ok) throw new Error(`Fetch failed: ${url}`);
    const text = await resp.text();
    try {
        localStorage.setItem(cacheKey, text);
    } catch (e) {
        // ignore storage errors
    }
    return text;
}

function loadComponents() {
    // Header
    const headerContainer = qs('#header-container') || qs('#header') || null;
    if (headerContainer) {
        fetchWithCache('components/header.html', CONFIG.headerCacheKey)
            .then(html => {
                safeSetHTML(headerContainer, html);
                const loadedHeader = headerContainer.querySelector('header') || headerContainer;
                if (!loadedHeader.id && headerContainer.id === 'header-container') {
                    loadedHeader.id = 'header';
                }
                initHeader();
            })
            .catch(err => {
                console.error('Erreur chargement header:', err);
                initHeader();
            });
    } else {
        initHeader();
    }

    // Footer
    const footerContainer = qs('#footer-container') || qs('footer') || null;
    if (footerContainer) {
        fetchWithCache('components/footer.html', CONFIG.footerCacheKey)
            .then(html => {
                safeSetHTML(footerContainer, html);
                initFooter();
            })
            .catch(err => {
                console.error('Erreur chargement footer:', err);
                initFooter();
            });
    } else {
        initFooter();
    }
}

/* ===========================
   Header & Mobile Menu
   =========================== */
function initHeader() {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Scroll effect for header
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', throttle(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
            header.classList.add('scrolled');
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
    }));

    // Create overlay for mobile
    let overlay = document.getElementById('menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'menu-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease;
            z-index: 98;
        `;
        document.body.appendChild(overlay);
    }

    // Menu mode management
    function updateMenuMode() {
        const isMobile = window.innerWidth < 992;

        if (isMobile) {
            nav.style.display = 'none';
            nav.classList.remove('nav-expanded');
            mobileMenuBtn.style.display = 'block';
        } else {
            nav.style.display = 'flex';
            overlay.style.visibility = 'hidden';
            overlay.style.opacity = '0';
            document.body.style.overflow = '';
            mobileMenuBtn.classList.remove('active');
        }
    }

    // Mobile menu toggle
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = nav.classList.contains('nav-expanded');
            const isMobile = window.innerWidth < 992;

            if (!isMobile) return;

            if (isExpanded) {
                // Close menu
                nav.style.maxHeight = '0';
                nav.style.opacity = '0';
                overlay.style.opacity = '0';
                overlay.style.visibility = 'hidden';
                document.body.style.overflow = '';
                setTimeout(() => {
                    nav.style.display = 'none';
                    nav.classList.remove('nav-expanded');
                    mobileMenuBtn.classList.remove('active');
                }, 300);
            } else {
                // Open menu
                nav.style.display = 'block';
                nav.classList.add('nav-expanded');
                mobileMenuBtn.classList.add('active');
                nav.style.maxHeight = nav.scrollHeight + 'px';
                nav.style.opacity = '1';
                nav.style.transition = 'max-height 0.4s ease, opacity 0.4s ease';
                overlay.style.visibility = 'visible';
                overlay.style.opacity = '1';
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Close mobile menu
    function closeMobileMenu() {
        if (nav.classList.contains('nav-expanded')) {
            nav.style.maxHeight = '0';
            nav.style.opacity = '0';
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            document.body.style.overflow = '';
            setTimeout(() => {
                nav.style.display = 'none';
                nav.classList.remove('nav-expanded');
                mobileMenuBtn.classList.remove('active');
            }, 300);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    overlay.addEventListener('click', closeMobileMenu);

    window.addEventListener('resize', updateMenuMode);
    updateMenuMode();

    // Nav links hover effects
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/* ===========================
   Footer Initialization
   =========================== */
function initFooter() {
    // Update year
    const footerBottomP = qs('.footer-bottom p') || qs('footer .footer-bottom p');
    if (footerBottomP) {
        const currentYear = new Date().getFullYear();
        footerBottomP.innerHTML = `&copy; ${currentYear} Kolonga Digital Africa. Tous droits réservés.`;
    }

    // Newsletter form
    const newsletterForm = qs('.newsletter-form');
    if (newsletterForm) {
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitBtn = newsletterForm.querySelector('button[type="submit"]');

        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!emailInput || !submitBtn) return;
            const email = (emailInput.value || '').trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && emailRegex.test(email)) {
                const original = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>';
                submitBtn.style.backgroundColor = '#28a745';
                
                console.log('Newsletter signup:', email);

                setTimeout(() => {
                    submitBtn.innerHTML = original;
                    submitBtn.style.backgroundColor = '';
                    newsletterForm.reset();
                    
                    const msg = document.createElement('div');
                    msg.className = 'newsletter-msg';
                    msg.textContent = 'Merci — inscription réussie !';
                    msg.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#222;color:#fff;padding:10px 14px;border-radius:8px;z-index:1200;';
                    document.body.appendChild(msg);
                    setTimeout(() => msg.remove(), 2500);
                }, 1000);
            } else {
                emailInput.style.borderColor = '#dc3545';
                emailInput.focus();
                setTimeout(() => {
                    emailInput.style.borderColor = '';
                }, 1600);
            }
        });
    }

    // Social links hover effects
    qsa('.social-links a').forEach(a => {
        a.addEventListener('mouseenter', () => {
            a.style.transform = 'translateY(-5px) rotate(5deg)';
        });
        a.addEventListener('mouseleave', () => {
            a.style.transform = 'translateY(0) rotate(0)';
        });
    });
}

/* ===========================
   Global Animation System
   =========================== */
const globalObserverOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
let globalObserver = null;

function initGlobalObserver() {
    if (globalObserver) return;
    
    globalObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            
            // Add section visible class
            el.classList.add('section-visible');
            
            // Page-specific triggers
            if (el.classList.contains('stats')) {
                runCountersIn(el);
            }
            if (el.classList.contains('expertise')) {
                initChartAnimations();
            }
            if (el.classList.contains('comparison-table')) {
                initComparisonAnimations();
            }
            if (el.classList.contains('projects-stats')) {
                runCountersIn(el);
            }
            if (el.classList.contains('realisations-stats')) {
                runCountersIn(el);
            }
            
            // Animate fade-in children
            qsa('.fade-in', el).forEach((child, idx) => {
                child.style.transitionDelay = (idx * 80) + 'ms';
                child.classList.add('visible');
            });
            
            obs.unobserve(el);
        });
    }, globalObserverOptions);
}

/* ===========================
   Shared Animation Functions
   =========================== */

// Counter animation
function runCountersIn(container) {
    const counters = Array.from(container.querySelectorAll('.stat-number[data-target]'));
    counters.forEach(counter => {
        if (counter.dataset.animated === 'true') return;
        const target = +counter.getAttribute('data-target') || 0;
        const duration = 1400;
        let start = null;
        
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            counter.textContent = Math.floor(progress * target);
            
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                counter.textContent = target;
                counter.style.transition = 'transform .18s ease';
                counter.style.transform = 'scale(1.06)';
                setTimeout(() => counter.style.transform = 'scale(1)', 260);
            }
        };
        
        counter.dataset.animated = 'true';
        requestAnimationFrame(step);
    });
}

// Chart animations
function initChartAnimations() {
    const chartBars = qsa('.chart-fill');
    chartBars.forEach(bar => {
        const width = bar.getAttribute('data-width') + '%';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
}

// Comparison table animations
function initComparisonAnimations() {
    const rows = qsa('.comparison-row');
    rows.forEach((row, index) => {
        setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

// Card hover effects (shared across all pages)
function initCardAnimations() {
    // Service cards
    qsa('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
            const icon = qs('.service-icon', this);
            if (icon) icon.style.transform = 'scale(1.06) rotate(3deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            const icon = qs('.service-icon', this);
            if (icon) icon.style.transform = '';
        });
    });

    // Stat items
    qsa('.stat-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-8px) scale(1.04)';
            const icon = qs('.stat-icon', item);
            if (icon) {
                icon.style.transform = 'scale(1.15)';
                icon.style.color = '#FF9A1F';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            const icon = qs('.stat-icon', item);
            if (icon) {
                icon.style.transform = '';
                icon.style.color = '';
            }
        });
    });

    // Partner logos
    qsa('.partner-logo').forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            const img = qs('img', this);
            if (img) img.style.transform = 'scale(1.1)';
            const icon = qs('i', this);
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.color = 'var(--primary-orange)';
            }
        });
        
        logo.addEventListener('mouseleave', function() {
            const img = qs('img', this);
            if (img) img.style.transform = 'scale(1)';
            const icon = qs('i', this);
            if (icon) {
                icon.style.transform = 'scale(1)';
                icon.style.color = 'var(--primary-blue)';
            }
        });
    });
}

/* ===========================
   Shared Filtering System
   =========================== */
function initFilteringSystem(navBtnClass, cardClass, categoryAttribute = 'data-category') {
    const filterButtons = qsa(navBtnClass);
    const cards = qsa(cardClass);
    
    if (filterButtons.length === 0 || cards.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-category');
            
            // Filter cards
            cards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute(categoryAttribute).includes(filterValue)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ===========================
   Shared Card Enhancements
   =========================== */
function initCardEnhancements(cardClass, badgeClass = null, iconClass = null) {
    const cards = qsa(cardClass);
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (badgeClass) {
                const badge = qs(badgeClass, this);
                if (badge) badge.style.transform = 'scale(1.1) rotate(5deg)';
            }
            
            if (iconClass) {
                const icon = qs(iconClass, this);
                if (icon) icon.style.transform = 'scale(1.1) rotate(10deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (badgeClass) {
                const badge = qs(badgeClass, this);
                if (badge) badge.style.transform = 'scale(1) rotate(0)';
            }
            
            if (iconClass) {
                const icon = qs(iconClass, this);
                if (icon) icon.style.transform = 'scale(1) rotate(0)';
            }
        });
    });
}

/* ===========================
   Page-Specific Initializers
   =========================== */

// About Page
function initAboutPage() {
    // Leader cards
    qsa('.leader-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const overlay = qs('.leader-overlay', this);
            if (overlay) overlay.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            const overlay = qs('.leader-overlay', this);
            if (overlay) overlay.style.opacity = '0';
        });
    });

    // Value cards
    qsa('.value-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = qs('.value-icon', this);
            if (icon) icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = qs('.value-icon', this);
            if (icon) icon.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Mission/Vision cards
    qsa('.mv-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) scale(1)';
        });
    });

    // Scroll indicator
    const scrollIndicator = qs('.hero-scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const missionSection = qs('.mission-vision');
            if (missionSection) {
                const header = qs('#header') || qs('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const top = missionSection.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    }
}

// Offers Page
function initOffersPage() {
    // Use shared filtering system
    initFilteringSystem('.offer-nav-btn', '.offer-card');
    
    // Use shared card enhancements
    initCardEnhancements('.offer-card', '.offer-badge', '.offer-icon');

    // Price animations
    qsa('.offer-price span').forEach(price => {
        price.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.color = 'var(--primary-orange)';
        });
        
        price.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.color = 'var(--primary-blue)';
        });
    });

    // Government features
    qsa('.government-feature').forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            const icon = qs('i', this);
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.color = 'var(--primary-orange)';
            }
        });
        
        feature.addEventListener('mouseleave', function() {
            const icon = qs('i', this);
            if (icon) {
                icon.style.transform = 'scale(1)';
                icon.style.color = 'var(--primary-blue)';
            }
        });
    });

    // Government badge
    const governmentBadge = qs('.government-badge');
    if (governmentBadge) {
        governmentBadge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotate(2deg)';
            this.style.boxShadow = 'var(--shadow-hover)';
        });
        
        governmentBadge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0)';
            this.style.boxShadow = 'var(--card-shadow)';
        });
    }
}

// Projects Page
function initProjectsPage() {
    // Use shared filtering system
    initFilteringSystem('.project-nav-btn', '.project-card');
    
    // Use shared card enhancements
    initCardEnhancements('.project-card', '.project-badge');

    // Project demo buttons
    qsa('.project-demo').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.project-card');
            const title = qs('h3', card).textContent;
            
            // Show demo modal or redirect to demo page
            alert(`Démo demandée pour : ${title}\n\nNotre équipe vous contactera pour planifier une démonstration personnalisée.`);
        });
    });

    // Project info buttons
    qsa('.project-info').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.project-card');
            const title = qs('h3', card).textContent;
            const description = qs('.project-description', card).textContent;
            
            // Show detailed info modal
            alert(`Détails du projet : ${title}\n\n${description}\n\nContactez-nous pour plus d'informations.`);
        });
    });

    // Licensing options hover effects
    qsa('.licensing-option').forEach(option => {
        option.addEventListener('mouseenter', function() {
            const icon = qs('i', this);
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.color = 'var(--primary-orange)';
            }
        });
        
        option.addEventListener('mouseleave', function() {
            const icon = qs('i', this);
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
                icon.style.color = 'var(--primary-blue)';
            }
        });
    });

    // Licensing badge animation
    const licensingBadge = qs('.licensing-badge');
    if (licensingBadge) {
        licensingBadge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotate(2deg)';
            this.style.boxShadow = 'var(--shadow-hover)';
        });
        
        licensingBadge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0)';
            this.style.boxShadow = 'var(--card-shadow)';
        });
    }
}

// Realisations Page
function initRealisationsPage() {
    // Use shared filtering system
    initFilteringSystem('.realisation-nav-btn', '.realisation-card');
    
    // Use shared card enhancements
    initCardEnhancements('.realisation-card', '.realisation-badge');

    // Realisation demo buttons
    qsa('.realisation-demo').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.realisation-card');
            const title = qs('h3', card).textContent;
            
            alert(`Démo demandée pour : ${title}\n\nNous vous partagerons les détails de cette réalisation et comment elle pourrait inspirer votre projet.`);
        });
    });

    // Realisation info buttons
    qsa('.realisation-info').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.realisation-card');
            const title = qs('h3', card).textContent;
            const description = qs('.realisation-description', card).textContent;
            const features = Array.from(qsa('.realisation-feature', card)).map(f => f.textContent.trim()).join('\n• ');
            
            alert(`Détails de la réalisation : ${title}\n\nDescription: ${description}\n\nFonctionnalités:\n• ${features}\n\nContactez-nous pour discuter d'un projet similaire.`);
        });
    });

    // Testimonial cards hover effects
    qsa('.testimonial-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const quote = qs('i', this);
            if (quote) quote.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            const quote = qs('i', this);
            if (quote) quote.style.transform = 'scale(1)';
        });
    });
}

// Contact Page
function initContactPage() {
    // FAQ toggle functionality
    const faqQuestions = qsa('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // Contact method cards hover effects
    qsa('.contact-method').forEach(method => {
        method.addEventListener('mouseenter', function() {
            const icon = qs('.method-icon', this);
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        method.addEventListener('mouseleave', function() {
            const icon = qs('.method-icon', this);
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
            }
        });
    });

    // Form input focus effects
    qsa('.form-group input, .form-group select, .form-group textarea').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });

    // Real-time form validation
    const contactForm = qs('#contactForm');
    if (contactForm) {
        const inputs = qsa('input, textarea', contactForm);
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                validateField(this);
            });
        });

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = qs('#name').value.trim();
            const email = qs('#email').value.trim();
            const message = qs('#message').value.trim();
            
            let isValid = true;
            
            // Reset errors
            qsa('.error-message').forEach(el => el.textContent = '');
            
            if (!name) {
                qs('#nameError').textContent = 'Le nom est obligatoire';
                isValid = false;
            }
            
            if (!email) {
                qs('#emailError').textContent = 'L\'email est obligatoire';
                isValid = false;
            } else if (!isValidEmail(email)) {
                qs('#emailError').textContent = 'Format d\'email invalide';
                isValid = false;
            }
            
            if (!message) {
                qs('#messageError').textContent = 'Le message est obligatoire';
                isValid = false;
            }
            
            if (isValid) {
                // Prepare data for sending
                const formData = {
                    name: name,
                    email: email,
                    phone: qs('#phone').value.trim(),
                    company: qs('#company').value.trim(),
                    service: qs('#service').value,
                    budget: qs('#budget').value,
                    message: message
                };
                
                // Send via email and WhatsApp
                sendContactMessage(formData);
            }
        });
    }

    function validateField(field) {
        const errorElement = field.parentElement.querySelector('.error-message');
        if (!errorElement) return;

        let isValid = true;
        let errorMessage = '';

        switch (field.type) {
            case 'email':
                if (field.value && !isValidEmail(field.value)) {
                    isValid = false;
                    errorMessage = 'Format d\'email invalide';
                }
                break;
            case 'tel':
                if (field.value && !isValidPhone(field.value)) {
                    isValid = false;
                    errorMessage = 'Format de téléphone invalide';
                }
                break;
            default:
                if (field.required && !field.value.trim()) {
                    isValid = false;
                    errorMessage = 'Ce champ est obligatoire';
                }
        }

        if (isValid) {
            field.style.borderColor = '#28a745';
            errorElement.textContent = '';
        } else {
            field.style.borderColor = '#dc3545';
            errorElement.textContent = errorMessage;
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
        return phoneRegex.test(phone);
    }

    function sendContactMessage(formData) {
        const submitBtn = qs('#contactForm button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;
        
        // Prepare email content
        const emailSubject = `Nouveau message de ${formData.name} - Kolonga Digital Africa`;
        const emailBody = `
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone || 'Non fourni'}
Entreprise: ${formData.company || 'Non fourni'}
Service intéressé: ${formData.service || 'Non spécifié'}
Budget: ${formData.budget || 'Non spécifié'}

Message:
${formData.message}
        `.trim();
        
        // Prepare WhatsApp message
        const whatsappMessage = `Bonjour Kolonga Digital Africa,

Je suis ${formData.name} (${formData.email}${formData.phone ? ', ' + formData.phone : ''}).
${formData.company ? 'Entreprise: ' + formData.company : ''}
${formData.service ? 'Service intéressé: ' + formData.service : ''}

Message: ${formData.message}

Je souhaite discuter de mon projet.`;
        
        // Encode for URL
        const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
        
        // Create email link
        const emailLink = `mailto:kosaladigitalafrica@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Create WhatsApp link
        const whatsappLink = `https://wa.me/242061173738?text=${encodedWhatsappMessage}`;
        
        // Open email client
        window.location.href = emailLink;
        
        // Also open WhatsApp in new tab after a short delay
        setTimeout(() => {
            window.open(whatsappLink, '_blank');
            
            // Show success message
            showNotification('Message envoyé avec succès ! Nous vous recontacterons rapidement.', 'success');
            
            // Reset form
            qs('#contactForm').reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1000);
    }

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : '#dc3545'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    // Add CSS animations for notifications
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

/* ===========================
   Hero Slider System
   =========================== */
class HeroSlider {
    constructor(selector = '.hero-slider') {
        this.root = qs(selector);
        if (!this.root) return;
        
        this.slides = qsa('.slide', this.root);
        this.dots = qsa('.dot', this.root);
        this.prevBtn = qs('.slider-prev', this.root) || qs('.slider-prev');
        this.nextBtn = qs('.slider-next', this.root) || qs('.slider-next');
        this.current = 0;
        this.isPaused = false;
        this.rafId = null;
        this.lastTick = performance.now();
        this.accumulator = 0;
        this.slideDuration = CONFIG.slideDuration;
        
        this.init();
    }

    init() {
        this.root.setAttribute('role', 'region');
        this.root.setAttribute('aria-label', 'Carrousel principal');

        this.updateSlides();
        this.preloadBgImages();

        // Event listeners
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
        this.dots.forEach((dot, idx) => dot.addEventListener('click', () => this.go(idx)));

        this.root.addEventListener('mouseenter', () => this.pause());
        this.root.addEventListener('mouseleave', () => this.play());
        this.root.addEventListener('focusin', () => this.pause());
        this.root.addEventListener('focusout', () => this.play());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });

        this.addSwipe();
        this.play();
    }

    preloadBgImages() {
        this.slides.forEach(s => {
            const bg = s.style.backgroundImage;
            if (bg && bg.includes('url')) {
                const url = bg.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
                const i = new Image();
                i.src = url;
            }
        });
    }

    addSwipe() {
        let startX = 0;
        this.root.addEventListener('touchstart', (e) => startX = e.touches[0].clientX);
        this.root.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            if (Math.abs(diff) > 40) {
                if (diff > 0) this.next(); else this.prev();
            }
        });
    }

    updateSlides() {
        this.slides.forEach((s, idx) => {
            s.classList.toggle('active', idx === this.current);
        });
        
        this.dots.forEach((d, idx) => d.classList.toggle('active', idx === this.current));
        
        const text = qs('.hero-text', this.slides[this.current]);
        if (text) {
            text.style.animation = 'none';
            setTimeout(() => text.style.animation = 'slideInUp 0.8s ease-out', 20);
        }
        
        const bar = qs('.slide-progress-bar');
        if (bar) {
            bar.style.animation = 'none';
            setTimeout(() => bar.style.animation = `progress ${this.slideDuration}ms linear`, 20);
        }
    }

    next() {
        this.current = (this.current + 1) % this.slides.length;
        this.updateSlides();
    }
    
    prev() {
        this.current = (this.current - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
    }
    
    go(idx) {
        if (idx === this.current) return;
        this.current = idx;
        this.updateSlides();
    }

    loopTick(now) {
        if (this.isPaused) {
            this.lastTick = now;
            this.rafId = requestAnimationFrame(this.loopTick.bind(this));
            return;
        }
        
        const delta = now - this.lastTick;
        this.accumulator += delta;
        
        if (this.accumulator >= this.slideDuration) {
            this.next();
            this.accumulator = 0;
        }
        
        this.lastTick = now;
        this.rafId = requestAnimationFrame(this.loopTick.bind(this));
    }

    play() {
        if (this.rafId) cancelAnimationFrame(this.rafId);
        this.isPaused = false;
        this.lastTick = performance.now();
        this.accumulator = 0;
        this.rafId = requestAnimationFrame(this.loopTick.bind(this));
        
        const bar = qs('.slide-progress-bar');
        if (bar) bar.style.animationPlayState = 'running';
    }
    
    pause() {
        this.isPaused = true;
        const bar = qs('.slide-progress-bar');
        if (bar) bar.style.animationPlayState = 'paused';
    }

    destroy() {
        if (this.rafId) cancelAnimationFrame(this.rafId);
    }
}

/* ===========================
   Core System Functions
   =========================== */

// Smooth scroll for anchors
function initSmoothAnchors() {
    qsa('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = qs(href);
            if (!target) return;
            e.preventDefault();
            const header = qs('#header') || qs('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

// Lazy loading images
function initLazyLoading() {
    const lazyImages = qsa('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const img = entry.target;
                img.src = img.dataset.src;
                img.addEventListener('load', () => {
                    img.classList.remove('lazy');
                    img.removeAttribute('data-src');
                });
                obs.unobserve(img);
            });
        }, { root: null, rootMargin: '200px 0px', threshold: 0.01 });

        lazyImages.forEach(img => imgObserver.observe(img));
    } else {
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            img.removeAttribute('data-src');
        });
    }
}

// Image error handling
function handleImageErrors() {
    qsa('img').forEach(img => {
        img.addEventListener('error', function () {
            if (this.dataset.failed) return;
            this.dataset.failed = 'true';
            this.src = 'images/placeholder.jpg';
            this.alt = this.alt || 'Image non disponible';
        });
    });
}

// Scroll position management
function saveScrollPosition() {
    try {
        sessionStorage.setItem('scrollPosition', String(window.scrollY || 0));
    } catch (e) { /* ignore */ }
}

function restoreScrollPosition() {
    try {
        const pos = sessionStorage.getItem('scrollPosition');
        if (pos) {
            window.scrollTo(0, parseInt(pos, 10));
            sessionStorage.removeItem('scrollPosition');
        }
    } catch (e) { /* ignore */ }
}

/* ===========================
   Main Initialization
   =========================== */
document.addEventListener('DOMContentLoaded', function () {
    showLoader();
    loadComponents();
    initLazyLoading();
    handleImageErrors();
    initGlobalObserver();
    initSmoothAnchors();
    initCardAnimations();

    // Observe all sections
    qsa('section').forEach(sec => globalObserver.observe(sec));

    // Page-specific initializations
    if (document.querySelector('.hero-about')) {
        initAboutPage();
    }
    if (document.querySelector('.hero-offers')) {
        initOffersPage();
    }
    if (document.querySelector('.hero-projects')) {
        initProjectsPage();
    }
    if (document.querySelector('.hero-realisations')) {
        initRealisationsPage();
    }
    if (document.querySelector('.hero-contact')) {
        initContactPage();
    }

    // Hero slider initialization
    setTimeout(() => {
        try {
            if (qs('.hero-slider')) {
                new HeroSlider();
            }
            if (qs('.slider-controls') && !qs('.slide-progress')) {
                const progressWrap = document.createElement('div');
                progressWrap.className = 'slide-progress';
                progressWrap.innerHTML = '<div class="slide-progress-bar"></div>';
                qs('.slider-controls').appendChild(progressWrap);
            }
        } catch (e) {
            console.error('HeroSlider init error', e);
        }
    }, 450);

    // Scroll-based fade-in
    window.addEventListener('scroll', throttle(() => {
        qsa('.fade-in').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < (window.innerHeight - 120)) {
                el.classList.add('visible');
                el.style.transform = 'translateY(0)';
                el.style.opacity = '1';
            }
        });
    }, 180));

    window.addEventListener('beforeunload', saveScrollPosition);
    window.addEventListener('load', restoreScrollPosition);
});

/* ===========================
   Exportable API
   =========================== */
if (typeof window !== 'undefined') {
    window.Kolonga = {
        initHeader,
        initFooter,
        HeroSlider,
        initLazyLoading,
        initGlobalObserver,
        initAboutPage,
        initOffersPage,
        initProjectsPage,
        initRealisationsPage,
        initContactPage,
        initCardAnimations,
        initFilteringSystem,
        initCardEnhancements
    };
}
