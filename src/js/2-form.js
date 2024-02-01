const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedState = loadFromLocalStorage(localStorageKey);

if (savedState) {
  form.elements.email.value = savedState.email || '';
  form.elements.message.value = savedState.message || '';
}

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  saveToLocalStorage('userData', formData);
}
function onFormSubmit(event) {
  event.preventDefault();

  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('Please fill in both email and message fields');
    return;
  }

  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
}

function saveToLocalStorage(key, value) {
  const zip = JSON.stringify(value);
  localStorage.setItem(key, zip);
}

function loadFromLocalStorage(key) {
  const zip = localStorage.getItem(key);
  try {
    return JSON.parse(zip);
  } catch {
    return zip;
  }
}
