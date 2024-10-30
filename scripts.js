// JavaScript for Bangalore Community Website

// Smooth scrolling for anchor links (e.g., navigation links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to toggle navigation bar background on scroll
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Form validation for the Contact Us page
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (!name || !email || !message) {
            event.preventDefault();
            alert('All fields are required!');
        } else if (!validateEmail(email)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
}

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Form validation for Login page
const loginForm = document.querySelector('#login form');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        const username = document.querySelector('#username').value.trim();
        const password = document.querySelector('#password').value.trim();

        if (!username || !password) {
            event.preventDefault();
            alert('Username and password are required!');
        }
    });
}

// Modal functionality for the Login Page
const modalBtn = document.querySelector('.login-modal-btn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

if (modalBtn && modal && closeModal) {
    modalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Animations on Scroll using Intersection Observer API
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -150px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
