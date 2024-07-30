document.addEventListener('DOMContentLoaded', function() {
    // Form handling
    const form = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            
            if (thankYouMessage) {
                thankYouMessage.classList.remove('hidden'); // Show the thank-you message
                
                // Optionally hide the message after a few seconds
                setTimeout(() => {
                    thankYouMessage.classList.add('hidden');
                }, 3000); // Message disappears after 3 seconds
            }
        });
    }
    
    // Menu toggling
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    }
});
