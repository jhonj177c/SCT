/**
 * Special Class Tours - Script Principal
 * Funcionalidades: Carrusel Hero, Navegación, Scroll Reveal, Smooth Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initHeroCarousel();
    initTestimoniosCarousel();
    initScrollReveal();
    initSmoothScroll();
});

/**
 * Header - Cambio de estilo al hacer scroll
 */
function initHeader() {
    const header = document.getElementById('header');
    const scrollThreshold = 100;

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Estado inicial
}

/**
 * Menú móvil (hamburguesa)
 */
document.getElementById('navToggle').addEventListener('click', () => {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    
    nav.classList.toggle('open');
    toggle.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav').classList.remove('open');
        document.getElementById('navToggle').classList.remove('active');
        document.body.style.overflow = '';
    });
});

/**
 * Hero Carrusel (Glorieta)
 */
function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero__slide');
    const prevBtn = document.getElementById('heroPrev');
    const nextBtn = document.getElementById('heroNext');
    const dotsContainer = document.getElementById('heroDots');
    const autoPlayInterval = 5000; // 5 segundos

    let currentSlide = 0;
    let autoPlayTimer;

    if (slides.length === 0) return;

    // Crear dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('hero__dot');
        dot.setAttribute('aria-label', `Ir a slide ${i + 1}`);
        if (i === 0) dot.classList.add('hero__dot--active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.hero__dot');

    function goToSlide(index) {
        slides[currentSlide].classList.remove('hero__slide--active');
        dots[currentSlide]?.classList.remove('hero__dot--active');
        
        currentSlide = (index + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('hero__slide--active');
        dots[currentSlide]?.classList.add('hero__dot--active');
        
        resetAutoPlay();
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(nextSlide, autoPlayInterval);
    }

    function pauseAutoPlay() {
        clearInterval(autoPlayTimer);
    }

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Pausar en hover
    document.querySelector('.hero').addEventListener('mouseenter', pauseAutoPlay);
    document.querySelector('.hero').addEventListener('mouseleave', resetAutoPlay);

    // Iniciar autoplay
    resetAutoPlay();
}

/**
 * Carrusel de Testimonios
 */
function initTestimoniosCarousel() {
    const testimonios = document.querySelectorAll('.testimonio');
    const dotsContainer = document.getElementById('testimoniosDots');
    const autoPlayInterval = 6000;

    let current = 0;
    let timer;

    if (testimonios.length === 0) return;

    // Crear dots
    testimonios.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('testimonio-dot');
        dot.setAttribute('aria-label', `Testimonio ${i + 1}`);
        if (i === 0) dot.classList.add('testimonio-dot--active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.testimonio-dot');

    function goTo(index) {
        testimonios[current].classList.remove('testimonio--active');
        dots[current]?.classList.remove('testimonio-dot--active');
        
        current = (index + testimonios.length) % testimonios.length;
        
        testimonios[current].classList.add('testimonio--active');
        dots[current]?.classList.add('testimonio-dot--active');
        
        clearInterval(timer);
        timer = setInterval(() => goTo(current + 1), autoPlayInterval);
    }

    timer = setInterval(() => goTo(current + 1), autoPlayInterval);
}

/**
 * Scroll Reveal - Animaciones al entrar en viewport
 */
function initScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px', // Activa un poco antes
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    elements.forEach(el => observer.observe(el));
}

/**
 * Smooth Scroll para enlaces internos
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
