// Smooth scrolling for navigation links
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

// CTA button click handler
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.getAttribute('href') === null) {
            console.log('CTA Button clicked');
            // Add custom functionality here
        }
    });
});

// Log when page loads
window.addEventListener('load', function() {
    console.log('Cradle of Love website loaded successfully!');
});