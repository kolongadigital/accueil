/* script.js - Kolonga Digital Africa
   Version: 1.0.0
   Objectifs:
   - Menu mobile déroulant du haut vers le bas avec overlay et blocage du scroll
   - Loader (logo + spinner)
   - Chargement header/footer via fetch (avec cache localStorage)
   - Lazy loading, IntersectionObserver animations, compteurs
   - Hero slider optimisé
   - Accessibilité (ARIA), throttling scroll, divers fix
*/

/* ===========================
   Configuration & Helpers
   =========================== */
const CONFIG = {
    slideDuration: 6000,
    throttleDelay: 100, // ms pour scroll throttle
    loaderMinMs: 800, // temps min du loader
    headerCacheKey: 'kolonga_header_html_v1',
    footerCacheKey: 'kolonga_footer_html_v1',
};

const qs = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => Array.from((ctx || document).querySelectorAll(sel));
const safeSetHTML = (el, html) => { if (el) el.innerHTML = html; };

/* ===========================
   Utility: Throttle
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

/* ===========================
   Loader
   =========================== */
function showLoader() {
    // Create loader only if not present
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
    document.documentElement.style.overflow = 'hidden'; // block scroll while loader visible
    document.body.appendChild(loader);

    // Ensure loader stays visible at least CONFIG.loaderMinMs ms
    const start = Date.now();
    window.addEventListener('load', () => {
        const elapsed = Date.now() - start;
        const remaining = Math.max(0, CONFIG.loaderMinMs - elapsed);
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
                document.documentElement.style.overflow = ''; // restore scroll
            }, 400);
        }, remaining);
    });
}

/* ===========================
   Components loader (header/footer) with caching
   =========================== */
async function fetchWithCache(url, cacheKey) {
    try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) return cached;
    } catch (e) {
        // localStorage could be disabled - proceed to fetch
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
                // if header is inserted into #header-container but the main page expects #header id, try to normalise
                const loadedHeader = headerContainer.querySelector('header') || headerContainer;
                if (!loadedHeader.id && headerContainer.id === 'header-container') {
                    loadedHeader.id = 'header';
                }
                initHeader();
            })
            .catch(err => {
                console.error('Erreur chargement header:', err);
                initHeader(); // attempt init anyway (defensive)
            });
    } else {
        console.warn('Aucun header-container trouvé. initHeader sera appelé sur le header existant.');
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
        console.warn('Aucun footer-container trouvé. initFooter sera appelé sur le footer existant.');
        initFooter();
    }
}

/* ===========================
   Header & Mobile Menu
   - Mobile menu drops down from header (vertical)
   - Overlay created to dim background and trap focus
   - Body scroll locked while menu open
   =========================== */
// Initialiser le header après chargement
function initHeader() {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Effet de scroll fluide pour le header
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
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
    });

    // ✅ Créer un overlay pour le mode mobile
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

    // ✅ Fonction de mise à jour du menu selon la taille de l’écran
    function updateMenuMode() {
        const isMobile = window.innerWidth < 992;

        if (isMobile) {
            // Mode mobile : menu caché par défaut
            nav.style.display = 'none';
            nav.classList.remove('nav-expanded');
            mobileMenuBtn.style.display = 'block';
        } else {
            // Mode desktop : menu toujours visible
            nav.style.display = 'flex';
            overlay.style.visibility = 'hidden';
            overlay.style.opacity = '0';
            document.body.style.overflow = '';
            mobileMenuBtn.classList.remove('active');
        }
    }

    // ✅ Gestion du clic sur le bouton menu
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = nav.classList.contains('nav-expanded');
            const isMobile = window.innerWidth < 992;

            if (!isMobile) return; // Ne rien faire sur desktop

            if (isExpanded) {
                // Fermer le menu
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
                // Ouvrir le menu
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

    // ✅ Fermer le menu si on clique sur un lien ou sur l’overlay
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

    // ✅ Ajuster automatiquement quand on redimensionne la fenêtre
    window.addEventListener('resize', updateMenuMode);

    // ✅ Appel initial
    updateMenuMode();

    // Animation légère survol des liens
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
   Footer
   =========================== */
function initFooter() {
    // update year
    const footerBottomP = qs('.footer-bottom p') || qs('footer .footer-bottom p');
    if (footerBottomP) {
        const currentYear = new Date().getFullYear();
        footerBottomP.innerHTML = `&copy; ${currentYear} Kolonga Digital Africa. Tous droits réservés.`;
    }

    // Newsletter submit handling
    const newsletterForm = qs('.newsletter-form');
    if (newsletterForm) {
        // Ensure the input/button are present
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitBtn = newsletterForm.querySelector('button[type="submit"]');

        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!emailInput || !submitBtn) return;
            const email = (emailInput.value || '').trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && emailRegex.test(email)) {
                // visual feedback
                const original = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>';
                submitBtn.style.backgroundColor = '#28a745';
                // fake send - TODO: replace by API call
                console.log('Newsletter signup:', email);

                setTimeout(() => {
                    submitBtn.innerHTML = original;
                    submitBtn.style.backgroundColor = '';
                    newsletterForm.reset();
                    // show small transient message
                    const msg = document.createElement('div');
                    msg.className = 'newsletter-msg';
                    msg.textContent = 'Merci — inscription réussie !';
                    msg.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#222;color:#fff;padding:10px 14px;border-radius:8px;z-index:1200;';
                    document.body.appendChild(msg);
                    setTimeout(() => msg.remove(), 2500);
                }, 1000);
            } else {
                // invalid
                emailInput.style.borderColor = '#dc3545';
                emailInput.focus();
                setTimeout(() => {
                    emailInput.style.borderColor = '';
                }, 1600);
            }
        });
    }

    // Social icons tiny hover
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
   Fade-in and IntersectionObserver logic
   Centralized observer for sections and animated items
   =========================== */
