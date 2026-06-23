// Theme toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    function updateThemeButton() {
        if (body.classList.contains('light-theme')) {
            themeToggle.textContent = '🌙 Dark';
        } else {
            themeToggle.textContent = '☀️ Light';
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    }

    if (themeToggle) {
        updateThemeButton();

        themeToggle.addEventListener('click', function() {
            body.classList.toggle('light-theme');
            const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
            localStorage.setItem('theme', currentTheme);
            updateThemeButton();
        });
    }
}

// Format file size in upload demo
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Scroll progress indicator
function initializeScrollProgress() {
    window.addEventListener('scroll', () => {
        const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    });
}

// Initialize all utilities on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeThemeToggle();
    initializeScrollProgress();
});
