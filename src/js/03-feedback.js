import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const inputEl = document.querySelector('input');
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  const formData = { email: inputEl.value, message: textarea.value };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  evt.preventDefault();
  if (
    e.currentTarget.email.value === '' ||
    e.currentTarget.message.value === ''
  ) {
    console.log('no data');
  } else {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    evt.currentTarget.reset();
  }
}

function checkStorage() {
  const parseSavedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (parseSavedData) {
    inputEl.value = parseSavedData.email;
    textarea.value = parseSavedData.message;
  } else {
    inputEl.value = '';
    textarea.value = '';
  }
}
checkStorage();