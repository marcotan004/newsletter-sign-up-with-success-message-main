const emailForm = document.getElementById("email-form");
const emailLabel = document.getElementById("email-label");
const emailError = document.getElementById("email-error");
const emailInput = document.getElementById("email");

const successForm = document.getElementById("dismiss-section");
const card = document.getElementById("card");
const submittedEmail = document.getElementById("submitted-email");
const dismissButton = document.getElementById("dismiss-button");

let inputState = 'valid';
let email = '';

function handleInput (e) {
    if (inputState === 'invalid' && e.target.validity.valid) {
        emailError?.classList.add("hidden");
        inputState = 'valid';
    }
}

function handleInvalid (e) {
    inputState = 'invalid';
    emailError?.classList.remove("hidden");
}

function handleEmailSubmit (e) {
    e.preventDefault();
    successForm.classList.remove("hidden");
    card.classList.add("hidden");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    email = data?.email;
    submittedEmail.textContent = email;
}

function handleDismissSubmit (e) {
    e.preventDefault();
    email = '';
    successForm.classList.add("hidden");
    card.classList.remove("hidden");
    emailError?.classList.add("hidden");
    emailForm.reset();
    inputState = 'valid';
}

dismissButton?.addEventListener('click', handleDismissSubmit)
emailForm?.addEventListener('submit', handleEmailSubmit);
emailInput?.addEventListener('invalid', handleInvalid);
emailInput?.addEventListener('input', handleInput);