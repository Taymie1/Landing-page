 // Subscribe Button Action
const subscribeBtn = document.getElementById('subscribeBtn');
const submitEmail = document.getElementById('submitEmail');
const emailInput = document.getElementById('emailInput');
const subscribeMessage = document.getElementById('subscribeMessage');

// Smooth scroll to Subscribe section
subscribeBtn.addEventListener('click', () => {
  document.getElementById('subscribe').scrollIntoView({ behavior: 'smooth' });
});

// Handle email subscription
submitEmail.addEventListener('click', () => {
  const email = emailInput.value;
  if (email && email.includes('@')) {
    subscribeMessage.textContent = `Thank you for subscribing, ${email}!`;
    subscribeMessage.style.color = '#ff1493';
    emailInput.value = '';
  } else {
    subscribeMessage.textContent = 'Please enter a valid email.';
    subscribeMessage.style.color = 'red';
  }
});
