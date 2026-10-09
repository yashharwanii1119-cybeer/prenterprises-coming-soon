document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Font loading fallback check
    if (document.fonts) {
        document.fonts.ready.then(() => {
            // Fonts loaded successfully, nothing needed
        }).catch(() => {
            // Add fallback class if fonts fail to load
            document.documentElement.classList.add('fallback-fonts');
        });
    }

    // Particle animation (only if user hasn't requested reduced motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        createParticles();
    }
});

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = Math.floor(window.innerWidth / 30); // Responsive amount of particles
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 1px and 4px
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // Random animation duration and delay
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;
        
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `-${delay}s`; // Negative delay so some start immediately in motion
        
        particlesContainer.appendChild(particle);
    }
}

// Recreate particles on resize to ensure good coverage
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            const particlesContainer = document.getElementById('particles');
            if (particlesContainer) {
                particlesContainer.innerHTML = '';
                createParticles();
            }
        }
    }, 300);
});
