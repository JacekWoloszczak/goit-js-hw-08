import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const STORAGE = 'feedback-form-state';

const saveTime = throttle(event => {
  event.preventDefault();
  STORAGE;
}, 500);

feedbackForm.elements.email.value = localStorage.getItem(STORAGE) ?? '';
feedbackForm.elements.message.value = localStorage.getItem(STORAGE) ?? '';
feedbackForm.addEventListener('input', saveTime);
feedbackForm.addEventListener('input', event => {
  const formData = {
    email: feedbackForm.elements.email.value,
    message: feedbackForm.elements.message.value,
  };
  localStorage.setItem(STORAGE, JSON.stringify(formData));

  // localStorage.setItem(STORAGE, event.target.value);
});
feedbackForm.addEventListener('submit', saveTime);
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {
    email: feedbackForm.elements.email.value,
    message: feedbackForm.elements.message.value,
  };
  // localStorage.setItem(STORAGE, JSON.stringify(formData));
  console.log(formData);

  localStorage.removeItem(STORAGE);

  feedbackForm.reset();
});
