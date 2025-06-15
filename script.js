// Smooth scroll for nav links and "Learn More" button
document.querySelectorAll('.nav-scroll').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      // Close mobile nav if open
      document.querySelector('.nav-links').classList.remove('open');
    }
  });
});

document.getElementById('learnMoreBtn').addEventListener('click', function() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');
mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Contact form validation and feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  // Clear previous errors
  ['name', 'email', 'message'].forEach(id => {
    document.getElementById(id + 'Error').textContent = '';
  });

  // Name validation
  const name = document.getElementById('name').value.trim();
  if (name.length < 2) {
    document.getElementById('nameError').textContent = 'Please enter your name.';
    valid = false;
  }

  // Email validation
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email.';
    valid = false;
  }

  // Message validation
  const message = document.getElementById('message').value.trim();
  if (message.length < 5) {
    document.getElementById('messageError').textContent = 'Please enter a message.';
    valid = false;
  }

  const formMsg = document.getElementById('formMsg');
  if (valid) {
    formMsg.textContent = 'Thank you! Your message has been sent.';
    formMsg.className = 'success';
    this.reset();
  } else {
    formMsg.textContent = 'Please correct the errors above.';
    formMsg.className = 'error';
  }
});

// Close mobile nav on outside click
document.addEventListener('click', function(e) {
  const nav = document.querySelector('.nav-links');
  const btn = document.getElementById('mobileMenuBtn');
  if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== btn) {
    nav.classList.remove('open');
  }
});