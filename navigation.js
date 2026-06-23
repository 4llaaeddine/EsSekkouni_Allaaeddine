// Navigation active state
function initializeNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', initializeNavigation);
