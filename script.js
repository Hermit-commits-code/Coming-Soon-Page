const form = document.querySelector('#signupForm');
const emailInput = document.querySelector('#emailInput');
const errorText = document.querySelector('.form-error');

function showError(message) {
  errorText.textContent = message;
  emailInput.classList.add('is-error');
  errorText.classList.add('is-visible');
  emailInput.setAttribute('aria-invalid', 'true');
}

function clearError() {
  errorText.textContent = '';
  emailInput.classList.remove('is-error');
  errorText.classList.remove('is-visible');
  emailInput.removeAttribute('aria-invalid');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (email === '') {
    showError('Whoops! It looks like you forgot to add your email');
    return;
  }

  emailInput.value = email;
  const isValidEmail = emailInput.checkValidity();

  if (!isValidEmail) {
    showError('Please provide a valid email');
    return;
  }

  clearError();
});
