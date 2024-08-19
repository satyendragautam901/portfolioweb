document.addEventListener('DOMContentLoaded', function() {
    // Form handling
    const form = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            if (thankYouMessage) {
                thankYouMessage.classList.remove('hidden'); 
                
                setTimeout(() => {
                    thankYouMessage.classList.add('hidden');
                }, 3000); 
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
    
    // Welcome message

    const welcomeMessage = document.getElementById('welcome-message');
    const mainContent = document.getElementById('main-content');
    
    if (welcomeMessage && mainContent) {
        setTimeout(() => {
            welcomeMessage.classList.add('fade-out');
            // After fade-out transition ends, show the main content
            setTimeout(() => {
                welcomeMessage.remove(); 
                mainContent.classList.remove('hidden'); 
                mainContent.classList.add('show');
            }, 1000);
        }, 2000); 
    }
});
