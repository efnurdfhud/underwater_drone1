// get elements
const submitBtn = document.getElementById('submitBtn');
const backBtn = document.getElementById('backBtn');
const formContainer = document.getElementById('formContainer');
const thankyouContainer = document.getElementById('thankyouContainer');

// submit button clicked
submitBtn.addEventListener('click', () => {
  // you could validate inputs here
  formContainer.style.display = 'none';
  thankyouContainer.style.display = 'block';
});

// back button clicked
backBtn.addEventListener('click', () => {
  thankyouContainer.style.display = 'none';
  formContainer.style.display = 'block';
});
