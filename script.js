const emailForm = document.getElementById("email-form");
const emailLabel = document.getElementById("email-label");
const emailError = document.getElementById("email-error");
const emailInput = document.getElementById("email-input");

const successForm = document.getElementById("success-form");
const card = document.getElementById("card");
const submittedEmail = document.getElementById("submitted-email");

let inputState = 'valid';
let email = '';

function handleInput (e) {
    if (inputState === 'invalid' && e.target.validity.valid) {
        emailError?.classList.add("hidden");
    }
}

function handleInvalid (e) {
    inputState = 'invalid';
    emailError?.classList.remove("hidden");
}

function handleSubmit (e) {
    e.preventDefault();
    successForm.classList.remove("hidden");
    card.classList.add("hidden");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    email = data?.email;
    submittedEmail.textContent = email;
}

emailForm.addEventListener('submit', handleSubmit);
emailInput.addEventListener('invalid', handleInvalid);
emailInput.addEventListener('input', handleInput);