const globalObserverOptions = { root: null, rootMargin: '0px', threshold: 0.25 };
let globalObserver = null;

function initGlobalObserver() {
    if (globalObserver) return; // idempotent
    globalObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            el.classList.add('section-visible');
            // specific triggers
            if (el.classList.contains('stats')) {
                runCountersIn(el);
            }
            // reveal simple fade-in children
            qsa('.fade-in', el).forEach((child, idx) => {
                child.style.transitionDelay = (idx * 80) + 'ms';
                child.classList.add('visible');
            });
            obs.unobserve(el);
        });
    }, globalObserverOptions);
}

/* Animate counters inside a container (only once) */
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
                // pulse effect
                counter.style.transition = 'transform .18s ease';
                counter.style.transform = 'scale(1.06)';
                setTimeout(() => counter.style.transform = 'scale(1)', 260);
            }
        };
        counter.dataset.animated = 'true';
        requestAnimationFrame(step);
    });
}

/* ===========================
   Lazy Loading images (data-src) & fallback
   =========================== */
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
        // fallback: load all
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            img.removeAttribute('data-src');
        });
    }
}

/* Error handling for images */
function handleImageErrors() {
    qsa('img').forEach(img => {
        img.addEventListener('error', function () {
            if (this.dataset.failed) return; // avoid loops
            this.dataset.failed = 'true';
            this.src = 'images/placeholder.jpg';
            this.alt = this.alt || 'Image non disponible';
            console.warn('Image fallback used for', this);
        });
    });
}

/* ===========================
   Hero Slider (object-oriented)
   - Uses requestAnimationFrame for timing
   - Accessible: aria-live region, keyboard navigation
   =========================== */
class HeroSlider {
    constructor(selector = '.hero-slider') {
        this.root = qs(selector);
        if (!this.root) return;
        this.slides = qsa('.slide', this.root);
        this.dots = qsa('.dot', this.root);
        this.prevBtn = qs('.slider-prev', this.root) || qs('.slider-prev');
        this.nextBtn = qs('.slider-next', this.root) || qs('.slider-next');
        this.controls = qs('.slider-controls');
        this.current = 0;
        this.isPaused = false;
        this.rafId = null;
        this.lastTick = performance.now();
        this.accumulator = 0;
        this.slideDuration = CONFIG.slideDuration;
        this.init();
    }

    init() {
        // ensure aria attributes for accessibility
        this.root.setAttribute('role', 'region');
        this.root.setAttribute('aria-label', 'Carrousel principal');

        // show first slide
        this.updateSlides();

        // preload backgrounds
        this.preloadBgImages();

        // events
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
        this.dots.forEach((dot, idx) => dot.addEventListener('click', () => this.go(idx)));

        // pause on hover/focus
        this.root.addEventListener('mouseenter', () => this.pause());
        this.root.addEventListener('mouseleave', () => this.play());
        this.root.addEventListener('focusin', () => this.pause());
        this.root.addEventListener('focusout', () => this.play());

        // keyboard
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });

        // swipe for touch
        this.addSwipe();

        // start auto-play loop
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
        // animate hero text if present
        const text = qs('.hero-text', this.slides[this.current]);
        if (text) {
            text.style.animation = 'none';
            setTimeout(() => text.style.animation = 'slideInUp 0.8s ease-out', 20);
        }
        // reset progress bar if exists
        const bar = qs('.slide-progress-bar');
        if (bar) {
            bar.style.animation = 'none';
            // trigger reflow then restart
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
   Smooth scroll for anchors (accounts for header height)
   =========================== */
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

/* ===========================
   Misc UI interactions (cards hover, stat hover)
   =========================== */
function initUIInteractions() {
    qsa('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-12px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
            const icon = qs('.service-icon', this);
            if (icon) icon.style.transform = 'scale(1.06) rotate(3deg)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.transform = '';
            this.style.boxShadow = '';
            const icon = qs('.service-icon', this);
            if (icon) icon.style.transform = '';
        });
    });

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
}

/* ===========================
   Restore scroll position between reloads
   =========================== */
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
   Init function (DOMContentLoaded)
   =========================== */
document.addEventListener('DOMContentLoaded', function () {
    // show loader
    showLoader();

    // load components and then initialise header/footer
    loadComponents();

    // init lazy loading and image fallback
    initLazyLoading();
    handleImageErrors();

    // central observer
    initGlobalObserver();
    // observe primary sections (defensive)
    qsa('section').forEach(sec => globalObserver.observe(sec));

    // init other UI
    initSmoothAnchors();
    initUIInteractions();

    // Hero slider initialisation (after short delay to allow DOM inserted)
    setTimeout(() => {
        try {
            // only init if hero exists
            if (qs('.hero-slider')) {
                new HeroSlider();
            }
            // create progress bar container if slider controls exist and no progress
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

    // Fade-in on scroll using simple fallback if needed
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

    // save scroll position before unload
    window.addEventListener('beforeunload', saveScrollPosition);
    // restore after load
    window.addEventListener('load', restoreScrollPosition);
});

/* ===========================
   Exportable helpers (if used in modular build)
   =========================== */
if (typeof window !== 'undefined') {
    window.Kolonga = {
        initHeader,
        initFooter,
        HeroSlider,
        initLazyLoading,
        initGlobalObserver
    };
}
