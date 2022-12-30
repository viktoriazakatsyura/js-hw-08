import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');

const savedFormDataJSON = localStorage.getItem('feedback-form-state');
const savedFormData = JSON.parse(savedFormDataJSON);

if (savedFormData !== null) {
  feedbackForm['email'].value = savedFormData.email;
  feedbackForm['message'].value = savedFormData.message;
}

feedbackForm.addEventListener(
  'input',
  throttle(event => {
    const formData = {
      email: `${feedbackForm['email'].value}`,
      message: `${feedbackForm['message'].value}`,
    };
    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem('feedback-form-state', formDataJSON);
  }, 500)
);

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: `${feedbackForm['email'].value}`,
    message: `${feedbackForm['message'].value}`,
  };
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  feedbackForm['email'].value = '';
  feedbackForm['message'].value = '';
});
