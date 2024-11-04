document.addEventListener("DOMContentLoaded", function () {
  // Form handling
  const form = document.getElementById("contact-form");
  const thankYouMessage = document.getElementById("thank-you-message");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (thankYouMessage) {
        thankYouMessage.classList.remove("hidden");

        setTimeout(() => {
          thankYouMessage.classList.add("hidden");
        }, 2000);
      }
    });
  }

  // Menu toggling
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  }

  // Welcome message

  const welcomeMessage = document.getElementById("welcome-message");
  const mainContent = document.getElementById("main-content");

  if (welcomeMessage && mainContent) {
    setTimeout(() => {
      welcomeMessage.classList.add("fade-out");
      // After fade-out transition ends, show the main content
      setTimeout(() => {
        welcomeMessage.remove();
        mainContent.classList.remove("hidden");
        mainContent.classList.add("show");
      }, 1000);
    }, 0);
  }

  // projects section

  const projects = document.querySelectorAll(".project");
let currentIndex = 0;

function updateProjectVisibility() {
    // Set display to "none" for all projects except the current one
    projects.forEach((project, index) => {
        project.style.display = index === currentIndex ? "block" : "none";
    });
}

// Next button event
document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projects.length; 
    updateProjectVisibility();
});

// Previous button event
document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length; 
    updateProjectVisibility();
});

// Initial visibility setup
updateProjectVisibility();

// skills section

// Function to animate skill progress bars
function animateSkills() {
    const skillProgressElements = document.querySelectorAll('.skill-progress');
    
    skillProgressElements.forEach(skill => {
        const percent = skill.getAttribute('data-percent');
        skill.style.width = '0%'; // Start from 0

        // Animate to the defined width
        setTimeout(() => {
            skill.style.width = percent + '%';
            skill.classList.add('show-end'); 
        }, 500); 
    });
}

// Intersection Observer to trigger the animation when the section is in view
const skillsSection = document.querySelector('.skills-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills(); 
            observer.unobserve(skillsSection); 
        }
    });
});

// Start observing the skills section
observer.observe(skillsSection);




});
