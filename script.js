document.addEventListener('DOMContentLoaded', () => {
    // 1. Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after revealing to only animate once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // 4. Review Modal Logic
    const btnReview = document.getElementById('btn-review');
    const reviewModal = document.getElementById('review-modal');
    const closeModal = document.getElementById('close-modal');
    const reviewForm = document.getElementById('review-form');

    if (btnReview && reviewModal && closeModal) {
        btnReview.addEventListener('click', () => {
            reviewModal.classList.add('active');
        });

        closeModal.addEventListener('click', () => {
            reviewModal.classList.remove('active');
        });

        // Close on outside click
        reviewModal.addEventListener('click', (e) => {
            if (e.target === reviewModal) {
                reviewModal.classList.remove('active');
            }
        });
    }

    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // In a real application, this would send data to a backend API.
            // Since there is no backend configured currently, we simulate a success message.
            
            const btn = reviewForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = "Submitting...";
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = "Success! Pending Verification.";
                btn.style.backgroundColor = "var(--c-forest-green)";
                
                setTimeout(() => {
                    reviewModal.classList.remove('active');
                    reviewForm.reset();
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = "";
                }, 2000);
            }, 800);
        });
    }
});
