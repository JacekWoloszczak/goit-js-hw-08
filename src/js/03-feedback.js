import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const STORAGE = 'feedback-form-state';
const saveTime = throttle(() => {
  500;
});

feedbackForm.elements.email.value = localStorage.getItem(STORAGE) ?? '';
feedbackForm.elements.message.value = localStorage.getItem(STORAGE) ?? '';

feedbackForm.addEventListener('input', event => {
  localStorage.setItem(STORAGE, event.target.value);
});

feedbackForm.addEventListener('submit', () => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE, JSON.stringify(state));
  console.log(state);
  localStorage.removeItem(STORAGE);

  feedbackForm.reset();
});
