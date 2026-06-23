// Scroll reveal animation
function initializeScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
}

// Initialize scroll reveal on page load
document.addEventListener('DOMContentLoaded', initializeScrollReveal);
