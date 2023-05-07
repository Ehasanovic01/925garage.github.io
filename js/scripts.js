document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
});


document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Form validation and submission logic
  alert('Your message has been sent! We will get back to you soon.');
});
